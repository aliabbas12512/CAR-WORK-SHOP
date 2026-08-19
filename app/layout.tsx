import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  metadataBase: new URL("https://velocity-auto-werks.vercel.app"),
  title: {
    default: `${siteConfig.name} | Premium Automotive Service Center`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "car workshop",
    "auto repair",
    "car painting",
    "engine repair",
    "car diagnostics",
    "AC repair",
    "premium car service",
    "Riyadh car workshop",
  ],
  openGraph: {
    title: `${siteConfig.name} | Premium Automotive Service Center`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Automotive Service Center`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.line2,
  },
  openingHours: siteConfig.hours.map((h) => `${h.day} ${h.time}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- intentional: root layout, applies site-wide */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-base text-foreground antialiased">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
