"use client";

import { useEffect, useRef } from "react";

const dishes = [
  "Durian Mousse",
  "Mango Pomelo 杨枝甘露",
  "Durian Snow Mountain",
  "Black Glutinous Rice",
  "Aiyu Mango",
  "Snow Pear White Fungus",
  "MSW Mochi",
  "Jackfruit Sago",
  "Glutinous Rice Balls",
  "Mango Snow Mountain",
];

// Ambient loops pause off-screen. A CSS animation cannot see the viewport,
// so an observer flips a data attribute the stylesheet keys on;
// `animation-play-state` freezes the marquee in place rather than restarting
// it, so scrolling back resumes mid-track.
function useOffscreenPause<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      el.dataset.offscreen = entry?.isIntersecting ? "false" : "true";
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function LogoCloudBlock() {
  const pauseRef = useOffscreenPause<HTMLDivElement>();
  const row = [...dishes, ...dishes];
  return (
    <section className="flex w-full flex-col items-center overflow-hidden border-y border-border bg-card px-0 py-8 text-foreground">
      <style>{`
        @keyframes dish-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .dish-track {
          animation: dish-marquee 36s linear infinite;
        }
        .dish-mask[data-offscreen="true"] .dish-track { animation-play-state: paused; }
        .dish-mask:hover .dish-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .dish-track {
            animation: none;
          }
        }
      `}</style>

      <p className="px-6 text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
        Signatures people queue for
      </p>

      <div
        ref={pauseRef}
        className="dish-mask relative mt-6 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="dish-track flex w-max items-center gap-8 pr-8">
          {row.map((dish, i) => (
            <span
              key={`${dish}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap"
            >
              <span className="font-heading text-2xl font-semibold tracking-tight text-foreground/80">
                {dish}
              </span>
              <span aria-hidden="true" className="text-primary">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
