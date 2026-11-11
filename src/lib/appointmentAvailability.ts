import { closureDates } from "./siteSettings";

export type AppointmentService = "passport" | "visa" | "ids" | "advisory" | "trade";

type AvailabilityRule = {
  weekdays: number[];
  slots: string[];
};

// Closure days are edited by staff in Decap (Embassy Settings → Closure days).
const blackoutDates = closureDates;

const availabilityByService: Record<AppointmentService, AvailabilityRule> = {
  passport: {
    weekdays: [2, 4],
    slots: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00"],
  },
  visa: {
    weekdays: [1, 3, 5],
    slots: ["09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30"],
  },
  ids: {
    weekdays: [2, 4],
    slots: ["09:00", "09:30", "10:00", "10:30", "11:00", "13:30", "14:00", "14:30"],
  },
  advisory: {
    weekdays: [1, 3],
    slots: ["10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30"],
  },
  trade: {
    weekdays: [4],
    slots: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
  },
};

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const isAppointmentDateAvailable = (service: AppointmentService, date: Date) => {
  const rule = availabilityByService[service];
  const isoDate = formatDate(date);
  const today = formatDate(new Date());

  if (isoDate < today) {
    return false;
  }

  if (blackoutDates.includes(isoDate)) {
    return false;
  }

  return rule.weekdays.includes(date.getDay());
};

export const getAvailableDatesForMonth = (service: AppointmentService, currentMonth: Date) => {
  const dates: string[] = [];
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

    if (isAppointmentDateAvailable(service, date)) {
      dates.push(formatDate(date));
    }
  }

  return dates;
};

export const getTimeSlotsForServiceDate = (service: AppointmentService, date: Date) => {
  if (!isAppointmentDateAvailable(service, date)) {
    return [];
  }

  return availabilityByService[service].slots;
};

export const getServiceWeekdaySummary = (service: AppointmentService) => {
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return availabilityByService[service].weekdays.map((weekday) => labels[weekday]).join(", ");
};