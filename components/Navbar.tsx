"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, siteConfig } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-base/80 backdrop-blur-xl border-b border-white/10" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient font-condensed text-lg text-[#0c0a06] shadow-gold">
            V
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-foreground">
            {siteConfig.shortName}
            <span className="text-gold"> Auto</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            {siteConfig.phone}
          </a>
          <a href="#booking" className="btn-gold !px-5 !py-2.5 text-sm">
            Book a Service
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px mx-auto flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium text-foreground/90 transition-colors hover:bg-white/5 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-3 px-3">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {siteConfig.phone}
                </a>
                <a href="#booking" onClick={() => setOpen(false)} className="btn-gold w-full text-sm">
                  Book a Service
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
