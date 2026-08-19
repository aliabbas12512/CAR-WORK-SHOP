"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import { siteConfig } from "@/lib/config";
import { heroHighlights, heroImage } from "@/lib/data";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-base"
    >
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="High-end car being serviced in a premium automotive workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-base/70 to-base" />
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/40 to-transparent" />
      </div>

      <HeroScene />

      <div className="container-px relative z-10 mx-auto w-full max-w-7xl pt-28 pb-24 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="section-eyebrow">
            <span className="h-px w-6 bg-gold" />
            {siteConfig.name}
          </span>

          <h1 className="font-display mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Premium Automotive Care.
            <br />
            <span className="text-gold-gradient">Built for Performance.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#booking" className="btn-gold">
              Book a Service
            </a>
            <a href={siteConfig.whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a href={siteConfig.phoneHref} className="btn-outline">
              <Phone className="h-5 w-5 text-gold" />
              Call Now
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 pr-24 sm:pr-0">
            {heroHighlights.map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                {item}
                {i < heroHighlights.length - 1 && (
                  <span className="ml-4 h-1 w-1 rounded-full bg-gold/70" />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-gold"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
