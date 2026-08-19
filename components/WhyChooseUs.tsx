"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { whyStats, whyFeatures } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-surface py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Trusted Craftsmanship, Transparent Service"
          subtitle="We combine experienced technicians, modern equipment and honest pricing to deliver a service experience worthy of your vehicle."
        />

        <div className="mt-16 grid grid-cols-2 gap-6 border-b border-white/10 pb-16 sm:grid-cols-4">
          {whyStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <Icon className="mb-3 h-6 w-6 text-gold/70" strokeWidth={1.5} />
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="flex items-start gap-4 rounded-xl p-2"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
