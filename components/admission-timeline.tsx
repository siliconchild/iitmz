import styles from "./admission-timeline.module.scss";
import { FaCalendarAlt, FaCalendarTimes, FaPencilAlt, FaUserCheck } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

const AdmissionTimeline = () => {
  const timelineData = [
    {
      date: "Jan 10, 2025",
      event: "Applications Open",
      icon: <FaCalendarAlt />,
      status: "upcoming",
    },
    {
      date: "May 31, 2025",
      event: "Applications Close",
      icon: <FaCalendarTimes />,
      status: "upcoming",
    },
    {
      date: "May 04, 2025",
      event: "Screening Test Option 1",
      icon: <FaPencilAlt />,
      status: "upcoming",
    },
    {
      date: "July 13, 2025",
      event: "Screening Test Option 2",
      icon: <FaPencilAlt />,
      status: "upcoming",
    },
    {
      date: "May & July 2025",
      event: "Dates of Interview",
      icon: <FaUserCheck />,
      status: "upcoming",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>2025-26 Admission Timeline</h2>
          <div className={styles.timeline}>
            {timelineData.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.details}>
                  <span className={styles.date}>{item.date}</span>
                  <h3 className={styles.event}>{item.event}</h3>
                  {/* <span className={`${styles.status} ${styles[item.status]}`}>{item.status}</span> */}
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
