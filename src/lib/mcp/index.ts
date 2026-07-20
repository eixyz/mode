import { defineMcp } from "@lovable.dev/mcp-js";
import listNewsTool from "./tools/list-news";
import getNewsTool from "./tools/get-news";
import listEventsTool from "./tools/list-events";
import getEventTool from "./tools/get-event";
import embassyInfoTool from "./tools/embassy-info";

export default defineMcp({
  name: "mozambique-embassy-mcp",
  title: "Mozambique Embassy (Germany) MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the Embassy of Mozambique in Germany. Use `embassy_info` for contact details, opening hours, and offered services. Use `list_news` / `get_news` for embassy announcements and press updates. Use `list_events` / `get_event` for upcoming embassy events. All data is public and read-only.",
  tools: [embassyInfoTool, listNewsTool, getNewsTool, listEventsTool, getEventTool],
});
