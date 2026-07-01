import {
  BALL_RADIUS,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
  shouldEnableGame,
  useBreakoutGame,
} from "@/hooks/useBreakoutGame";
import { useRef, useState } from "react";

// Renders one or more headline `lines` as per-letter spans that double as
// breakable bricks, with a calm, self-playing *reverse* Breakout ball + top
// paddle layered on top. The ball bounces off `floorRef` (the row below the
// headline). All motion is driven by the hook via direct DOM writes, so this
// component never re-renders while it plays.

type Line = { text: string; className?: string };

type Props = {
  lines: Line[];
  floorRef: React.RefObject<HTMLElement>;
};

const HeadlineBreakout = ({ lines, floorRef }: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const ballRef = useRef<HTMLSpanElement>(null);
  const paddleRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Decide once: desktop-only + respect reduced motion. Otherwise plain text.
  const [enabled] = useState(shouldEnableGame);

  useBreakoutGame({ enabled, containerRef, ballRef, paddleRef, letterRefs, floorRef });

  // Flat, stable letter index across all lines so the hook can address bricks.
  let index = 0;

  return (
    <span ref={containerRef} className="relative block">
      {lines.map((line, li) => (
        <span key={li} className={line.className}>
          {line.text.split("").map((ch) => {
            const i = index++;
            return (
              <span
                key={i}
                ref={(el) => (letterRefs.current[i] = el)}
                className="transition-opacity duration-500 ease-out"
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}

      {enabled && (
        <span
          className="pointer-events-none absolute inset-0 z-20 select-none"
          aria-hidden="true"
        >
          <span
            ref={ballRef}
            className="absolute left-0 top-0 rounded-full bg-destructive"
            style={{ width: BALL_RADIUS * 2, height: BALL_RADIUS * 2 }}
          />
          <span
            ref={paddleRef}
            className="absolute left-0 top-0 rounded-full bg-primary"
            style={{ width: PADDLE_WIDTH, height: PADDLE_HEIGHT }}
          />
        </span>
      )}
    </span>
  );
};

export default HeadlineBreakout;
