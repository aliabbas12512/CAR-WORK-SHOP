"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-surface py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Our Workshop"
          subtitle="Drop by, call ahead, or message us on WhatsApp — we're ready to take care of your vehicle."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10 shadow-card lg:col-span-3"
          >
            <iframe
              title="Workshop location map"
              src={siteConfig.address.mapsEmbedSrc}
              className="h-80 w-full grayscale invert-[0.92] contrast-[1.05] sm:h-full sm:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            <InfoRow icon={MapPin} label="Location">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </InfoRow>
            <InfoRow icon={Phone} label="Phone">
              <a href={siteConfig.phoneHref} className="hover:text-gold">{siteConfig.phone}</a>
            </InfoRow>
            <InfoRow icon={MessageCircle} label="WhatsApp">
              <a href={siteConfig.whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {siteConfig.phone}
              </a>
            </InfoRow>
            <InfoRow icon={Mail} label="Email">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">{siteConfig.email}</a>
            </InfoRow>
            <InfoRow icon={Clock} label="Opening Hours">
              <div className="space-y-1">
                {siteConfig.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 text-sm">
                    <span>{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </div>
                ))}
              </div>
            </InfoRow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/8 bg-base/50 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
        <div className="mt-1 text-sm text-muted [&_a]:text-foreground [&_a]:transition-colors">{children}</div>
      </div>
    </div>
  );
}
