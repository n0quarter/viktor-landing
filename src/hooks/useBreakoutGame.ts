import { useEffect } from "react";

// A calm, self-playing *reverse* Breakout scene laid over a headline. The paddle
// rides along the TOP, the two headline lines are the bricks, and the ball
// bounces off a "floor" — the line below the headline (e.g. the "19 years…" row).
//
// The animation is driven by mutating the ball/paddle/letter DOM nodes directly
// through refs inside the rAF loop — deliberately NO React state per frame, so
// the component never re-renders while it plays. Re-rendering the letters at
// 60fps is what pins the CPU; direct style writes cost almost nothing.

export type Rect = { x: number; y: number; w: number; h: number };
type Ball = { x: number; y: number; r: number };

export const BALL_RADIUS = 7;
const BALL_SPEED = 2.6; // px per frame, calm (≈1 min to clear both lines)
export const PADDLE_WIDTH = 64;
export const PADDLE_HEIGHT = 8;
// The top paddle is a damped spring chasing the ball — it eases in (accelerates),
// builds momentum, then eases out (decelerates) as it settles. Tuned so it always
// catches the ball (verified: 0 misses against the real headline geometry).
const PADDLE_STIFFNESS = 0.15; // spring pull toward the ball (brisk but with momentum)
const PADDLE_DAMPING = 0.2; // velocity damping (accel/decel feel)
const PADDLE_LANE = 42; // px above the first line — sits just under the top banner
const RESET_DELAY_MS = 1200; // pause before the lines heal and the loop repeats
const BRICK_HEIGHT_FACTOR = 0.7; // shrink bricks so the ball can pass over/under
const FLOOR_FALLBACK = 160; // px below the container top if no floor element given
const BROKEN_OPACITY = "0.45"; // knocked-out letters dim but stay readable

// Reflect the ball off a rect it overlaps, flipping velocity on the shallower
// axis of penetration.
export function reflectOffRect(
  ball: Ball,
  vx: number,
  vy: number,
  rect: Rect
): { vx: number; vy: number } {
  const rectCx = rect.x + rect.w / 2;
  const rectCy = rect.y + rect.h / 2;
  const overlapX = ball.r + rect.w / 2 - Math.abs(ball.x - rectCx);
  const overlapY = ball.r + rect.h / 2 - Math.abs(ball.y - rectCy);
  if (overlapX < overlapY) {
    return { vx: ball.x < rectCx ? -Math.abs(vx) : Math.abs(vx), vy };
  }
  return { vx, vy: ball.y < rectCy ? -Math.abs(vy) : Math.abs(vy) };
}

export function ballHitsRect(ball: Ball, rect: Rect): boolean {
  const nearestX = Math.max(rect.x, Math.min(ball.x, rect.x + rect.w));
  const nearestY = Math.max(rect.y, Math.min(ball.y, rect.y + rect.h));
  const dx = ball.x - nearestX;
  const dy = ball.y - nearestY;
  return dx * dx + dy * dy <= ball.r * ball.r;
}

export function shouldEnableGame(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return (
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.matchMedia("(min-width: 768px)").matches
  );
}

type Refs = {
  enabled: boolean;
  containerRef: React.RefObject<HTMLElement>;
  ballRef: React.RefObject<HTMLElement>;
  paddleRef: React.RefObject<HTMLElement>;
  letterRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  floorRef: React.RefObject<HTMLElement>;
};

/** Drives the ambient game entirely via direct DOM writes (no per-frame state). */
export function useBreakoutGame({
  enabled,
  containerRef,
  ballRef,
  paddleRef,
  letterRefs,
  floorRef,
}: Refs): void {
  useEffect(() => {
    const container = containerRef.current;
    const ballEl = ballRef.current;
    const paddleEl = paddleRef.current;
    if (!enabled || !container || !ballEl || !paddleEl) return;

    const ceilingY = -PADDLE_LANE; // top boundary: the paddle lane, above line 1
    let width = container.clientWidth;
    let floorY = FLOOR_FALLBACK;
    // Horizontal playfield: confined to the text's own bounding box, not the full
    // container width, so the ball never drifts into empty margin.
    let leftBound = 0;
    let rightBound = width;

    // Letter rects, relative to the container, shrunk to their middle band so the
    // ball can travel over/under glyphs (real 2-D sweep, not a horizontal skim).
    let rects: (Rect | null)[] = [];
    const measure = () => {
      const base = container.getBoundingClientRect();
      // Floor = top of the row below the headline (e.g. the "19 years…" line).
      floorY = floorRef.current
        ? floorRef.current.getBoundingClientRect().top - base.top
        : FLOOR_FALLBACK;
      rects = letterRefs.current.map((el) => {
        if (!el || el.textContent === " ") return null;
        const r = el.getBoundingClientRect();
        const h = r.height * BRICK_HEIGHT_FACTOR;
        return {
          x: r.left - base.left,
          y: r.top - base.top + (r.height - h) / 2,
          w: r.width,
          h,
        };
      });
      let min = Infinity;
      let max = -Infinity;
      for (const r of rects) {
        if (!r) continue;
        min = Math.min(min, r.x);
        max = Math.max(max, r.x + r.w);
      }
      leftBound = min === Infinity ? 0 : min;
      rightBound = max === -Infinity ? width : max;
    };
    measure();

    const broken = rects.map(() => false);
    const setBroken = (i: number, isBroken: boolean) => {
      broken[i] = isBroken;
      const el = letterRefs.current[i];
      if (el) el.style.opacity = isBroken ? BROKEN_OPACITY : "1";
    };

    const b = { x: (leftBound + rightBound) / 2, y: (ceilingY + floorY) / 2, vx: BALL_SPEED, vy: BALL_SPEED };
    let paddleX = (leftBound + rightBound) / 2;
    let paddleVX = 0; // paddle velocity, integrated by the spring (gives momentum)
    let resetAt: number | null = null;

    const syncSize = () => {
      width = container.clientWidth;
      measure();
    };
    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(container);
    if (document.fonts?.ready) document.fonts.ready.then(measure);

    let raf = 0;
    const step = (now: number) => {
      const half = PADDLE_WIDTH / 2;

      b.x += b.vx;
      b.y += b.vy;

      // Left/right walls — the text's bounding box, not the full container.
      if (b.x - BALL_RADIUS < leftBound) {
        b.x = leftBound + BALL_RADIUS;
        b.vx = Math.abs(b.vx);
      } else if (b.x + BALL_RADIUS > rightBound) {
        b.x = rightBound - BALL_RADIUS;
        b.vx = -Math.abs(b.vx);
      }
      // Ceiling safety net (behind the top paddle).
      if (b.y - BALL_RADIUS < ceilingY) {
        b.y = ceilingY + BALL_RADIUS;
        b.vy = Math.abs(b.vy);
      }
      // Floor: bounce off the row below the headline (the "19 years…" line).
      if (b.y + BALL_RADIUS > floorY) {
        b.y = floorY - BALL_RADIUS;
        b.vy = -Math.abs(b.vy);
      }

      // Top paddle: damped spring toward the ball — accelerates, carries momentum,
      // decelerates as it settles. Still tuned to always catch, then bounce down.
      paddleVX += (b.x - paddleX) * PADDLE_STIFFNESS;
      paddleVX *= 1 - PADDLE_DAMPING;
      paddleX += paddleVX;
      const clampedX = Math.max(leftBound + half, Math.min(rightBound - half, paddleX));
      if (clampedX !== paddleX) paddleVX = 0; // shed momentum at the walls
      paddleX = clampedX;
      const ball: Ball = { x: b.x, y: b.y, r: BALL_RADIUS };
      const paddleRect: Rect = { x: paddleX - half, y: ceilingY, w: PADDLE_WIDTH, h: PADDLE_HEIGHT };
      if (b.vy < 0 && ballHitsRect(ball, paddleRect)) {
        b.y = ceilingY + PADDLE_HEIGHT + BALL_RADIUS;
        b.vy = Math.abs(b.vy);
        b.vx += ((b.x - paddleX) / half) * 0.6; // slight steer based on contact point
      }

      // Letter collisions — resolve at most the nearest one per frame.
      let hitIndex = -1;
      let hitDist = Infinity;
      for (let i = 0; i < rects.length; i++) {
        const rect = rects[i];
        if (!rect || broken[i] || !ballHitsRect(ball, rect)) continue;
        const d = (b.x - (rect.x + rect.w / 2)) ** 2 + (b.y - (rect.y + rect.h / 2)) ** 2;
        if (d < hitDist) {
          hitDist = d;
          hitIndex = i;
        }
      }
      if (hitIndex >= 0) {
        const reflected = reflectOffRect(ball, b.vx, b.vy, rects[hitIndex]!);
        b.vx = reflected.vx;
        b.vy = reflected.vy;
        setBroken(hitIndex, true);
      }

      // Keep a steady speed with a balanced diagonal so neither axis stalls —
      // a persistent ~45° drift lets the ball sweep both lines.
      const target = BALL_SPEED * Math.SQRT2;
      const speed = Math.hypot(b.vx, b.vy) || target;
      b.vx = (b.vx / speed) * target;
      b.vy = (b.vy / speed) * target;
      const minComponent = target * 0.45;
      if (Math.abs(b.vx) < minComponent) {
        b.vx = Math.sign(b.vx || 1) * minComponent;
        b.vy = Math.sign(b.vy || 1) * Math.sqrt(target * target - minComponent * minComponent);
      } else if (Math.abs(b.vy) < minComponent) {
        b.vy = Math.sign(b.vy || 1) * minComponent;
        b.vx = Math.sign(b.vx || 1) * Math.sqrt(target * target - minComponent * minComponent);
      }

      // Gentle reset: once every brick is broken, heal both lines after a pause.
      const anyLive = rects.some((r, i) => r && !broken[i]);
      if (!anyLive && rects.length > 0) {
        if (resetAt === null) resetAt = now + RESET_DELAY_MS;
        else if (now >= resetAt) {
          rects.forEach((r, i) => r && setBroken(i, false));
          resetAt = null;
        }
      } else {
        resetAt = null;
      }

      ballEl.style.transform = `translate(${b.x - BALL_RADIUS}px, ${b.y - BALL_RADIUS}px)`;
      paddleEl.style.transform = `translate(${paddleX - half}px, ${ceilingY}px)`;

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
}
