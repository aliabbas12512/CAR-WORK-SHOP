// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR BUSINESS INFO
// Change the phone/WhatsApp numbers, address and hours here — every
// button, link and section on the site reads from this file.
// ─────────────────────────────────────────────────────────────────────────

const RAW_PHONE = "+966 58 202 459";
const RAW_WHATSAPP = "+96658202459";

export const siteConfig = {
  name: "Velocity Auto Werks",
  shortName: "Velocity",
  tagline: "Premium Automotive Care. Built for Performance.",
  description:
    "A luxury automotive service center offering complete mechanical repair, diagnostics, paint & body work, and premium car care — trusted by discerning owners across the Gulf.",

  phone: RAW_PHONE,
  phoneHref: `tel:${RAW_WHATSAPP}`,
  whatsapp: RAW_WHATSAPP,
  whatsappHref: (message = "Hi! I'd like to book a service.") =>
    `https://wa.me/${RAW_WHATSAPP.replace(/\D/g, "")}?text=${encodeURIComponent(
      message
    )}`,

  email: "service@velocityautowerks.com",

  address: {
    line1: "King Fahd Road, Al Olaya District",
    line2: "Riyadh, Saudi Arabia",
    mapsQuery: "Velocity Auto Werks, King Fahd Road, Riyadh, Saudi Arabia",
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Riyadh+Saudi+Arabia&output=embed",
  },

  hours: [
    { day: "Saturday – Thursday", time: "8:00 AM – 10:00 PM" },
    { day: "Friday", time: "2:00 PM – 10:00 PM" },
  ],

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Paint & Body", href: "#paint-body" },
  { label: "Mechanical", href: "#mechanical" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
