import styles from "./course-important-dates.module.scss";
import timelineData from "@/data/timeline";
import { FaCalendarAlt, FaCalendarTimes, FaPencilAlt, FaUserCheck } from "react-icons/fa";

const AdmissionTimeline = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>2025-26 Important Dates</h2>
          <div className={styles.timeline}>
            {timelineData.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.details}>
                  <span className={styles.date}>{item.date}</span>
                  <h3 className={styles.event}>{item.event}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionTimeline;
