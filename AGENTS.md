# Project rules
- Preserve the React, TypeScript, Vite and Tailwind static frontend and self-contained Vercel email handlers; deployed hosting depends on this structure.
- Use Decap GitHub editorial workflow as the only staff publishing interface; client-side access codes are not authentication.
- Store editable passport and visa copy in dedicated locale JSON files imported at build time, with existing translations as fallback; this prevents CMS saves from touching unrelated website strings.
- Keep email diagnostics separate from visitor submissions and accept no request-controlled diagnostic recipients; tests must not reach production recipients.
- Do not restore the removed MCP dependency or endpoint until a compatible patched release is verified; the audited dependency chain has unresolved advisories.
- Header dropdown links must be the menu item itself (`asChild`), and mobile menu targets must cover their row or a 44px control; nested links leave non-navigating clickable padding.
