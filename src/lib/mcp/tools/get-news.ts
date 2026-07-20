import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { newsItems } from "@/lib/news";

export default defineTool({
  name: "get_news",
  title: "Get news article",
  description: "Return the full content of a single embassy news article by id.",
  inputSchema: {
    id: z.string().describe("The news article id (from list_news)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const item = newsItems.find((i) => i.id === id);
    if (!item) {
      return {
        content: [{ type: "text", text: `No news article found with id '${id}'.` }],
        isError: true,
      };
    }
    const text = `${item.title}\n${item.date} • ${item.category}\n\n${item.content ?? item.excerpt}`;
    return { content: [{ type: "text", text }], structuredContent: { item } };
  },
});
