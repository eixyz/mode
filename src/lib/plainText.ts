/**
 * Card previews (excerpt, summary) are plain text: remove markdown symbols so
 * "**bold**" shows as "bold" instead of with asterisks. Full articles render
 * markdown (src/components/Markdown.tsx).
 */
export const plainText = (value: string) =>
  value
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, "") // headings, quotes, list markers
    .replace(/(\*\*|__)(.+?)\1/g, "$2") // bold
    .replace(/(\*|_)(?=\S)(.+?)(?<=\S)\1/g, "$2") // italic
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
