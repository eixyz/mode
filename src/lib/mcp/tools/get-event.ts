import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { embassyEvents } from "../../events";

export default defineTool({
  name: "get_event",
  title: "Get event",
  description: "Return the full details of a single embassy event by id.",
  inputSchema: { id: z.string().describe("The event id (from list_events).") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const item = embassyEvents.find((e) => e.id === id);
    if (!item) {
      return {
        content: [{ type: "text", text: `No event found with id '${id}'.` }],
        isError: true,
      };
    }
    const text = `${item.title}\n${item.date} • ${item.time} • ${item.category}\nVenue: ${item.venue}\n\n${item.content ?? item.summary}`;
    return { content: [{ type: "text", text }], structuredContent: { item } };
  },
});
