// Project evidence framework.
// status: "verified" | "anonymised" | "representative"
// Until verified Servomatrix projects exist, only representative delivery-scope
// cards are rendered. Never present a representative scope as a completed project.

export const projectStatusLabels = {
  verified: "Verified project",
  anonymised: "Anonymised project",
  representative: "Representative delivery scope",
};

export const projectsIntro = {
  kicker: "PROJECTS",
  title: "Engineering evidence, presented clearly.",
  lead:
    "For every project, the controls package should be understandable in drawings, demonstrable during commissioning and maintainable after handover. The scopes below are representative of the work we perform and the deliverables we produce.",
  note:
    "Representative delivery scopes describe the engineering approach and deliverables for a building category. They are not presented as completed servomatrix projects. Verified project case studies will be published here following delivery and client approval.",
};

export const projects = [
  {
    slug: "commercial-office-bms-integration",
    status: "representative",
    title: "Commercial office BMS integration",
    location: "Representative — Middle East",
    sector: "Commercial and mixed-use",
    buildingType: "Multi-tenant office tower",
    stage: "Design through commissioning",
    challenge:
      "A multi-tenant office requires central plant, tenant metering and after-hours control brought under one supervisory layer, with each tenancy comfortable and accountable.",
    approach:
      "Resolve the architecture and points schedule, integrate chilled water plant, AHUs and tenant meters over BACnet and Modbus, and build estate-wide operator graphics with after-hours scheduling.",
    systems: ["Chilled water plant", "AHUs and terminal units", "Tenant energy meters", "After-hours control"],
    protocols: ["BACnet/IP", "BACnet MS/TP", "Modbus TCP"],
    deliverables: ["Architecture and topology diagram", "Points schedule and I/O budget", "Plant and zone sequences", "Tenant metering integration", "Commissioning records"],
    relatedServices: ["bms-design", "integration", "commissioning"],
  },
  {
    slug: "healthcare-ventilation-critical-alarming",
    status: "representative",
    title: "Healthcare ventilation and critical alarming",
    location: "Representative — Middle East & Africa",
    sector: "Healthcare",
    buildingType: "Clinical facility",
    stage: "Design through witnessed commissioning",
    challenge:
      "A clinical facility requires ventilation control to defined conditions, critical alarming with clear escalation, and the documentation discipline a healthcare handover demands.",
    approach:
      "Engineer ventilation and, where applicable, pressure-regime control sequences; define a critical alarm strategy with escalation; and verify every sequence under witnessed commissioning.",
    systems: ["Dedicated ventilation and AHUs", "Pressure-controlled spaces where applicable", "Critical alarm interfaces", "Standby and redundancy logic"],
    protocols: ["BACnet/IP", "BACnet MS/TP", "Modbus TCP"],
    deliverables: ["Ventilation and pressure control sequences", "Critical alarm strategy", "Witnessed commissioning records", "As-built and handover pack"],
    relatedServices: ["hvac-control", "commissioning", "documentation-training"],
    note: "Clinical and regulatory compliance is confirmed per project with the consultant and authority having jurisdiction.",
  },
  {
    slug: "hotel-hvac-control-energy-visibility",
    status: "representative",
    title: "Hotel HVAC control and energy visibility",
    location: "Representative — Middle East",
    sector: "Hotels and hospitality",
    buildingType: "Hotel",
    stage: "Design through commissioning and lifecycle support",
    challenge:
      "A hotel requires consistent guest comfort, quiet plant operation and energy visibility across back-of-house, running continuously through every hour of the day.",
    approach:
      "Deliver guestroom and common-area control, sequence back-of-house plant for quiet, efficient operation, and build energy dashboards, supported by a 24/7 alarm and support model.",
    systems: ["Guestroom control interfaces", "Common-area HVAC", "Kitchen and laundry plant", "Energy and utility meters"],
    protocols: ["BACnet/IP", "Modbus TCP", "Modbus RTU"],
    deliverables: ["Guestroom and common-area sequences", "Back-of-house plant control", "Energy dashboards and trends", "Support model"],
    relatedServices: ["hvac-control", "energy", "remote-support"],
  },
];

export const featuredProjectSlugs = [
  "commercial-office-bms-integration",
  "healthcare-ventilation-critical-alarming",
  "hotel-hvac-control-energy-visibility",
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
