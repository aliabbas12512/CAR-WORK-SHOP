"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle2, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/config";
import { serviceOptions } from "@/lib/data";

type FormState = {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  service: serviceOptions[0],
  date: "",
  time: "",
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const buildMessage = () =>
    [
      `New Service Booking — ${siteConfig.name}`,
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      `Car Make/Model: ${form.vehicle}`,
      `Service Required: ${form.service}`,
      form.date && `Preferred Date: ${form.date}`,
      form.time && `Preferred Time: ${form.time}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = siteConfig.whatsappHref(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="booking" className="relative bg-base py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Book Your Service"
          title="Reserve Your Appointment"
          subtitle="Tell us about your vehicle and preferred time — our team will confirm your booking via WhatsApp or a quick call."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-6 sm:p-9 lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="name">
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="John Doe"
                  className="input-field"
                />
              </Field>

              <Field label="Mobile Number" htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+966 5X XXX XXXX"
                  className="input-field"
                />
              </Field>

              <Field label="Car Make / Model" htmlFor="vehicle">
                <input
                  id="vehicle"
                  required
                  value={form.vehicle}
                  onChange={(e) => update("vehicle", e.target.value)}
                  placeholder="e.g. BMW X5, 2021"
                  className="input-field"
                />
              </Field>

              <Field label="Service Required" htmlFor="service">
                <select
                  id="service"
                  required
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="input-field"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface">
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Preferred Date" htmlFor="date">
                <input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className="input-field"
                />
              </Field>

              <Field label="Preferred Time" htmlFor="time">
                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  className="input-field"
                />
              </Field>

              <Field label="Message (optional)" htmlFor="message" full>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us more about the issue..."
                  className="input-field resize-none"
                />
              </Field>

              <div className="sm:col-span-2">
                <button type="submit" className="btn-gold w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Book Your Service
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex items-center gap-2 text-sm text-gold"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Request ready — continue in WhatsApp to confirm your booking.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4 rounded-2xl border border-white/8 bg-surface/60 p-6 sm:p-9 lg:col-span-2"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">
              Prefer to talk directly?
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              Our advisors are available during working hours to help you book
              the right service for your vehicle.
            </p>
            <a href={siteConfig.whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Booking
            </a>
            <a href={siteConfig.phoneHref} className="btn-outline">
              <Phone className="h-5 w-5 text-gold" />
              Call Now — {siteConfig.phone}
            </a>

            <div className="mt-4 border-t border-white/10 pt-5">
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-1.5 text-sm">
                  <span className="text-muted">{h.day}</span>
                  <span className="font-medium text-foreground">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  full,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
