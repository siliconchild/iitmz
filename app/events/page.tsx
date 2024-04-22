import styles from "./page.module.scss";
import EventsContainer from "@/components/events-container";
import eventsList from "@/data/events";

export default function EventsPage (){
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <h1>Events</h1>
          </div>
          <div className={styles.body}>
              <EventsContainer list={eventsList} />
          </div>
        </div>
      </div>
    );
}