import type { NewsItem } from "./news";
import type { EmbassyEvent } from "./events";

// Lightweight browser-safe frontmatter parser (avoids gray-matter's Buffer dep).
function matter(raw: string): { data: Record<string, unknown>; content: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!m) return { data: {}, content: raw };
  const data: Record<string, unknown> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
    if (!kv) continue;
    let v = kv[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    let parsed: unknown = v;
    if (v === "true") parsed = true;
    else if (v === "false") parsed = false;
    else if (v !== "" && !isNaN(Number(v)) && /^-?\d+(\.\d+)?$/.test(v)) parsed = Number(v);
    data[kv[1]] = parsed;
  }
  return { data, content: m[2] };
}

// Vite: import raw markdown at build time. Decap CMS writes to these folders
// via GitHub; the next build picks them up.
const newsFiles = import.meta.glob("/content/news/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const eventFiles = import.meta.glob("/content/events/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const documentFiles = import.meta.glob("/content/documents/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const slugFromPath = (path: string) =>
  path.split("/").pop()!.replace(/\.md$/, "");

const formatDisplayDate = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
};

export const loadNews = (): NewsItem[] => {
  const items: NewsItem[] = Object.entries(newsFiles).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const body = content.trim();
    return {
      id: (data.id as string) || slugFromPath(path),
      date: (data.displayDate as string) || formatDisplayDate(String(data.date ?? "")),
      category: (data.category as string) || "Announcement",
      title: (data.title as string) || "Untitled",
      excerpt: (data.excerpt as string) || body.split("\n\n")[0] || "",
      content: body || undefined,
      image: (data.image as string) || undefined,
      // Sortable ISO date kept as a symbol on the object (non-enumerable-ish)
      _sort: String(data.date ?? ""),
    } as NewsItem & { _sort: string };
  });

  items.sort((a, b) => {
    const ax = (a as NewsItem & { _sort?: string })._sort ?? "";
    const bx = (b as NewsItem & { _sort?: string })._sort ?? "";
    return bx.localeCompare(ax);
  });

  return items;
};

export const loadEvents = (): EmbassyEvent[] => {
  const items: EmbassyEvent[] = Object.entries(eventFiles).map(([path, raw]) => {
    const { data, content } = matter(raw);
    const body = content.trim();
    const isoDate = String(data.date ?? "").slice(0, 10);
    return {
      id: (data.id as string) || slugFromPath(path),
      date: isoDate,
      time: (data.time as string) || "",
      category: (data.category as string) || "Public",
      title: (data.title as string) || "Untitled",
      summary: (data.summary as string) || body.split("\n\n")[0] || "",
      content: body || undefined,
      venue: (data.venue as string) || "",
      image: (data.image as string) || undefined,
      ctaLabel: (data.ctaLabel as string) || "Request information",
      featured: Boolean(data.featured),
    };
  });

  return items;
};

export type DocumentItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  file: string;
  description?: string;
};

export const loadDocuments = (): DocumentItem[] => {
  const items: DocumentItem[] = Object.entries(documentFiles).map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      id: slugFromPath(path),
      title: (data.title as string) || "Untitled",
      date: formatDisplayDate(String(data.date ?? "")),
      category: (data.category as string) || "Other",
      file: (data.file as string) || "",
      description: (data.description as string) || content.trim() || undefined,
    };
  });
  items.sort((a, b) => b.date.localeCompare(a.date));
  return items;
};
