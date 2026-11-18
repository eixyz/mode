import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { getPosition, savePosition, setCameFrom } from "@/lib/scrollMemory";

// Scroll behaviour for the whole site:
// - Opening a page from a link starts at the top.
// - Browser Back/Forward returns to where the visitor was on that page
//   (e.g. halfway down the news list), not the top or the footer.
// - A link may ask for a specific spot with state { scrollTo: "element-id" }
//   (used by the news pagination), and /page#anchor links scroll to the anchor.
const RESTORE_TIMEOUT_MS = 2000;

export const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const currentKey = useRef(location.key);
  const previousPath = useRef<string | null>(null);

  // The site handles restoring itself; the browser's own attempt fires too early
  // (before the page content has loaded) and lands in the wrong place.
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    // Record the position continuously, and again right before leaving the page
    // (a click or the browser's Back button), in case the last scroll event has
    // not been delivered yet.
    const save = () => savePosition(currentKey.current, window.scrollY);
    window.addEventListener("scroll", save, { passive: true });
    document.addEventListener("click", save, true);
    window.addEventListener("popstate", save, true);
    return () => {
      window.removeEventListener("scroll", save);
      document.removeEventListener("click", save, true);
      window.removeEventListener("popstate", save, true);
    };
  }, []);

  useLayoutEffect(() => {
    const path = location.pathname + location.search;
    currentKey.current = location.key;
    if (navigationType === "PUSH" && previousPath.current) setCameFrom(location.key, previousPath.current);
    previousPath.current = path;

    const targetId = (location.state as { scrollTo?: string } | null)?.scrollTo ?? (location.hash ? decodeURIComponent(location.hash.slice(1)) : "");
    const saved = navigationType === "POP" ? getPosition(location.key) : undefined;

    // Pages load on demand, so the content may not be there yet: keep trying for
    // a moment, and stop as soon as the visitor scrolls themselves.
    let frame = 0;
    let cancelled = false;
    const stop = () => { cancelled = true; };
    const started = performance.now();
    const attempt = () => {
      if (cancelled) return;
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) { element.scrollIntoView({ block: "start" }); return; }
      } else if (saved !== undefined) {
        window.scrollTo(0, saved);
        if (Math.abs(window.scrollY - saved) <= 2) return;
      } else {
        window.scrollTo(0, 0);
        return;
      }
      if (performance.now() - started < RESTORE_TIMEOUT_MS) frame = requestAnimationFrame(attempt);
    };
    attempt();

    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, [location, navigationType]);

  return null;
};
