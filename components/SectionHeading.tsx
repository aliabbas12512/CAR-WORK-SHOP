"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto flex flex-col items-center" : "text-left"}
    >
      <span className="section-eyebrow">
        <span className="h-px w-6 bg-gold" />
        {eyebrow}
      </span>
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === "center" ? "mx-auto text-center" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
