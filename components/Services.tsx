"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative bg-base py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Complete Automotive Services"
          subtitle="From routine maintenance to complex diagnostics, every service is delivered with precision, transparency and premium care."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              >
                <TiltCard className="group h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/8 bg-surface/70 p-7 transition-colors duration-300 hover:border-gold/30">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient shadow-gold">
                      <Icon className="h-7 w-7 text-[#0c0a06]" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
