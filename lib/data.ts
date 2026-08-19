import {
  Wrench,
  Cpu,
  SprayCan,
  Hammer,
  Wind,
  Zap,
  Droplet,
  Disc3,
  Cog,
  ShieldCheck,
  Gauge,
  PaintBucket,
  Award,
  Users,
  Clock,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Wrench,
    title: "Complete Mechanical Repair",
    description:
      "Full-scope mechanical diagnostics and repair handled by senior technicians using manufacturer-grade procedures.",
  },
  {
    icon: Cog,
    title: "Engine Repair & Overhaul",
    description:
      "Precision engine rebuilds, timing systems and performance restoration for every make and model.",
  },
  {
    icon: Cpu,
    title: "Computer Diagnostics",
    description:
      "Advanced OBD scanning and ECU diagnostics that pinpoint issues fast — no guesswork, no wasted time.",
  },
  {
    icon: SprayCan,
    title: "Car Painting",
    description:
      "Showroom-finish spray booth painting with factory-matched colour and multi-stage clear coat.",
  },
  {
    icon: Hammer,
    title: "Body Repair",
    description:
      "Structural and panel repair returning your vehicle to its original form, fit and strength.",
  },
  {
    icon: PaintBucket,
    title: "Dent Repair",
    description:
      "Paintless and traditional dent removal that restores a flawless, factory-smooth body line.",
  },
  {
    icon: Wind,
    title: "AC Repair & Gas",
    description:
      "Full climate-control servicing, regassing and leak detection for reliable, ice-cold comfort.",
  },
  {
    icon: Zap,
    title: "Electrical Repair",
    description:
      "Wiring, battery, alternator and full electrical-system diagnostics for modern and classic vehicles.",
  },
  {
    icon: Droplet,
    title: "Oil & Filter Service",
    description:
      "Premium synthetic oil changes and filter replacement to keep your engine running at its best.",
  },
  {
    icon: Disc3,
    title: "Brake & Suspension",
    description:
      "Complete brake, strut and suspension care engineered for safety, comfort and precise handling.",
  },
  {
    icon: Gauge,
    title: "Transmission / Gearbox",
    description:
      "Automatic and manual transmission servicing, fluid exchange and full gearbox reconditioning.",
  },
  {
    icon: ShieldCheck,
    title: "General Maintenance",
    description:
      "Scheduled maintenance plans that protect your vehicle's performance, value and warranty.",
  },
];

export const heroHighlights = [
  "Paint",
  "Mechanical",
  "Diagnostics",
  "AC",
  "Electrical",
  "Complete Car Care",
];

export type WhyStat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
};

export const whyStats: WhyStat[] = [
  { icon: Users, value: 15, suffix: "+", label: "Years Combined Experience" },
  { icon: Wrench, value: 4800, suffix: "+", label: "Vehicles Serviced" },
  { icon: Award, value: 98, suffix: "%", label: "Customer Satisfaction" },
  { icon: Clock, value: 24, suffix: "hr", label: "Average Turnaround" },
];

export const whyFeatures = [
  {
    icon: Users,
    title: "Experienced Technicians",
    description:
      "A senior team trained on modern and luxury vehicle platforms.",
  },
  {
    icon: Cpu,
    title: "Modern Diagnostic Equipment",
    description:
      "Manufacturer-level scan tools for accurate, fast diagnosis.",
  },
  {
    icon: ShieldCheck,
    title: "High-Quality Parts",
    description: "Genuine and OEM-grade parts backed by our workmanship.",
  },
  {
    icon: Sparkles,
    title: "Professional Workmanship",
    description: "Every job finished to a meticulous, showroom standard.",
  },
  {
    icon: Gauge,
    title: "Transparent Pricing",
    description: "Clear, upfront quotes before any work begins — no surprises.",
  },
  {
    icon: Clock,
    title: "Fast, Reliable Service",
    description: "Efficient workflows that respect your time and schedule.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury car front grille detail",
    category: "Luxury Cars",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
    alt: "Technician inspecting an engine bay",
    category: "Engine Repair",
  },
  {
    src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern automotive workshop interior",
    category: "Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium car interior dashboard",
    category: "Finished Vehicles",
  },
  {
    src: "https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=1200&q=80",
    alt: "Mechanic working underneath a vehicle",
    category: "Mechanics at Work",
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    alt: "Performance sports car in the workshop",
    category: "Luxury Cars",
  },
  {
    src: "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80",
    alt: "Detailed workshop tool station",
    category: "Diagnostic Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    alt: "Car body panel being prepared for paint",
    category: "Car Painting",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    alt: "Black luxury sedan finished and polished",
    category: "Finished Vehicles",
  },
];

export type Testimonial = {
  name: string;
  vehicle: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Khalid Al-Otaibi",
    vehicle: "Range Rover Sport",
    rating: 5,
    quote:
      "The most professional workshop I've used in the city. Transparent pricing and the diagnostics were spot on. My car runs like new.",
  },
  {
    name: "Sara Al-Mansouri",
    vehicle: "Mercedes-Benz C-Class",
    rating: 5,
    quote:
      "Paint match was flawless after my accident repair — you genuinely cannot see where the damage was. Excellent attention to detail.",
  },
  {
    name: "Omar Al-Farsi",
    vehicle: "BMW X5",
    rating: 5,
    quote:
      "Fast, honest and highly skilled. They explained every repair clearly before starting. This is my permanent workshop now.",
  },
  {
    name: "Fatima Al-Zahrani",
    vehicle: "Lexus ES",
    rating: 5,
    quote:
      "Booked online, dropped the car off, and everything was ready exactly on time. Premium service from start to finish.",
  },
];

export const paintBodyServices = [
  { title: "Car Painting", description: "Full-body spray booth finishing with factory colour matching." },
  { title: "Dent Repair", description: "Paintless dent removal for a seamless, factory-smooth surface." },
  { title: "Body Work", description: "Panel alignment and structural repair to precise OEM tolerances." },
  { title: "Accident Repair", description: "Complete collision repair, from chassis to final polish." },
  { title: "Scratch Removal", description: "Precision surface correction that erases scratches and swirls." },
  { title: "Paint Polishing", description: "Multi-stage machine polishing for a deep, mirror-like gloss." },
  { title: "Color Matching", description: "Computerised colour-matching for an invisible, factory-accurate blend." },
];

export const mechanicalServices: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Cpu, title: "Engine Diagnostics", description: "Full ECU scan and live-data analysis to isolate faults precisely." },
  { icon: Cog, title: "Engine Repair", description: "From minor faults to complete overhauls, handled to OEM spec." },
  { icon: Gauge, title: "Transmission", description: "Automatic & manual gearbox servicing, repair and fluid exchange." },
  { icon: Disc3, title: "Brake System", description: "Pads, rotors, fluid and calipers serviced for confident stopping power." },
  { icon: Wrench, title: "Suspension", description: "Strut, shock and alignment work tuned for comfort and control." },
  { icon: Zap, title: "Electrical Systems", description: "Wiring, battery and charging-system diagnostics and repair." },
  { icon: Wind, title: "AC Systems", description: "Climate-control servicing and regassing for reliable cold air." },
  { icon: Cpu, title: "Computer Diagnostics", description: "Manufacturer-level scan tools for fast, accurate fault-finding." },
];

export const heroImage =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2400&q=80";

export const paintBodyImage =
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80";

export const beforeAfter = {
  before:
    "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80",
  after:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
};

export const mechanicalImage =
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80";

export const serviceOptions = [
  "Complete Mechanical Repair",
  "Engine Repair & Overhaul",
  "Computer Diagnostics",
  "Car Painting",
  "Body Repair",
  "Dent Repair",
  "AC Repair & Gas",
  "Electrical Repair",
  "Oil & Filter Service",
  "Brake & Suspension",
  "Transmission / Gearbox Service",
  "General Maintenance",
];
