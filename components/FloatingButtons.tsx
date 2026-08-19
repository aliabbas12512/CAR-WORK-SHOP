"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={siteConfig.phoneHref}
        aria-label={`Call ${siteConfig.name}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient shadow-gold transition-transform duration-300 hover:scale-110"
      >
        <Phone className="h-6 w-6 text-[#0c0a06]" />
      </a>
      <a
        href={siteConfig.whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${siteConfig.name}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_8px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/50" />
        <MessageCircle className="relative h-6 w-6 text-white" />
      </a>
    </div>
  );
}
