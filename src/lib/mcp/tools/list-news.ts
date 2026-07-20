import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { newsItems } from "@/lib/news";

export default defineTool({
  name: "list_news",
  title: "List embassy news",
  description:
    "Return the list of published news articles from the Embassy of Mozambique in Germany. Optionally filter by category (e.g. 'Visa', 'Trade', 'Culture', 'Announcement').",
  inputSchema: {
    category: z.string().optional().describe("Optional category filter (case-insensitive)."),
    limit: z.number().int().positive().optional().describe("Max number of items to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, limit }) => {
    let items = newsItems;
    if (category) {
      const c = category.toLowerCase();
      items = items.filter((i) => i.category.toLowerCase() === c);
    }
    if (limit) items = items.slice(0, limit);
    const summary = items
      .map((i) => `• [${i.date}] (${i.category}) ${i.title} — id: ${i.id}`)
      .join("\n");
    return {
      content: [{ type: "text", text: summary || "No news items found." }],
      structuredContent: { items },
    };
  },
});
