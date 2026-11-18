// Categories are stored in English in the CMS files (shared across languages)
// and translated for display. Unknown categories are shown as written.
const categoryKeys: Record<string, string> = {
  announcement: "announcement",
  "press release": "pressRelease",
  consular: "consular",
  cultural: "cultural",
  trade: "trade",
  diplomatic: "diplomatic",
  public: "public",
  commemoration: "commemoration",
  event: "event",
};

export const categoryLabel = (t: (key: string) => string, category: string) => {
  const key = categoryKeys[category.trim().toLowerCase()];
  return key ? t(`categories.${key}`) : category;
};
