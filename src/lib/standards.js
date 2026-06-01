// Capabilities, process, standards, deliverables and enquiry options.

// ---- Architecture diagram layers (with descriptions for hover/expand) ----
export const architectureLayers = [
  {
    id: "field",
    label: "Field devices",
    blurb: "Sensors, actuators, valves, drives and metering at the plant and zones.",
  },
  {
    id: "ddc",
    label: "DDC control",
    blurb: "Direct digital controllers running the sequences, local to plant and field.",
  },
  {
    id: "network",
    label: "Integration network",
    blurb: "BACnet and Modbus over IP and serial, plus gateways to third-party systems.",
  },
  {
    id: "supervisor",
    label: "Supervisor / operator layer",
    blurb: "Graphics, alarms, trends, schedules and reporting for daily operation.",
  },
  {
    id: "remote",
    label: "Remote support and analytics",
    blurb: "Secure remote visibility, alarm review and trend analysis after handover.",
  },
];

export const protocolLegend = ["BACnet/IP", "BACnet MS/TP", "Modbus TCP", "Modbus RTU"];

// ---- Capability sections ----
export const protocols = [
  { name: "BACnet/IP", application: "Building-wide controller and supervisor communication over the IP network.", connects: "DDC controllers, supervisors, IP-native plant.", matters: "The common backbone for open building control across multiple vendors.", docs: "Network architecture and device object mapping." },
  { name: "BACnet MS/TP", application: "Serial trunk communication for field controllers and devices.", connects: "Field DDC controllers, unitary controllers, sensors.", matters: "Cost-effective field bus where IP to every device is not warranted.", docs: "Trunk layout, addressing and device schedules." },
  { name: "Modbus TCP", application: "IP communication with meters, drives and third-party equipment.", connects: "Energy meters, VSDs, packaged plant.", matters: "Widely supported interface for metering and equipment data.", docs: "Register maps and polling schedules." },
  { name: "Modbus RTU", application: "Serial communication with field meters and devices.", connects: "Energy meters, generators, packaged controllers.", matters: "Robust serial interface common on metering and plant.", docs: "Register maps, addressing and wiring schedules." },
  { name: "IP network interfaces", application: "Structured network linking controllers, supervisors and gateways.", connects: "Controllers, servers, gateways, remote access.", matters: "Determines segmentation, security and resilience of the system.", docs: "Network drawings and addressing schedules." },
  { name: "Secure remote connectivity", application: "Controlled remote access for support and monitoring.", connects: "Supervisory layer to authorised remote support.", matters: "Enables lifecycle support without compromising network policy.", docs: "Access policy and connectivity records." },
];

export const controlledSystems = ["Air handling units (AHUs)", "Fan coil units (FCUs)", "Chiller plant", "Pumps and valves", "Ventilation systems", "VRF / VRV interfaces", "Variable speed drives"];

export const thirdPartySystems = ["Energy and utility meters", "Generators", "Fire alarm interfaces", "Lighting control interfaces", "Other equipment with open communication interfaces"];

export const integrationCaveat =
  "Integration scope depends on available manufacturer interfaces, approved gateways, protocol documentation and project responsibilities.";

export const operatorLayer = ["Graphic hierarchy and navigation", "Alarm management and escalation", "Trends and historical logging", "Schedules and calendars", "User access and roles", "Reporting", "Remote visibility"];

export const commissioningCapability = ["Mapping schedules", "Network drawings", "Device addressing schedules", "Testing sheets", "Backup and handover records"];

// ---- Deliverables (homepage proof tiles) ----
export const deliverables = [
  { title: "Network architecture diagrams", body: "How controllers, supervisors and gateways connect across the building." },
  { title: "Points schedules and I/O mapping", body: "Every input and output scheduled, budgeted and mapped." },
  { title: "DDC panel schematics", body: "Wiring, terminations and components, drawn to a serviceable standard." },
  { title: "Sequences of operation", body: "Plant and zone control logic written as clear, testable narratives." },
  { title: "Commissioning test sheets", body: "Point-to-point and functional results, recorded and witnessed." },
  { title: "As-built and handover packs", body: "The complete record the operating team keeps and maintains." },
];

// ---- Consolidated homepage process (6 phases) ----
export const homeProcess = [
  { n: "01", title: "Review and scope", body: "Review the design intent and constraints, and agree scope, interfaces and standards before drawing begins." },
  { n: "02", title: "Architecture and engineering", body: "Set network topology, controller selection, points schedule and integration boundaries." },
  { n: "03", title: "Programming and panel delivery", body: "Engineer panels and write auditable controller logic and operator graphics." },
  { n: "04", title: "Integration and installation support", body: "Support termination, power-up and network commissioning on site." },
  { n: "05", title: "Testing and commissioning", body: "Prove every point and sequence against the design intent, with documented results." },
  { n: "06", title: "Handover and lifecycle support", body: "Train operators, hand over the as-built pack, and support performance after handover." },
];

// ---- Full process (10 steps) ----
export const processSteps = [
  { n: "01", title: "Discovery & Technical Review", body: "We review the design intent, mechanical schedules and project constraints, and agree the scope, interfaces and standards before any drawing begins." },
  { n: "02", title: "System Architecture", body: "Network topology, controller selection and integration boundaries are set, so every party knows what connects to what and how." },
  { n: "03", title: "Point Schedule & I/O Mapping", body: "Every input and output is scheduled and mapped, with an I/O budget that leaves headroom for change without re-engineering." },
  { n: "04", title: "Shop Drawings & Panel Design", body: "Panel schematics, wiring diagrams and termination schedules are produced to a consistent, serviceable standard." },
  { n: "05", title: "Programming & Graphics", body: "Controller logic is written for clarity and audited against the sequences, and operator graphics are built around how the building is run." },
  { n: "06", title: "Factory Checks", body: "Panels and logic are checked before they reach site, so problems are found in a workshop, not in a live plant room." },
  { n: "07", title: "Site Installation Support", body: "We support the installing contractor through termination, power-up and network commissioning, resolving issues as they surface." },
  { n: "08", title: "Testing & Commissioning", body: "Point-to-point and functional performance testing proves every sequence against the design intent, with documented results." },
  { n: "09", title: "Handover & Training", body: "Operators are trained on the system they will actually use, and a complete as-built and operations pack is handed over." },
  { n: "10", title: "Support & Optimisation", body: "After handover, we monitor, tune and resolve faults under a defined support agreement, keeping performance from drifting." },
];

// ---- Trust / assurance blocks ----
export const assuranceBlocks = [
  { title: "Open-protocol integration", body: "We integrate across BACnet, Modbus and IP interfaces where the project specifies, rather than locking the building to a single vendor." },
  { title: "Documented engineering", body: "Architecture, points, sequences and panels are drawn and recorded, so the system is understandable and maintainable." },
  { title: "Testing against sequence intent", body: "Sequences are verified against the approved design intent and the results are recorded, not assumed." },
  { title: "Support after handover", body: "The relationship continues under a defined support scope, so performance is maintained rather than left to drift." },
];

// ---- Standards (reference only, not certification) ----
export const standards = ["ASHRAE 90.1", "ASHRAE 62.1", "IEC 60364", "ISO 50001", "ASHRAE Guideline 0"];
export const standardsStatement =
  "Our engineering approach is informed by recognised building controls, energy and electrical frameworks. Applicable requirements are confirmed project by project according to jurisdiction, consultant specification and agreed scope.";

// ---- Enquiry options ----
export const enquiryPaths = [
  { id: "new", label: "New BMS project", blurb: "Design, integration and commissioning for a new facility." },
  { id: "upgrade", label: "Existing system upgrade", blurb: "Retrofit or modernisation of an installed system." },
  { id: "commissioning", label: "Commissioning support", blurb: "Independent testing and witnessed handover." },
  { id: "review", label: "Technical review / not sure yet", blurb: "A controls scope or problem that needs a second opinion." },
];

export const projectStages = ["Concept / feasibility", "Design development", "Tender / procurement", "Construction", "Commissioning / handover", "Operational / existing building"];

export const supportNeeded = ["Design support", "Panel engineering", "Programming", "Integration", "Commissioning", "Energy monitoring", "Remote / lifecycle support", "Not sure yet"];
