"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ImageWithFallback from "./ImageWithFallback";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="relative bg-base py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Gallery"
          title="A Closer Look at Our Workshop"
          subtitle="From luxury vehicles to precision diagnostics — a glimpse into the craftsmanship behind every service."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              className={`group relative overflow-hidden rounded-xl border border-white/8 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square sm:aspect-[4/3]" : "aspect-square"
              }`}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium text-white">{img.category}</span>
                <Expand className="h-4 w-4 text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActiveIndex(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
              }}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10"
            >
              <ImageWithFallback
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-sm font-medium text-white">{galleryImages[activeIndex].category}</p>
              </div>
            </motion.div>

            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
              }}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
