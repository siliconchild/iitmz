import { EventsType } from "@/data/events";

export function filterEventsByDate(events: EventsType) {
  const currentDate = new Date();
  const upcomingEvents: EventsType = [];
  const pastEvents: EventsType = [];

  events.forEach((event) => {
    const eventDate = new Date(event.endDate || event.startDate);
    if (eventDate >= currentDate) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  upcomingEvents.sort(
    (a, b) =>
      new Date(a.endDate || a.startDate).getTime() -
      new Date(b.endDate || b.startDate).getTime()
  );
  pastEvents.sort(
    (a, b) =>
      new Date(b.endDate || b.startDate).getTime() -
      new Date(a.endDate || a.startDate).getTime()
  );

  return { upcomingEvents, pastEvents };
}
