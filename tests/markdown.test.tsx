import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Markdown } from "../src/components/Markdown";
import { plainText } from "../src/lib/plainText";

describe("news and event text formatting", () => {
  test("bold, italic, lists and links from /admin are rendered", () => {
    const html = renderToStaticMarkup(
      <Markdown>{"New email: **info@mozambique-embassy.de** is *now* live.\n\n- one\n- two\n\n[Contact](/contact)"}</Markdown>,
    );
    expect(html).toContain("<strong");
    expect(html).toContain(">info@mozambique-embassy.de</strong>");
    expect(html).toContain("<em");
    expect(html).toContain("<li");
    expect(html).toContain('href="/contact"');
  });

  test("HTML and script links in an entry are not executed", () => {
    const html = renderToStaticMarkup(<Markdown>{'<script>alert(1)</script>\n\n[x](javascript:alert(1))'}</Markdown>);
    expect(html).not.toContain("<script");
    expect(html).not.toContain("javascript:");
  });

  test("card previews show plain text without markdown symbols", () => {
    expect(plainText("We have a **new** email, see [here](/x).\n\nSecond   line")).toBe("We have a new email, see here. Second line");
  });
});
