"use client";
import styles from "./ticker.module.scss";
import Marquee from "react-fast-marquee";
import stringReplacer from "./string-replacer";
import { Announcement, Announcements } from "@/data/announcements";
import Link from "next/link";

type TickerProps = {
  announcements: Announcements;
};

export default function Ticker({ announcements }: TickerProps) {
  if (announcements.length === 0) return null;
  const currentDate = new Date();
  const activeAnnouncements = announcements.filter(
    (announcement) => new Date(announcement.activeTill) >= currentDate,
  );

  const renderAnnouncementContent = (announcement: Announcement) => {
    const content = typeof announcement.content === "string" ? stringReplacer(announcement.content) : "";

    return (
      <p key={announcement.content}>
        <span>{content}</span>
        {announcement.linkUrl && announcement.linkText && (
          <Link href={announcement.linkUrl}>{announcement.linkText}</Link>
        )}
      </p>
    );
  };

  return (
    <div className={styles.section}>
      <div className={styles.head}>Announcements</div>
      <div className={styles.body}>
        {activeAnnouncements && (
          <Marquee pauseOnHover>{activeAnnouncements.map(renderAnnouncementContent)}</Marquee>
        )}
      </div>
    </div>
  );
}
