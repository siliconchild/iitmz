"use client";
import { Accordion, AccordionItem } from "@/components/accordion";
import styles from "./event-schedule.module.scss";
import { FaRegClock, FaChalkboard } from "react-icons/fa6";

type ScheduleItem = {
  day: string;
  time: string;
  track: string;
  subtracks: string[];
};

type EventScheduleProps = {
  schedule: ScheduleItem[];
};

export default function EventSchedule({ schedule }: EventScheduleProps) {

  const scheduleByDay = schedule.reduce<Record<string, ScheduleItem[]>>(
    (acc, curr) => {
      if (!acc[curr.day]) {
        acc[curr.day] = [];
      }
      acc[curr.day].push(curr);
      return acc;
    },
    {}
  );

  return (
    <Accordion title="Schedule">
      {Object.entries(scheduleByDay).map(([day, items], index) => (
        <AccordionItem key={`day-${day}`} initialEntered={index === 0}>
            <div>
              <h5>Day {day}</h5>
            </div>
            <div>
              {items.map((item, idx) => (
                <div key={idx} className={styles.scheduleItem}>
                  <h3 className={styles.time}>
                    <FaRegClock />{item.time}
                  </h3>
                  <h4 className={styles.track}>
                    <FaChalkboard />
                    {item.track}
                    </h4>
                  {item.subtracks.length > 0 && (
                    <ul className={styles.subtracks}>
                      {item.subtracks.map((subtrack, subIdx) => (
                        <li key={subIdx}>{subtrack}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
