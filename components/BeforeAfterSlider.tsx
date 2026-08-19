"use client";

import { useRef, useState, type PointerEvent } from "react";
import ImageWithFallback from "./ImageWithFallback";

export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10 shadow-card sm:aspect-[16/10]"
    >
      <ImageWithFallback
        src={after}
        alt="After professional repair and finishing"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <ImageWithFallback
          src={before}
          alt="Before repair"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0c0a06]">
        After
      </span>

      <div
        className="absolute inset-y-0 w-0.5 bg-white/80"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <div className="flex gap-0.5">
            <span className="h-3 w-0.5 bg-base" />
            <span className="h-3 w-0.5 bg-base" />
          </div>
        </div>
      </div>
    </div>
  );
}
