// Sector content. Featured sectors carry full detail; secondary sectors are summarised.

export const industries = [
  {
    slug: "commercial-mixed-use",
    featured: true,
    title: "Commercial and Mixed-Use",
    summary: "Comfort and energy performance across varied occupancy, shared plant and multiple tenancies.",
    priorities: [
      "Comfort across varied and changing occupancy",
      "Shared central plant serving multiple tenancies",
      "Tenant and landlord energy metering",
      "After-hours operation and billing",
      "Central operator visibility across the estate",
    ],
    systems: ["AHUs and chilled water plant", "Terminal units and zone control", "Tenant and shared metering", "Lighting and common-area interfaces"],
    concern: "Resolving metering boundaries and after-hours control so each tenancy is comfortable, accountable and correctly billed.",
    deliverables: ["Zone and plant control sequences", "Tenant metering integration", "After-hours scheduling and override", "Estate-wide operator graphics"],
  },
  {
    slug: "healthcare",
    featured: true,
    title: "Healthcare",
    summary: "Ventilation control, critical alarming and documentation discipline for sensitive clinical environments.",
    priorities: [
      "Ventilation control to design conditions",
      "Room pressure regimes where applicable",
      "Critical alarms with clear escalation",
      "Redundancy and continuity of plant",
      "Strict commissioning and documentation requirements",
    ],
    systems: ["AHUs and dedicated ventilation", "Pressure-controlled spaces where applicable", "Chilled and heating water plant", "Critical alarm interfaces"],
    concern: "Disciplined commissioning and documentation, with critical alarming verified against intent. Medical compliance is confirmed per project, not assumed.",
    deliverables: ["Ventilation and pressure control sequences", "Critical alarm strategy and escalation", "Redundancy and failure-mode logic", "Witnessed commissioning records"],
    note: "Compliance with clinical or regulatory standards is confirmed per project, in coordination with the consultant and authority having jurisdiction.",
  },
  {
    slug: "hotels-hospitality",
    featured: true,
    title: "Hotels and Hospitality",
    summary: "Guest comfort, quiet plant operation and energy visibility around the clock.",
    priorities: [
      "Consistent guest comfort",
      "Quiet, unobtrusive plant operation",
      "Guestroom and common-area separation",
      "Energy visibility across back-of-house",
      "24/7 operational continuity",
    ],
    systems: ["Guestroom control interfaces", "Common-area HVAC", "Kitchen and laundry plant", "Energy and utility metering"],
    concern: "Balancing guest comfort and energy use while keeping plant quiet and operation continuous through every hour of the day.",
    deliverables: ["Guestroom and common-area control", "Back-of-house plant sequences", "Energy dashboards", "24/7 alarm and support model"],
  },
  {
    slug: "industrial-institutional",
    featured: true,
    title: "Industrial and Institutional",
    summary: "Uptime, plant visibility and robust field integration with full operational accountability.",
    priorities: [
      "Plant uptime and continuity",
      "Clear plant visibility for operators",
      "Robust field integration in demanding conditions",
      "Complete, auditable documentation",
      "Operational accountability over a long horizon",
    ],
    systems: ["Process-adjacent HVAC and ventilation", "Energy and demand metering", "Generators and standby interfaces", "Robust field controllers and I/O"],
    concern: "Robust integration and documentation that supports accountability and continuity over a long operating life.",
    deliverables: ["Plant and ventilation control", "Energy and demand monitoring", "Robust field integration", "Auditable as-built documentation"],
  },
  {
    slug: "residential-towers",
    featured: false,
    title: "Residential Towers",
    summary: "Common-area plant, ventilation and shared services controlled and metered fairly.",
    priorities: ["Common-area HVAC", "Carpark and stair ventilation", "Embedded network metering", "Quiet, reliable operation"],
    systems: ["Common-area HVAC", "Carpark ventilation", "Embedded network meters", "Domestic plant interfaces"],
    concern: "Fair metering and reliable common-area operation across owners and tenants.",
    deliverables: ["Common-area control sequences", "Carpark ventilation control", "Embedded metering integration"],
  },
  {
    slug: "retail-malls",
    featured: false,
    title: "Retail and Malls",
    summary: "Comfort and energy that track foot traffic and trading hours across large, variable spaces.",
    priorities: ["Zoned comfort control", "Trading-hours scheduling", "Tenant condition monitoring", "Energy visibility"],
    systems: ["Zoned AHUs and ventilation", "Tenant condition interfaces", "Energy and utility metering"],
    concern: "Comfort and energy that follow occupancy and trading hours without manual intervention.",
    deliverables: ["Zoned comfort sequences", "Trading-hours scheduling", "Tenant condition monitoring"],
  },
  {
    slug: "government-institutional",
    featured: false,
    title: "Government Buildings",
    summary: "Long-horizon, well-documented systems with accountability and supportability built in.",
    priorities: ["Open, supportable platforms", "Auditable documentation", "Lifecycle planning", "Accountable operation"],
    systems: ["HVAC and ventilation plant", "Energy metering", "Open-protocol interfaces"],
    concern: "Supportable, well-documented systems that remain accountable over long public-sector horizons.",
    deliverables: ["Open-protocol architecture", "Auditable documentation", "Lifecycle support framework"],
  },
];

export const featuredIndustries = industries.filter((i) => i.featured);
export const secondaryIndustries = industries.filter((i) => !i.featured);

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
