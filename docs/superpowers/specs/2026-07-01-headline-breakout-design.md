# Ambient Name-Breakout in the Hero Headline

## Goal

Turn the big white "Viktor Shcherban" hero headline into a calm, self-playing
Breakout scene. A red ball drifts and bounces around the name while a short cyan
paddle auto-slides underneath to keep it in play. Each letter the ball strikes
fades from solid white to a faint knocked-out version. When the whole name is
cleared, the letters gently fade back and the loop repeats forever. It reads as a
subtle decorative motion, not a game to be actively played.

## Decisions (locked)

- **Bricks:** the letters of "Viktor Shcherban" (the largest hero line).
- **Colors (match the site):** red ball (`--destructive`), cyan paddle
  (`--primary`), letters start solid white and fade to faint white (~15% opacity)
  when hit.
- **Loop:** gentle reset & repeat — when the last letter breaks, after a short
  pause all letters fade back to solid white and play continues.
- **Paddle:** auto-follows the ball's x with easing; the bottom edge is a soft
  safety net so the ball is never truly lost.
- **Interaction:** none. Overlay is `pointer-events: none`; purely decorative.
- **Scope:** desktop only (md+ ≈ ≥768px). Disabled on small screens and when
  `prefers-reduced-motion: reduce` is set — the headline then renders as normal
  static text.

## Rendering approach: DOM overlay

The name renders as one `<span>` per letter (real, selectable, responsive text).
A `pointer-events-none` overlay covers the headline area and holds the ball and
paddle as absolutely-positioned `<div>`s. Letters "break" by toggling a class
that CSS-transitions white → faint. Brand colors come from Tailwind/CSS vars. One
ball → performance is a non-issue and there is no canvas DPI/resize plumbing.

## Components

- `src/components/HeadlineBreakout.tsx` — presentational. Renders the per-letter
  spans plus the overlay (ball + paddle divs). Applies the headline's existing
  typographic classes so it is a drop-in for the current `<span>` in `Hero.tsx`.
- `src/hooks/useBreakoutGame.ts` — the game loop: physics, collision, break/heal
  state. Owns the `requestAnimationFrame` loop and returns ball/paddle positions
  and the per-letter broken state.
- Pure helpers (collision/reflection) kept as standalone functions so the core
  math is testable, even though no test harness is set up in this repo yet.

## Physics & behavior

- **Ball:** `{x, y, vx, vy}`, calm speed. Reflects off the container's top/left/
  right walls and the bottom safety net, off the paddle, and off each non-broken
  letter box (AABB; flip vx or vy based on the smaller overlap axis).
- **Letters as bricks:** measured once after mount and re-measured on resize
  (`ResizeObserver`) / after fonts load. Spaces are not bricks. On hit, a
  non-broken letter is marked broken (fades out) and stops being a collider.
- **Paddle:** `x += (ball.x - x) * ease`, clamped to the container; fixed near the
  bottom. Reflects the ball upward on contact.
- **Gentle reset:** when every letter is broken, wait ~1.2s, then heal all
  (broken → false, fade back to white). The ball keeps moving throughout.
- **Guard rails:** at most one letter-collision resolved per frame (nearest) and a
  modest speed to avoid tunneling.
- **Disabled path:** if reduced-motion or below md, the hook renders only the
  static letters — no overlay, no loop.

## Out of scope

No score, no lives, no user input, no sound, no mobile gameplay.
