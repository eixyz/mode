import { defineTool } from "@lovable.dev/mcp-js";

const info = {
  name: "Embassy of the Republic of Mozambique in Germany",
  address: "Stromstraße 47, 10551 Berlin, Germany",
  phone: "+49 (0)30 398 76 500",
  email: "embamoc.berlin@t-online.de",
  website: "https://www.embassy-of-mozambique.de/",
  hours: {
    consular: "Monday–Thursday: 09:00–12:30 (by appointment)",
    office: "Monday–Friday: 09:00–17:00",
  },
  services: [
    "Passports and ID documents",
    "Visa applications and consular processing",
    "Notarial and legal advisory services",
    "Trade and investment support",
    "Cultural and community affairs",
  ],
  jurisdiction: "Germany, and (through accreditation) selected additional countries.",
};

export default defineTool({
  name: "embassy_info",
  title: "Embassy contact & services",
  description:
    "Return contact details, opening hours, and the list of consular services offered by the Embassy of Mozambique in Germany.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      info.name,
      info.address,
      `Phone: ${info.phone}`,
      `Email: ${info.email}`,
      `Website: ${info.website}`,
      "",
      "Hours:",
      `  Consular: ${info.hours.consular}`,
      `  Office:   ${info.hours.office}`,
      "",
      "Services:",
      ...info.services.map((s) => `  • ${s}`),
      "",
      `Jurisdiction: ${info.jurisdiction}`,
    ].join("\n");
    return { content: [{ type: "text", text }], structuredContent: info };
  },
});
