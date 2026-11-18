/** Today's date in the visitor's time zone, YYYY-MM-DD (computed in the browser, not at build time). */
export const todayIso = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};

/** An event stays "upcoming" until the end of its day. */
export const isUpcoming = (event: { date: string }, today = todayIso()) => event.date >= today;
