/** Today's date in the visitor's time zone, YYYY-MM-DD (computed in the browser, not at build time). */
export const todayIso = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};

/** An event stays "upcoming" until the end of its day. */
export const isUpcoming = (event: { date: string }, today = todayIso()) => event.date >= today;

/** ISO date `days` after (or, if negative, before) the given ISO date. */
export const addDays = (iso: string, days: number) => {
  const [year, month, day] = iso.slice(0, 10).split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
};
