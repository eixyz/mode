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
    id: "embassy-hours-2025",
    date: "January 3, 2025",
    category: "Announcement",
    title: "Embassy Opening Hours During Holiday Season",
    excerpt:
      "Please note the modified opening hours during the holiday period. The embassy will operate with reduced hours from December 23 to January 3.",
    content:
      "Please note the modified opening hours during the holiday period. The embassy will operate with reduced hours from December 23 to January 3. For emergencies please call the emergency line.",
    image: "https://images.unsplash.com/photo-1497366216548-37519c06fe5d?w=600&h=400&fit=crop",
  },
  {
    id: "trade-forum-2025",
    date: "December 15, 2024",
    category: "Trade",
    title: "Mozambique-Germany Trade Forum 2025",
    excerpt:
      "Join us for the annual trade forum highlighting investment opportunities in energy, agriculture, and tourism sectors.",
    content:
      "Join us for the annual trade forum highlighting investment opportunities in energy, agriculture, and tourism sectors. Registration details will be shared soon.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: "independence-celebration-2024",
    date: "December 1, 2024",
    category: "Culture",
    title: "Mozambican Independence Day Celebration",
    excerpt:
      "The Embassy cordially invites you to celebrate the 49th anniversary of Mozambican Independence on June 25th.",
    content:
      "The Embassy cordially invites you to celebrate the 49th anniversary of Mozambican Independence on June 25th. More information on the schedule will follow.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  },
];

export function getNewsById(id: string) {
  return newsItems.find((n) => n.id === id) ?? null;
}
