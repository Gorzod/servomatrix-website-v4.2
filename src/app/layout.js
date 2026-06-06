import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "servomatrix — specialist building management & controls integrator",
    template: "%s · servomatrix",
  },
  description:
    "servomatrix is a Beirut-based building management systems (BMS) and controls integrator serving the Middle East and Africa. BACnet and Modbus integration, HVAC control strategy, DDC panel engineering, commissioning and lifecycle support for commercial, healthcare, hospitality and industrial facilities.",
  keywords: [
    "BMS integrator Lebanon",
    "building management systems Middle East",
    "BACnet integration",
    "Modbus integration",
    "HVAC controls integration",
    "BMS commissioning",
    "BMS retrofit",
    "BMS design support",
    "DDC panel engineering",
    "energy monitoring integration",
    "building automation",
    "Beirut",
  ],
  authors: [{ name: "servomatrix" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    url: site.url,
    siteName: "servomatrix",
    title: "servomatrix — specialist building management & controls integrator",
    description:
      "Building controls engineered for performance, clarity and long-term operation. Specialist BMS integration, HVAC controls, commissioning and lifecycle support across the Middle East and Africa.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "servomatrix" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "servomatrix — building management & controls integrator",
    description: "Building controls engineered for performance, clarity and long-term operation.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#0B0E13",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "servomatrix",
  description:
    "Specialist building management systems (BMS) and controls integrator providing HVAC control strategy, BACnet and Modbus integration, commissioning and lifecycle support.",
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: ["Middle East", "Africa"],
  address: { "@type": "PostalAddress", addressLocality: "Beirut", addressCountry: "LB" },
  knowsAbout: [
    "Building Management Systems",
    "Building Automation",
    "HVAC Controls",
    "BACnet",
    "Modbus",
    "DDC controls",
    "Energy monitoring",
    "Commissioning",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
