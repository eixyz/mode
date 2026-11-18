import ReactMarkdown, { type Components } from "react-markdown";

// Renders the body text that staff write in /admin (Decap "markdown" widget):
// bold, italic, headings, lists, links, quotes and images. Raw HTML is not
// rendered and unsafe link targets (javascript: etc.) are removed by
// react-markdown, so a CMS entry cannot inject scripts into the page.
// Text is left-aligned on purpose: justified text creates uneven gaps on
// narrow screens and is harder to read (WCAG 1.4.8).
const components: Components = {
  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  h1: ({ children }) => <h2 className="font-serif text-2xl font-semibold mt-8 mb-3">{children}</h2>,
  h2: ({ children }) => <h2 className="font-serif text-2xl font-semibold mt-8 mb-3">{children}</h2>,
  h3: ({ children }) => <h3 className="font-serif text-xl font-semibold mt-6 mb-2">{children}</h3>,
  h4: ({ children }) => <h4 className="font-semibold mt-4 mb-2">{children}</h4>,
  ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground mb-4">{children}</blockquote>
  ),
  a: ({ href, children }) => {
    const external = /^https?:\/\//.test(href ?? "");
    return (
      <a
        href={href}
        className="text-primary underline underline-offset-2 hover:no-underline"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  img: ({ src, alt }) => (
    <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" decoding="async" className="rounded-lg my-6 max-w-full h-auto" />
  ),
  hr: () => <hr className="my-8 border-border" />,
  code: ({ children }) => <code className="rounded bg-muted px-1 py-0.5 text-sm">{children}</code>,
};

export const Markdown = ({ children }: { children: string }) => (
  <div className="text-foreground text-base">
    <ReactMarkdown components={components}>{children}</ReactMarkdown>
  </div>
);
