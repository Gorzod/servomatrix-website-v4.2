// Site identity and navigation. British English spelling throughout.

export const site = {
  name: "servomatrix",
  domain: "servomatrix.com",
  url: "https://servomatrix.com",
  tagline: "Building controls engineered for performance, clarity and long-term operation.",
  shortDescription:
    "servomatrix is a specialist building management systems and controls integrator based in Beirut, designing, integrating, programming and commissioning the control layer of commercial, healthcare, hospitality and industrial facilities across the Middle East and Africa.",
  email: "engineering@servomatrix.com",
  phone: "+961 71 218 281",
  linkedin: "https://www.linkedin.com/company/servomatrix/",
  location: "Beirut, Lebanon",
  serves: "Middle East & Africa",
};

// Primary navigation — commercial-first ordering.
export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const primaryCta = { label: "Discuss a project", href: "/contact" };
export const secondaryCta = { label: "Send project documents", href: "/contact?intent=documents" };

// Footer service links reference the technical catalogue.
export const footerCatalogue = [
  { label: "BMS design support", href: "/services#bms-design" },
  { label: "DDC panel engineering", href: "/services#ddc-panels" },
  { label: "HVAC control strategy", href: "/services#hvac-control" },
  { label: "System integration", href: "/services#integration" },
  { label: "Testing & commissioning", href: "/services#commissioning" },
  { label: "Energy monitoring", href: "/services#energy" },
];

// Looping protocol / capability marquee. Terms must stay consistent with the
// capabilities the site actually claims (see lib/standards.js) — no protocols
// or systems we don't list elsewhere.
export const assuranceBar = [
  "BACnet/IP",
  "BACnet MS/TP",
  "Modbus TCP",
  "Modbus RTU",
  "IP Networks",
  "DDC Controls",
  "DDC Panel Engineering",
  "HVAC Integration",
  "AHU Control",
  "FCU Control",
  "Chiller Plant",
  "VRF / VRV Integration",
  "Variable Speed Drives",
  "Energy Monitoring",
  "Trend Logging",
  "Alarm Management",
  "Scheduling",
  "Operator Graphics",
  "Points Schedules",
  "Sequences of Operation",
  "Commissioning",
  "Secure Remote Access",
  "Lifecycle Support",
];
