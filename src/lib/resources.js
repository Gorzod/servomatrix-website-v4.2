// Technical resources. Structured as engineering publications with sectioned bodies.

export const resourcesIntro = {
  kicker: "RESOURCES",
  title: "Technical references for resolving a BMS package well.",
  lead:
    "Practical references for consultants, developers and contractors working through a building controls scope — what to check, what to resolve, and what a complete documentation stack looks like.",
};

export const resources = [
  {
    slug: "bms-tender-checklist",
    type: "Checklist",
    title: "What to Check Before Pricing or Procuring a BMS Package",
    shortTitle: "BMS Tender Review Checklist",
    summary: "The points to confirm in a controls package before it is priced or awarded, so scope gaps surface early rather than on site.",
    readingTime: "6 min read",
    intro:
      "A BMS package priced against an incomplete scope is a programme risk. This checklist covers the items to confirm before pricing or procuring, so responsibilities and gaps are visible before award rather than discovered during commissioning.",
    sections: [
      { h: "Mechanical equipment schedules", p: "Confirm that equipment schedules are complete and current, and that every controlled item is accounted for in the points list." },
      { h: "Points list completeness", p: "Check that the points schedule covers every input and output, with an I/O budget that leaves headroom for change." },
      { h: "Integration interfaces", p: "Identify every third-party system to be integrated and confirm the interface exists, is documented and is available." },
      { h: "Protocol responsibilities", p: "Establish which party provides each protocol interface and gateway, and who owns the register or object mapping." },
      { h: "DDC panel requirements", p: "Confirm panel scope, location, fabrication standard and labelling expectations." },
      { h: "Network responsibilities", p: "Clarify who provides the network, addressing and segmentation, and where the BMS boundary sits." },
      { h: "Graphics requirements", p: "Agree the graphic scope, page count basis and operator workflow expectations." },
      { h: "Testing and commissioning obligations", p: "Define the commissioning scope, witnessing requirements and acceptance criteria." },
      { h: "Handover deliverables", p: "List the as-built, O&M, backup and training deliverables required at handover." },
    ],
    cta: { label: "Discuss a tender review", href: "/contact" },
  },
  {
    slug: "bms-integration-checklist",
    type: "Checklist",
    title: "Questions to Resolve Before Integrating Third-Party Equipment Into a BMS",
    shortTitle: "BMS Integration Checklist",
    summary: "The questions to answer before committing to integrate any third-party system, so integration is priced and coordinated rather than assumed.",
    readingTime: "6 min read",
    intro:
      "Integration fails when the interface is assumed rather than confirmed. These questions establish whether — and how — a third-party system can be integrated, before the scope is committed.",
    sections: [
      { h: "Protocol availability", p: "Does the equipment expose an open protocol (BACnet, Modbus or equivalent), and at what level?" },
      { h: "Interface ownership", p: "Who provides and configures the interface — the equipment vendor, the BMS integrator or the contractor?" },
      { h: "Gateway requirements", p: "Is a gateway required, is it approved, and who supplies and commissions it?" },
      { h: "Points / register list", p: "Is a documented points or register list available, and does it cover the data the project needs?" },
      { h: "Alarm responsibilities", p: "Which alarms are surfaced through the BMS, and which remain local to the equipment?" },
      { h: "Network addressing", p: "How is the device addressed, and how does it fit the network design and segmentation?" },
      { h: "Testing obligations", p: "How is the integration tested and witnessed, and against what criteria?" },
      { h: "Manufacturer coordination", p: "What coordination with the manufacturer is required, and is it scheduled?" },
    ],
    cta: { label: "Discuss an integration scope", href: "/contact" },
  },
  {
    slug: "bms-design-guide",
    type: "Guide",
    title: "From Design Intent to Operable Controls: The BMS Documentation Stack",
    shortTitle: "BMS Design Guide",
    summary: "The documentation that takes a controls package from design intent to an operable, maintainable system.",
    readingTime: "8 min read",
    intro:
      "A controls package is only as good as the documentation behind it. This guide walks through the stack of documents that takes a BMS from design intent to an operable, maintainable system, and what each one is for.",
    sections: [
      { h: "Architecture", p: "The network and system architecture defines what connects to what, over which protocols, and where the integration boundaries sit. Everything else follows from it." },
      { h: "Points schedule", p: "Every input and output, scheduled and budgeted. The points schedule is the contract between the mechanical design and the controls system." },
      { h: "Sequence of operation", p: "The control logic written as a clear, testable narrative — start-up, normal operation, staging, reset, failure and interlock conditions." },
      { h: "Panels", p: "Panel schematics, wiring diagrams and termination schedules, drawn to a consistent standard so the system is serviceable for its whole life." },
      { h: "Network drawings", p: "How controllers, supervisors and gateways are connected and addressed, and how the network is segmented and secured." },
      { h: "Graphics", p: "Operator graphics built around how the building is actually run, with the hierarchy, live data and navigation operators need." },
      { h: "Commissioning", p: "Point-to-point and functional test records that prove the system against the sequences, with witnessing and defect close-out." },
      { h: "As-built documentation", p: "The final record — updated drawings, schedules, backups and O&M material — that the operating team keeps and maintains." },
    ],
    cta: { label: "Discuss a design-stage project", href: "/contact" },
  },
];

export function getResource(slug) {
  return resources.find((r) => r.slug === slug);
}
