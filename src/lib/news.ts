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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: "visa-requirements-update",
    date: "November 20, 2024",
    category: "Visa",
    title: "Updated Visa Requirements for 2025",
    excerpt:
      "Important changes to visa application requirements will take effect starting January 2025. Please review the new documentation needed.",
    content:
      "Important changes to visa application requirements will take effect starting January 2025. All applicants must now provide biometric data and updated financial documentation. Please visit our visa services page for complete details.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
  },
  {
    id: "cultural-week-2024",
    date: "November 10, 2024",
    category: "Culture",
    title: "Mozambican Cultural Week in Berlin",
    excerpt:
      "Experience the vibrant culture of Mozambique through music, dance, art, and culinary delights during our week-long celebration.",
    content:
      "Experience the vibrant culture of Mozambique through music, dance, art, and culinary delights during our week-long celebration. The event will feature traditional Marrabenta music performances, art exhibitions, and authentic Mozambican cuisine. All are welcome to attend.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
  },
];

export function getNewsById(id: string) {
  return newsItems.find((n) => n.id === id) ?? null;
}
