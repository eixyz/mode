export type EmbassyEvent = {
  id: string;
  date: string;
  time: string;
  category: string;
  title: string;
  summary: string;
  content?: string;
  venue: string;
  image?: string;
  ctaLabel: string;
  featured?: boolean;
};

export const embassyEvents: EmbassyEvent[] = [
  {
    id: "diaspora-consultation-2026",
    date: "2026-05-28",
    time: "17:30 - 19:00",
    category: "Community",
    title: "Diaspora Consultation Evening",
    summary:
      "An open discussion with embassy representatives on consular priorities, documentation updates, and community support services in Germany.",
    content:
      "An open discussion with embassy representatives on consular priorities, documentation updates, and community support services in Germany. The session is intended for members of the Mozambican diaspora and institutional partners seeking direct updates from the embassy.",
    venue: "Embassy of Mozambique, Berlin",
    ctaLabel: "Request details",
    featured: true,
  },
  {
    id: "trade-briefing-2026",
    date: "2026-06-12",
    time: "10:00 - 12:30",
    category: "Trade",
    title: "Mozambique-Germany Trade Briefing",
    summary:
      "A focused briefing for companies and institutions interested in partnerships across energy, logistics, agriculture, and tourism.",
    content:
      "A focused briefing for companies and institutions interested in partnerships across energy, logistics, agriculture, and tourism. Embassy representatives will present market entry considerations, upcoming bilateral opportunities, and key institutional contacts.",
    venue: "Business Forum Hall, Berlin",
    ctaLabel: "Reserve a seat",
  },
  {
    id: "independence-reception-2026",
    date: "2026-06-25",
    time: "18:00 - 21:00",
    category: "Culture",
    title: "Independence Day Reception",
    summary:
      "A formal cultural evening marking Mozambican Independence Day with music, remarks, and invited guests from the diplomatic and business community.",
    content:
      "A formal cultural evening marking Mozambican Independence Day with music, remarks, and invited guests from the diplomatic and business community. Attendance is subject to confirmation and capacity.",
    venue: "Embassy Residence, Berlin",
    ctaLabel: "RSVP interest",
  },
  {
    id: "student-mobility-session-2026",
    date: "2026-07-03",
    time: "15:00 - 16:30",
    category: "Education",
    title: "Student Mobility Information Session",
    summary:
      "Guidance for students and families on scholarships, document authentication, and study pathways between Mozambique and Germany.",
    content:
      "Guidance for students and families on scholarships, document authentication, and study pathways between Mozambique and Germany. The session includes a moderated Q&A and practical next steps for document preparation.",
    venue: "Online session",
    ctaLabel: "Ask for access",
  },
];

export const sortEmbassyEvents = (events: EmbassyEvent[]) =>
  [...events].sort(
    (left, right) => new Date(left.date).getTime() - new Date(right.date).getTime(),
  );

export const getUpcomingEvents = () => sortEmbassyEvents(embassyEvents);

export const getEventContactSubject = (event: EmbassyEvent) => `Information request: ${event.title}`;

export const getEventContactLink = (event: EmbassyEvent) =>
  `/contact?subject=${encodeURIComponent(getEventContactSubject(event))}`;