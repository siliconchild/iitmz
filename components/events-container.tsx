"use client";
import styles from "./events-container.module.scss"
import EventCard from "@/components/event-card";
import { EventsType } from "@/data/events";
import { Tabs, TabButton, TabPanel } from "./tabs";

function filterEventsByDate(events: EventsType) {
  const currentDate = new Date();
  const upcomingEvents: EventsType = [];
  const pastEvents: EventsType = [];

  events.forEach((event) => {
    const eventDate = new Date(`${event.date.monthYear} ${event.date.day}`);
    if (eventDate >= currentDate) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });

  return { upcomingEvents, pastEvents };
}

export default function EventsContainer({list}: {list: EventsType}){
    const {upcomingEvents, pastEvents} = filterEventsByDate(list);
    console.log(upcomingEvents)
    return (
      <div className={styles.section}>
        <Tabs>
          <div className={styles.tabs}>
            <TabButton className={styles.tab_button_active} index={0}>
              Upcoming
            </TabButton>
            <TabButton className={styles.tab_button_active} index={1}>
              Past
            </TabButton>
          </div>

          <div>
            <TabPanel index={0}>
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <EventCard key={event.link} {...event} type="UPCOMING" />
                ))
              ) : (
                <div className={styles.noItem}>
                  <p>No Upcoming Events</p>
                </div>
              )}
            </TabPanel>

            <TabPanel index={1}>
              {pastEvents &&
                pastEvents.map((event) => (
                  <EventCard key={event.link} {...event} type="PAST" />
                ))}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
}