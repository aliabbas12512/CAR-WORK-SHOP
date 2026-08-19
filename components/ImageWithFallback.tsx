"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { Car } from "lucide-react";

type Props = Omit<ImageProps, "onError" | "src"> & { src: string };

export default function ImageWithFallback({ alt, className, ...props }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-surface-2 to-surface text-steel/40 ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <Car className="h-10 w-10" strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
