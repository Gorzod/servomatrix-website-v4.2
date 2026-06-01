// Commercial solution pathways, organised by what the client is trying to achieve.

export const solutionsIntro = {
  kicker: "SOLUTIONS",
  title: "Controls solutions aligned to the building's stage, risk and operational priorities.",
  lead:
    "Solutions describe what you are trying to achieve. Services describe the technical work we perform. Each pathway below maps to a defined scope, a set of deliverables and the engineering discipline behind it.",
};

export const solutions = [
  {
    slug: "new-build-bms",
    index: "01",
    title: "New-build BMS delivery",
    summary: "End-to-end controls delivery from design review through to commissioned handover.",
    audience: ["Developers", "Consultants", "Main contractors", "MEP contractors"],
    situation:
      "A new facility needs its controls package resolved, delivered and commissioned to align mechanical design intent with day-to-day operation.",
    scope:
      "servomatrix engineers the architecture, delivers panels and programming, supports installation, and commissions the system against the design intent.",
    deliverablesShort: ["Architecture and points schedule", "Panels and programming", "Commissioning and as-built pack"],
    sections: [
      {
        h: "Where BMS packages fail during design and delivery",
        p: "Most controls problems are designed in, not built in. Incomplete points schedules, unresolved integration boundaries and network architecture left to procurement create cost, programme risk and a system that cannot be commissioned cleanly.",
      },
      {
        h: "Servomatrix scope, from design review to handover",
        p: "We review the design intent, set the architecture and integration boundaries, engineer panels, write and audit the programming, build operator graphics, support installation, and run point-to-point and functional testing through to witnessed handover.",
      },
      {
        h: "Required inputs",
        list: ["Mechanical equipment schedules", "Consultant specifications", "HVAC schematics", "Available layouts and electrical interfaces", "Integration responsibilities matrix where available"],
      },
      {
        h: "Typical deliverables",
        list: ["BMS architecture and topology diagram", "Points schedule and I/O budget", "DDC panel schematics", "Sequences of operation", "Commissioning records", "As-built and handover pack"],
      },
      {
        h: "Procurement and coordination considerations",
        p: "Integration scope depends on available manufacturer interfaces, approved gateways, protocol documentation and project responsibilities. We define these boundaries early so they are priced and coordinated rather than discovered on site.",
      },
    ],
    relatedServices: ["bms-design", "ddc-panels", "programming", "integration", "commissioning"],
    cta: "Discuss a new-build controls package",
  },
  {
    slug: "retrofit-upgrades",
    index: "02",
    title: "Retrofit and controls modernisation",
    summary: "Staged migration of ageing or unsupportable controls in a live, occupied building.",
    audience: ["Building owners", "Facility managers", "Asset managers"],
    situation:
      "An existing BMS is obsolete, unsupportable or no longer meeting operational needs, and the building must keep running throughout any upgrade.",
    scope:
      "servomatrix audits the existing system, plans a phased migration, resolves protocol and interface strategy, and recommissions the result.",
    deliverablesShort: ["Existing-system audit", "Phased migration plan", "Recommissioning and handover"],
    sections: [
      {
        h: "Signs that an existing BMS requires modernisation",
        list: ["Controllers or software no longer supported", "Recurring comfort complaints and call-backs", "No usable documentation or backups", "Inability to integrate new plant or metering", "Operators avoiding the front end entirely"],
      },
      {
        h: "Live-building upgrade constraints",
        p: "Most upgrades happen around occupants and operating plant. The work has to be sequenced so the facility keeps running — temporary control, out-of-hours cutovers and clear fallback positions at each stage.",
      },
      {
        h: "Existing-system audit",
        p: "We survey the installed controllers, field devices, network and documentation, and establish what can be retained, what must be replaced and where the integration risks sit.",
      },
      {
        h: "Phased migration planning",
        p: "A staged plan defines the cutover sequence, temporary arrangements and acceptance criteria for each phase, so disruption is controlled and reversible.",
      },
      {
        h: "Protocol and interface strategy",
        p: "We confirm which existing interfaces can be reused, where open-protocol interfaces are available, and where gateways are required — documented as integration responsibilities before work begins.",
      },
      {
        h: "Recommissioning and handover",
        p: "Each migrated system is retested against its sequences, with updated documentation and operator briefing, so the building is left maintainable.",
      },
    ],
    relatedServices: ["retrofit", "integration", "commissioning", "documentation-training"],
    cta: "Assess an existing system",
  },
  {
    slug: "commissioning",
    index: "03",
    title: "Testing and commissioning support",
    summary: "Independent, documented verification of controls against the design intent before handover.",
    audience: ["Consultants", "Developers", "Contractors facing handover risk"],
    situation:
      "A controls package is approaching handover and the sequences need to be proven, documented and witnessed before the building is accepted.",
    scope:
      "servomatrix carries out point-to-point and functional performance testing, verifies sequences, tracks defects and produces witnessed handover documentation.",
    deliverablesShort: ["Test records", "Defect register", "Witnessed sign-off"],
    sections: [
      {
        h: "Why controls commissioning matters",
        p: "A system that works in places is not a commissioned system. Disciplined commissioning proves every point and every sequence, and produces the record that lets a consultant or owner accept the works with confidence.",
      },
      {
        h: "Point-to-point checks",
        p: "Every input and output is verified end to end — field device to controller to graphic — and recorded against the points schedule.",
      },
      {
        h: "Functional performance testing",
        p: "Sequences are exercised through their operating modes, including start-up, staging, setpoint reset, failure and interlock conditions.",
      },
      {
        h: "Sequence verification",
        p: "Observed behaviour is checked against the approved sequence of operation, not against assumptions, with discrepancies logged.",
      },
      {
        h: "Defect tracking",
        p: "A defect register captures each issue, its status and its resolution, so close-out is transparent and auditable.",
      },
      {
        h: "Witnessing and handover documentation",
        p: "Tests can be witnessed and signed off, and the records form part of the handover pack the operating team retains.",
      },
    ],
    relatedServices: ["commissioning", "documentation-training"],
    cta: "Plan commissioning support",
  },
  {
    slug: "energy-monitoring",
    index: "04",
    title: "Energy monitoring and operational visibility",
    summary: "Metering, integration and dashboards that make consumption and demand visible and actionable.",
    audience: ["Owners", "Operators", "Energy managers"],
    situation:
      "An owner or operator needs visibility of energy and utility use across a facility to manage cost, demand and operational performance.",
    scope:
      "servomatrix defines the metering strategy, integrates meter and plant data, and builds dashboards, trends and exception reporting.",
    deliverablesShort: ["Metering strategy", "Dashboards and trends", "Exception reporting"],
    sections: [
      {
        h: "Metering strategy",
        p: "We define what to meter and at what level — main incomers, plant, tenancies — so the data answers the questions the operator actually has.",
      },
      {
        h: "Data integration",
        p: "Meters and plant data are integrated over BACnet and Modbus into the supervisory layer, with documented register and object mapping.",
      },
      {
        h: "Dashboards and trends",
        p: "Consumption, demand and key plant data are presented as dashboards and trends built for daily operational use, not one-off reports.",
      },
      {
        h: "Alarm thresholds and exception reporting",
        p: "Threshold and anomaly alerts surface unusual consumption and demand events so they can be investigated promptly.",
      },
      {
        h: "On savings",
        p: "Savings are not claimed without a measured baseline and an agreed verification method. Monitoring provides the visibility; any savings figure is established against the project's own data.",
      },
    ],
    relatedServices: ["energy", "integration"],
    cta: "Define an energy monitoring scope",
  },
  {
    slug: "remote-support",
    index: "05",
    title: "Remote support and lifecycle optimisation",
    summary: "Secure remote visibility, alarm review and tuning under an agreed support model.",
    audience: ["Operators", "Owners", "Facility management teams"],
    situation:
      "An operating building needs ongoing technical support to keep its controls performing and to resolve faults without a full site mobilisation each time.",
    scope:
      "servomatrix provides secure remote visibility, alarm and trend review, tuning and fault support under an agreed support model.",
    deliverablesShort: ["Secure remote access", "Alarm and trend review", "Tuning and fault support"],
    sections: [
      {
        h: "Remote visibility",
        p: "Secure remote access to the supervisory layer lets us review live status, alarms and trends without mobilising to site for every query.",
      },
      {
        h: "Secure access approach",
        p: "Remote access is established under the owner's security and network policy, with access controlled and documented.",
      },
      {
        h: "Alarm review",
        p: "Alarms are reviewed and triaged so genuine faults are separated from noise and addressed in priority order.",
      },
      {
        h: "Trend analysis",
        p: "Trend data is used to catch drift — controls hunting, schedules out of step, plant running longer than needed — before it becomes a complaint.",
      },
      {
        h: "Tuning and fault support",
        p: "Setpoints, schedules and control parameters are tuned, and faults diagnosed and resolved, remotely where possible and on site where required.",
      },
      {
        h: "Support agreement model",
        p: "Scope, response model and review cadence are agreed up front, so the support relationship is defined rather than ad hoc.",
      },
    ],
    relatedServices: ["remote-support", "energy"],
    cta: "Discuss lifecycle support",
  },
];

export function getSolution(slug) {
  return solutions.find((s) => s.slug === slug);
}
