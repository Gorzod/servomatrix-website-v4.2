// Technical service catalogue. Eleven services organised into four engineering stages.

export const serviceStages = [
  { id: "design", label: "Design & Engineering", intro: "Resolving the controls package before it reaches procurement." },
  { id: "delivery", label: "Delivery & Integration", intro: "Turning the design into programmed, integrated, operable systems." },
  { id: "verification", label: "Verification & Handover", intro: "Proving the system against intent and handing over a maintainable facility." },
  { id: "lifecycle", label: "Performance & Lifecycle", intro: "Keeping the building operating well after the contractors have left." },
];

export const services = [
  {
    id: "bms-design",
    stage: "design",
    index: "01",
    title: "BMS Design Support",
    short: "Control system architecture and documentation that holds up to scrutiny.",
    problem:
      "Controls packages often reach procurement with incomplete points schedules, unclear interfaces or network architecture that has not been resolved.",
    when: "During design development and before tender, when the controls scope and integration boundaries need to be defined.",
    scope:
      "servomatrix develops the architecture, I/O mapping, integration boundaries and sequence framework required for a coherent controls package.",
    deliverables: [
      "BMS architecture and topology diagram",
      "Points schedule and I/O budget",
      "Controller selection basis",
      "Integration schedule",
      "Sequence-of-operation framework",
    ],
    inputs: [
      "Mechanical equipment schedules",
      "Consultant specifications",
      "HVAC schematics",
      "Available layouts and electrical interfaces",
    ],
    related: ["BACnet/IP", "Modbus TCP", "DDC controllers"],
    solution: "new-build-bms",
    cta: "Discuss a design-stage project",
  },
  {
    id: "ddc-panels",
    stage: "design",
    index: "02",
    title: "DDC Panel Engineering",
    short: "Field panels built and documented to a repeatable, serviceable standard.",
    problem:
      "Inconsistent panel design and poor documentation make systems difficult to terminate, fault-find and maintain over their life.",
    when: "Once the architecture and points schedule are set and panels need to be engineered and fabricated.",
    scope:
      "Direct digital control panel design, fabrication oversight and as-built documentation for plant rooms, risers and field locations.",
    deliverables: [
      "Panel schematics and wiring diagrams",
      "Termination schedules and labelling",
      "Bill of materials and component schedules",
      "Factory acceptance documentation",
    ],
    inputs: ["Approved points schedule", "Controller selection", "Plant room and riser layouts", "Electrical supply details"],
    related: ["DDC controllers", "Field I/O", "Variable speed drives"],
    solution: "new-build-bms",
    cta: "Discuss panel engineering",
  },
  {
    id: "hvac-control",
    stage: "design",
    index: "03",
    title: "HVAC Control Strategy",
    short: "Sequences engineered for stability, comfort and energy discipline.",
    problem:
      "Poor control logic causes comfort complaints, hunting, short cycling and unnecessary plant runtime.",
    when: "Whenever air handling, water plant, terminal units or ventilation need defined, defensible control sequences.",
    scope:
      "Control strategies for air handling, chilled and heating water plant, terminal units and ventilation, written as clear sequences of operation.",
    deliverables: [
      "Plant and zone control sequences",
      "Setpoint and reset strategies",
      "Staging, optimisation and interlock logic",
      "Alarm and safety strategy",
    ],
    inputs: ["Mechanical design intent", "Plant schedules", "Zoning and occupancy information", "Safety and interlock requirements"],
    related: ["AHUs & FCUs", "Chiller plant", "Ventilation systems"],
    solution: "new-build-bms",
    cta: "Discuss a control strategy",
  },
  {
    id: "programming",
    stage: "delivery",
    index: "04",
    title: "BMS Programming",
    short: "Controller logic written to be read, audited and maintained.",
    problem:
      "Programming written only to function — not to be read — leaves the next engineer unable to maintain the system without a translator.",
    when: "During delivery, once sequences and graphics requirements are defined.",
    scope:
      "Application programming across DDC controllers and supervisory platforms, structured so the next engineer can understand it without a translator.",
    deliverables: [
      "Structured, commented controller logic",
      "Reusable function blocks and templates",
      "Trends, schedules and alarm configuration",
      "Version-controlled program backups",
    ],
    inputs: ["Approved sequences of operation", "Points schedule", "Controller platform", "Trend and alarm requirements"],
    related: ["DDC controllers", "Supervisory platforms"],
    solution: "new-build-bms",
    cta: "Discuss programming scope",
  },
  {
    id: "integration",
    stage: "delivery",
    index: "05",
    title: "System Integration",
    short: "BACnet, Modbus and IP devices brought under one operator view.",
    problem:
      "Mechanical equipment, meters and third-party systems operate in isolation without disciplined integration.",
    when: "When mechanical plant, metering and third-party equipment must be brought under one supervisory layer.",
    scope:
      "Integration of mechanical plant, metering and third-party equipment over BACnet/IP, BACnet MS/TP, Modbus TCP and Modbus RTU into a single supervisory layer.",
    deliverables: [
      "Protocol gateways and device mapping",
      "Register and object mapping documentation",
      "Unified alarming and trending",
      "Single operator interface across systems",
    ],
    inputs: ["Manufacturer protocol documentation", "Register / object lists", "Network design", "Interface ownership matrix"],
    related: ["BACnet/IP", "BACnet MS/TP", "Modbus TCP", "Modbus RTU"],
    solution: "new-build-bms",
    cta: "Discuss an integration scope",
  },
  {
    id: "graphics",
    stage: "delivery",
    index: "06",
    title: "Operator Graphics",
    short: "Front-end interfaces operators can actually run a building from.",
    problem:
      "An operator interface built without regard to how facilities teams work gets ignored, and the system loses its value.",
    when: "During delivery, alongside programming, before commissioning and handover.",
    scope:
      "Graphics and dashboards built around how facilities teams actually work — plant overviews, floor plans, live values and drill-down detail.",
    deliverables: [
      "Plant and zone graphic pages",
      "Live value, status and alarm display",
      "Trend and reporting views",
      "Role-based navigation and access",
    ],
    inputs: ["Plant layouts and floor plans", "Points schedule", "Operator workflow expectations", "Access-level requirements"],
    related: ["Supervisory platforms", "Trends & logging", "User access levels"],
    solution: "new-build-bms",
    cta: "Discuss operator graphics",
  },
  {
    id: "commissioning",
    stage: "verification",
    index: "07",
    title: "Testing & Commissioning",
    short: "Point-by-point verification with documented, signed-off results.",
    problem:
      "Untested sequences and incomplete checks leave defects that surface as call-backs after handover.",
    when: "At handover stage, to prove the installed system against the design intent.",
    scope:
      "Pre-functional checks, point-to-point testing and functional performance testing of sequences against the design intent.",
    deliverables: [
      "Point-to-point test records",
      "Functional performance test results",
      "Witnessed commissioning sign-off",
      "Defect register and close-out",
    ],
    inputs: ["Approved sequences", "Installed and powered system", "Points schedule", "Access to plant for testing"],
    related: ["Commissioning records", "Sequence verification"],
    solution: "commissioning",
    cta: "Plan commissioning support",
  },
  {
    id: "documentation-training",
    stage: "verification",
    index: "08",
    title: "Documentation & Operator Training",
    short: "An as-built record and operators who can confidently run the system.",
    problem:
      "Incomplete documentation and untrained operators leave a facility team with a system they cannot confidently maintain.",
    when: "At handover, to transfer the system to the operating team properly.",
    scope:
      "As-built documentation, operations and maintenance records, and structured operator training on the system the facility team will actually use.",
    deliverables: [
      "As-built drawings and schedules",
      "Operations and maintenance pack",
      "Backup and recovery records",
      "Operator training sessions and reference material",
    ],
    inputs: ["Completed commissioning records", "Final program backups", "Operator availability for training"],
    related: ["As-built documentation", "Backup & handover records"],
    solution: "commissioning",
    cta: "Discuss handover requirements",
  },
  {
    id: "energy",
    stage: "lifecycle",
    index: "09",
    title: "Energy Monitoring",
    short: "Metering and analytics that turn consumption into decisions.",
    problem:
      "Without visibility of consumption and demand, there is no basis for tuning, reporting or verifying savings.",
    when: "When operational visibility of energy and utilities is required, on new or existing buildings.",
    scope:
      "Energy and utility metering integration, sub-metering strategy, and dashboards that make consumption, demand and anomalies visible.",
    deliverables: [
      "Metering point strategy and integration",
      "Consumption and demand dashboards",
      "Anomaly and threshold alerting",
      "Reporting framework agreed to the project's monitoring objectives",
    ],
    inputs: ["Meter schedule and locations", "Network access", "Reporting objectives", "Tariff and tenancy structure"],
    related: ["Energy & utility meters", "Trends & logging"],
    solution: "energy-monitoring",
    cta: "Define an energy monitoring scope",
  },
  {
    id: "remote-support",
    stage: "lifecycle",
    index: "10",
    title: "Remote Support",
    short: "Secure remote monitoring and a defined response path.",
    problem:
      "Buildings drift after handover; without ongoing support, performance degrades and faults go unnoticed.",
    when: "After handover, under an agreed lifecycle support scope.",
    scope:
      "Secure remote access, proactive monitoring and a structured support model for diagnosis, tuning and fault resolution.",
    deliverables: [
      "Secure remote access setup",
      "Proactive alarm and trend monitoring",
      "Support response model agreed under the service scope",
      "Periodic performance reviews",
    ],
    inputs: ["Network and access policy", "Supervisory platform access", "Agreed support scope"],
    related: ["Secure remote access", "Alarms & events"],
    solution: "remote-support",
    cta: "Discuss lifecycle support",
  },
  {
    id: "retrofit",
    stage: "lifecycle",
    index: "11",
    title: "Retrofit & Upgrade Works",
    short: "Migrating ageing controls without shutting the building down.",
    problem:
      "Legacy and obsolete control systems become unsupportable, but the building has to keep operating through any upgrade.",
    when: "When an existing system reaches end of support or no longer meets operational needs.",
    scope:
      "Staged migration of legacy and obsolete control systems to current, supportable platforms — planned around an operating building.",
    deliverables: [
      "Existing system audit and migration plan",
      "Staged cutover with minimal disruption",
      "Supportable replacement architecture selected against the project's operational, integration and procurement requirements",
      "Full re-commissioning and documentation",
    ],
    inputs: ["Existing system records", "Site survey access", "Operational constraints", "Phasing requirements"],
    related: ["Open-protocol interfaces where specified", "Commissioning records"],
    solution: "retrofit-upgrades",
    cta: "Assess an existing system",
  },
];
