import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCameFrom } from "@/lib/scrollMemory";

// "Back to news" / "Back to events": if the visitor came from that list, behave
// like the browser's Back button (same page of results, same scroll position).
// Otherwise (arrived from the homepage, a shared link, ...) open the list at the top.
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export const BackLink = forwardRef<HTMLAnchorElement, Props>(({ to, onClick, children, ...rest }, ref) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    // Keep Ctrl/Cmd-click and middle-click working as "open in new tab".
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    // Checked at click time: the origin is recorded just after the page renders.
    const from = getCameFrom(location.key);
    if (from === undefined || (from !== to && !from.startsWith(`${to}?`))) return;
    event.preventDefault();
    navigate(-1);
  };

  return (
    <Link ref={ref} to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
});
BackLink.displayName = "BackLink";
