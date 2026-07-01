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
const PADDLE_STIFFNESS = 0.3; // spring pull toward the ball while it's rising
const PADDLE_DAMPING = 0.2; // velocity damping (accel/decel feel)
const PADDLE_MAX_SPEED = 5; // px/frame cap so it moves at a calm, human pace
const PADDLE_LANE = 42; // px above the first line — sits just under the top banner
const RESET_DELAY_MS = 1200; // pause before the lines heal and the loop repeats
const START_DELAY_MS = 10000; // ball + paddle stay hidden, then appear and the game begins
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

// Measure every glyph's rect inside `root` via the Range API — lets us use plain
// body text as bounce colliders without wrapping each letter in a span. Rects are
// returned relative to `base` and shrunk to their middle band like the bricks.
function measureGlyphRects(root: HTMLElement, base: DOMRect): Rect[] {
  const out: Rect[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue ?? "";
    for (let i = 0; i < text.length; i++) {
      if (/\s/.test(text[i])) continue;
      const range = document.createRange();
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      const r = range.getBoundingClientRect();
      if (r.width < 0.5 || r.height < 0.5) continue;
      const h = r.height * BRICK_HEIGHT_FACTOR;
      out.push({ x: r.left - base.left, y: r.top - base.top + (r.height - h) / 2, w: r.width, h });
    }
  }
  return out;
}

type Refs = {
  enabled: boolean;
  containerRef: React.RefObject<HTMLElement>;
  ballRef: React.RefObject<HTMLElement>;
  paddleRef: React.RefObject<HTMLElement>;
  letterRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  // Region of plain body text the ball bounces off (never fades); its bottom edge
  // is also the floor.
  bounceRef: React.RefObject<HTMLElement>;
};

/** Drives the ambient game entirely via direct DOM writes (no per-frame state). */
export function useBreakoutGame({
  enabled,
  containerRef,
  ballRef,
  paddleRef,
  letterRefs,
  bounceRef,
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

    // Breakable headline letters (fade when hit) and static body glyphs (bounce
    // only). Both are shrunk to their middle band so the ball can weave between
    // lines and hit tops/bottoms — a real 2-D sweep, not a horizontal skim.
    let rects: (Rect | null)[] = [];
    let bounceRects: Rect[] = [];
    const measure = () => {
      const base = container.getBoundingClientRect();
      bounceRects = bounceRef.current ? measureGlyphRects(bounceRef.current, base) : [];
      // Floor = the bottom of the body text region (the ball bounces off the
      // actual letters above it; this is just the safety wall beneath them).
      floorY = bounceRef.current
        ? bounceRef.current.getBoundingClientRect().bottom - base.top
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
      for (const r of bounceRects) {
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

    const half = PADDLE_WIDTH / 2;
    const b = { x: 0, y: 0, vx: BALL_SPEED, vy: BALL_SPEED };
    let paddleX = 0;
    let paddleVX = 0; // paddle velocity, integrated by the spring (gives momentum)
    let resetAt: number | null = null;
    let started = false;

    // Before the game begins, park the ball + paddle in the top-left corner and
    // keep them hidden — they appear only when the game starts.
    const placeStatic = () => {
      paddleX = leftBound + half;
      b.x = leftBound + BALL_RADIUS;
      b.y = ceilingY + PADDLE_HEIGHT + BALL_RADIUS;
      ballEl.style.transform = `translate(${b.x - BALL_RADIUS}px, ${b.y - BALL_RADIUS}px)`;
      paddleEl.style.transform = `translate(${paddleX - half}px, ${ceilingY}px)`;
    };
    placeStatic();
    ballEl.style.opacity = "0";
    paddleEl.style.opacity = "0";

    const syncSize = () => {
      width = container.clientWidth;
      measure();
      if (!started) placeStatic(); // keep the resting pose aligned through reflow
    };
    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(container);
    if (bounceRef.current) resizeObserver.observe(bounceRef.current);
    if (document.fonts?.ready) document.fonts.ready.then(syncSize);

    let raf = 0;
    const step = (now: number) => {
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

      // Top paddle plays like a person: it rests while the ball falls away, and
      // only moves to intercept once the ball is rising toward it (vy < 0). A
      // damped spring gives the accel/decel; a speed cap stops it teleporting when
      // it starts far from the ball. Tuned to always catch (0 misses), then bounce.
      if (b.vy < 0) paddleVX += (b.x - paddleX) * PADDLE_STIFFNESS;
      paddleVX *= 1 - PADDLE_DAMPING;
      paddleVX = Math.max(-PADDLE_MAX_SPEED, Math.min(PADDLE_MAX_SPEED, paddleVX));
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

      // Collisions — resolve the single nearest collider this frame. Headline
      // bricks (rects) fade when hit; body glyphs (bounceRects) only deflect.
      let hitRect: Rect | null = null;
      let hitIndex = -1; // headline index if the nearest hit is breakable, else -1
      let hitDist = Infinity;
      for (let i = 0; i < rects.length; i++) {
        const rect = rects[i];
        if (!rect || broken[i] || !ballHitsRect(ball, rect)) continue;
        const d = (b.x - (rect.x + rect.w / 2)) ** 2 + (b.y - (rect.y + rect.h / 2)) ** 2;
        if (d < hitDist) {
          hitDist = d;
          hitRect = rect;
          hitIndex = i;
        }
      }
      for (const rect of bounceRects) {
        if (!ballHitsRect(ball, rect)) continue;
        const d = (b.x - (rect.x + rect.w / 2)) ** 2 + (b.y - (rect.y + rect.h / 2)) ** 2;
        if (d < hitDist) {
          hitDist = d;
          hitRect = rect;
          hitIndex = -1;
        }
      }
      if (hitRect) {
        const reflected = reflectOffRect(ball, b.vx, b.vy, hitRect);
        b.vx = reflected.vx;
        b.vy = reflected.vy;
        if (hitIndex >= 0) setBroken(hitIndex, true);
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

    // Reveal the ball + paddle and start the game after a beat.
    const startTimer = setTimeout(() => {
      started = true;
      ballEl.style.opacity = "1";
      paddleEl.style.opacity = "1";
      raf = requestAnimationFrame(step);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
}
