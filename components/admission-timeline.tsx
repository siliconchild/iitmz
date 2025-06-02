import styles from "./admission-timeline.module.scss";
import { FaCalendarAlt, FaCalendarTimes, FaPencilAlt, FaUserCheck } from "react-icons/fa";

interface TimelineProps {
  variant?: "default" | "simple";
}

const AdmissionTimeline: React.FC<TimelineProps> = ({ variant = "default" }) => {
  const timelineData = [
    {
      date: "Jan 10, 2025",
      event: "Applications Open",
      icon: <FaCalendarAlt />,
      status: "upcoming",
    },
      {
        date: (
          <>
            BS: June 10, 2025
            <br /> 
            M.Tech: June 15, 2025
          </>
        ),
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
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* <h3>2025-26 Admission Timeline</h3> */}
          <div className={styles.timeline}>
            {timelineData.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.details}>
                <div className={styles.date}>{item.date}</div>
                  <h4 className={styles.event}>{item.event}</h4>
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
