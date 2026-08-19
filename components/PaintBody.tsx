"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { paintBodyServices, beforeAfter } from "@/lib/data";

export default function PaintBody() {
  return (
    <section id="paint-body" className="relative bg-surface py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Paint & Body Shop"
          title="Flawless Finishes, Every Panel"
          subtitle="Our spray booth and body shop restore your vehicle's factory-perfect appearance — drag the slider to see the difference."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BeforeAfterSlider before={beforeAfter.before} after={beforeAfter.after} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {paintBodyServices.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/8 bg-base/60 p-5 transition-colors hover:border-gold/30"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 pl-[34px] text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
