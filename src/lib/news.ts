export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content?: string;
  image?: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "official-website-launch-2026",
    date: "22 July 2026",
    category: "Announcement",
    title: "Launch of the New Official Website",
    excerpt:
      "The Embassy of the Republic of Mozambique in the Federal Republic of Germany is pleased to announce the launch of its new official website.",
    content:
      "The Embassy of the Republic of Mozambique in the Federal Republic of Germany is pleased to announce the launch of its new official website.\n\nThe new platform offers improved navigation, updated information regarding consular services, visa procedures, trade and investment, tourism, and embassy contact information.\n\nThis modernized website has been designed to improve accessibility, provide multilingual content, and simplify communication between the Embassy and citizens, businesses and visitors.",
  },
];

export function getNewsById(id: string) {
  return newsItems.find((n) => n.id === id) ?? null;
}
