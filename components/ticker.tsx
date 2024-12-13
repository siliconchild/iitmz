"use client";
import styles from "./ticker.module.scss";
import announcements from "@/data/announcements";
import Marquee from "react-fast-marquee";
import stringReplacer from "./string-replacer";
import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

interface Announcement {
  title: string;
}

interface SanitizedAnnouncement {
  title: string | JSX.Element | JSX.Element[];
}

export default function Ticker() {
  if (announcements.length === 0) return null;

  const sanitizedAnnouncements = announcements.map((announcement: Announcement) => ({
    title: parse(
      DOMPurify.sanitize(announcement.title, {
        ALLOWED_TAGS: ["a"],
        ALLOWED_ATTR: ["href", "target", "rel"],
        ADD_ATTR: ["target", "rel"],
      }),
    ),
  }));

  const renderAnnouncementContent = (announcement: SanitizedAnnouncement) => {
    const content =
      typeof announcement.title === "string" ? stringReplacer(announcement.title) : announcement.title;

    return <p key={typeof content === "string" ? content : Math.random().toString()}>{content}</p>;
  };

  return (
    <div className={styles.section}>
      <div className={styles.head}>Announcements</div>
      <div className={styles.body}>
        <Marquee pauseOnHover>{sanitizedAnnouncements.map(renderAnnouncementContent)}</Marquee>
      </div>
    </div>
  );
}
