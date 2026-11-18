// Remembers, per browser-history entry, where the visitor had scrolled to and
// which page they came from. Used by ScrollManager (restore on Back) and
// BackLink ("Back to news" returns to the same place in the list).
const positions = new Map<string, number>();
const cameFrom = new Map<string, string>();

export const savePosition = (key: string, y: number) => positions.set(key, y);
export const getPosition = (key: string) => positions.get(key);
export const setCameFrom = (key: string, path: string) => cameFrom.set(key, path);
export const getCameFrom = (key: string) => cameFrom.get(key);
