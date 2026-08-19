"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-surface py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Clients Say"
          subtitle="Placeholder reviews shown for demonstration — swap in your verified customer feedback here."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative rounded-2xl border border-white/8 bg-base/60 p-7"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/15" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-condensed text-sm text-[#0c0a06]">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.vehicle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
