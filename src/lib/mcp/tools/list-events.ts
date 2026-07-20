import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { embassyEvents } from "../../events";

export default defineTool({
  name: "list_events",
  title: "List embassy events",
  description:
    "Return upcoming events hosted or organized by the Embassy of Mozambique in Germany. Optionally filter by category and limit results.",
  inputSchema: {
    category: z.string().optional().describe("Optional category filter (e.g. 'Culture', 'Trade')."),
    limit: z.number().int().positive().optional(),
    upcomingOnly: z
      .boolean()
      .optional()
      .describe("If true, only return events with a date today or later."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, limit, upcomingOnly }) => {
    let items = embassyEvents;
    if (upcomingOnly) {
      const today = new Date().toISOString().slice(0, 10);
      items = items.filter((e) => e.date >= today);
    }
    if (category) {
      const c = category.toLowerCase();
      items = items.filter((e) => e.category.toLowerCase() === c);
    }
    items = [...items].sort((a, b) => a.date.localeCompare(b.date));
    if (limit) items = items.slice(0, limit);
    const summary = items
      .map((e) => `• ${e.date} ${e.time} — ${e.title} (${e.category}) @ ${e.venue} — id: ${e.id}`)
      .join("\n");
    return {
      content: [{ type: "text", text: summary || "No events found." }],
      structuredContent: { items },
    };
  },
});
