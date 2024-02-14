import styles from "./page.module.scss";
import EventCard from "@/components/event-card";
import eventsList from "@/data/events";

export default function EventsPage (){
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <h1>Events</h1>
          </div>
          <div className={styles.body}>
            {eventsList.map((event) => (
              <EventCard {...event} />
            ))}
          </div>
        </div>
      </div>
    );
}