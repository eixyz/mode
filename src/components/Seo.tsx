import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://www.mozambique-embassy.de";

const NOINDEX_PREFIXES = ["/news/admin", "/events/admin", "/admin"];

const setMeta = (selector: string, attr: "content" | "href", value: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

/**
 * Keeps the canonical URL, og:url and robots directive in sync with the
 * current route. Without this every route reported the homepage canonical,
 * which Google flagged as "Page with redirect" / duplicate content.
 */
export const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = `${SITE_URL}${path}`;

    setMeta('link[rel="canonical"]', "href", url, () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });

    setMeta('meta[property="og:url"]', "content", url, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    });

    const noindex = NOINDEX_PREFIXES.some((prefix) => path.startsWith(prefix));
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow", () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      return meta;
    });
  }, [pathname]);

  return null;
};
