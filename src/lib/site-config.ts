export const siteConfig = {
  name: "Voltivo Technologies",
  shortName: "Voltivo",
  domain: "https://www.voltivotechnologies.com",
  tagline: "Where Energy Meets Intelligence",
  description:
    "Voltivo Technologies provides industrial automation, electrical, PLC, IoT, electronics and IT solutions designed to create smarter, connected and efficient operations.",
  email: "info@voltivotechnologies.com",
  phone: "+1 (555) 010-2024",
  phoneHref: "+15550102024",
  address: "4th Floor, Innovation Hub, Colombo 03, Sri Lanka",
  social: {
    linkedin: "https://www.linkedin.com/company/voltivo-technologies",
    facebook: "https://www.facebook.com/voltivotechnologies",
    twitter: "https://twitter.com/voltivotech",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  code: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "industrial-automation",
    title: "Industrial Automation",
    shortDescription:
      "Smart automation solutions designed to improve productivity, efficiency, and process control.",
    description:
      "We design and deploy end-to-end automated workflows for manufacturing, processing, and production environments. From machine integration to full-line automation, our systems are engineered for maximum throughput, precision, and minimal downtime in demanding industrial settings.",
    icon: "Cog",
    code: "SYS.AUTO.01",
    highlights: [
      "Process and motion control system design",
      "Robotics and machine integration",
      "Line automation and retrofitting",
      "Safety systems and compliance audits",
    ],
  },
  {
    slug: "electrical-automation",
    title: "Electrical Automation",
    shortDescription:
      "Reliable electrical control and automation solutions for modern industrial applications.",
    description:
      "Our electrical engineering team delivers robust power distribution, control panel design, and load management systems engineered for high-demand, mission-critical facilities — built to meet the strictest reliability and safety standards.",
    icon: "Zap",
    code: "SYS.ELEC.02",
    highlights: [
      "Control panel design and fabrication",
      "Power distribution and load management",
      "Switchgear and protection systems",
      "Preventive maintenance programs",
    ],
  },
  {
    slug: "plc-control-systems",
    title: "PLC & Control Systems",
    shortDescription:
      "PLC programming, HMI, SCADA, control systems, integration, and commissioning.",
    description:
      "We engineer custom logic controller programs that ensure flawless execution of complex mechanical sequencing and safety protocols, backed by intuitive HMI and SCADA interfaces for real-time operational visibility.",
    icon: "SlidersHorizontal",
    code: "SYS.PLC.03",
    highlights: [
      "PLC programming (Siemens, Allen-Bradley, Mitsubishi)",
      "HMI and SCADA development",
      "Systems integration and commissioning",
      "Legacy system migration and upgrades",
    ],
  },
  {
    slug: "industrial-iot",
    title: "Industrial IoT",
    shortDescription:
      "Connected systems for real-time monitoring, data collection, remote access, and intelligent decision-making.",
    description:
      "Our IoT infrastructure connects your facility floor to the cloud with secure, high-bandwidth sensor networks that deliver real-time telemetry to centralized intelligence hubs — enabling predictive maintenance and data-driven decisions.",
    icon: "Radio",
    code: "SYS.IOT.04",
    highlights: [
      "Sensor networks and edge devices",
      "Real-time monitoring dashboards",
      "Predictive maintenance analytics",
      "Secure remote access architecture",
    ],
  },
  {
    slug: "electronics-embedded-systems",
    title: "Electronics & Embedded Systems",
    shortDescription:
      "Customized electronic and embedded solutions for automation, monitoring, and connected applications.",
    description:
      "From custom PCB design to embedded firmware, we build electronic systems engineered for extreme environments and rigorous industrial standards — tailored precisely to your product or process requirements.",
    icon: "CircuitBoard",
    code: "SYS.ELEX.05",
    highlights: [
      "Custom PCB design and prototyping",
      "Embedded firmware development",
      "Sensor and instrumentation design",
      "Environmental and ruggedization testing",
    ],
  },
  {
    slug: "it-solutions",
    title: "IT Solutions",
    shortDescription:
      "Modern software, web applications, dashboards, and digital solutions for business and industrial environments.",
    description:
      "We build enterprise-grade server architecture, database management, and custom software that bridges the gap between operations and analytics — giving you a single source of truth across your business.",
    icon: "Monitor",
    code: "SYS.IT.06",
    highlights: [
      "Web and dashboard application development",
      "Enterprise server and database architecture",
      "Systems and API integration",
      "Ongoing IT support and maintenance",
    ],
  },
];

export const whyVoltivo = [
  {
    title: "Integrated Expertise",
    description:
      "We combine electrical, electronics, automation, IoT, PLC, and IT expertise under one roof, with unified teams working in strict parallel.",
  },
  {
    title: "Customized Solutions",
    description:
      "We develop solutions built to the exact specifications of your operational footprint — no generic templates.",
  },
  {
    title: "Innovation Driven",
    description:
      "We use modern technologies and machine intelligence to create smarter, more efficient, future-proof solutions.",
  },
  {
    title: "Reliable Engineering",
    description:
      "Our focus is on practical, reliable, scalable, and maintainable solutions engineered with redundancy in mind.",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial consultation and design to implementation, commissioning, and ongoing support — we stay with you.",
  },
];
