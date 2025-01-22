"use client";
import styles from "./events-container.module.scss"
import EventCard from "@/components/event-card";
import { EventsType } from "@/data/events";
import { Tabs, TabButton, TabPanel } from "./tabs";
import {filterEventsByDate} from "@/utils/filterEventsByDate";

export default function EventsContainer({list}: {list: EventsType}){
    const {upcomingEvents, pastEvents} = filterEventsByDate(list);
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
                  <EventCard key={event.regLink} {...event} type="UPCOMING" />
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
                  <EventCard key={event.regLink} {...event} type="PAST" />
                ))}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    );
}