"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ImageWithFallback from "./ImageWithFallback";
import { mechanicalServices, mechanicalImage } from "@/lib/data";

export default function Mechanical() {
  return (
    <section id="mechanical" className="relative bg-base py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mechanical Workshop"
          title="Engineering-Grade Mechanical Care"
          subtitle="Our workshop is equipped for every mechanical challenge — from live diagnostics to full engine and transmission work."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative lg:col-span-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-card">
              <ImageWithFallback
                src={mechanicalImage}
                alt="Technician performing engine diagnostics in the workshop"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/20 bg-surface/90 p-5 backdrop-blur-xl shadow-card sm:block">
              <p className="font-condensed text-3xl text-gold">24hr</p>
              <p className="text-xs text-muted">Avg. Turnaround</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {mechanicalServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: "easeOut" }}
                  className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-surface/60 p-5 transition-colors hover:border-gold/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
