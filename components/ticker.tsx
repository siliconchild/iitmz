"use client";
import styles from "./ticker.module.scss";
import announcements from "@/data/announcements";
import Marquee from "react-fast-marquee";
import stringReplacer from "./string-replacer";

export default function Ticker() {
  if (announcements.length === 0) return null;
    return (
      <div className={styles.section}>
        <div className={styles.head}>Announcements</div>
        <div className={styles.body}>
          <Marquee>
            {announcements.map((announcement) => (
              <p key={announcement.title}>{stringReplacer(announcement.title)}</p>
            ))}
          </Marquee>
        </div>
      </div>
    );
  }

