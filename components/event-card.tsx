import styles from "./event-card.module.scss";
import { CiClock1 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import Img from "./image";
import Link from "next/link";
import Button from "./button";
import Image from "next/image";
import parse from "html-react-parser";

type EventCardProps = {
  img: string;
  date: {
    day: string,
    monthYear: string
  };
  link: string;
  name: string;
  time: string;
  location: string;
  desc: string;
  type: "PAST" | "UPCOMING";
}

export default function EventCard({img,date,link,name,time,location,desc, type}: EventCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <Image src={img} alt="Event Poster" width={400} height={400} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.date}>
            <h4>{date.day}</h4>
            <h5>{date.monthYear}</h5>
          </div>
          {type === "UPCOMING" && (
            <Link target="_blank" href={link}>
              <Button kind="SECONDARY">Register Now</Button>
            </Link>
          )}
        </div>
        <div className={styles.content}>
          <h3>{name}</h3>
          <div>
            <span>
              <CiClock1 />
              {time}
            </span>
            <span>
              <SlLocationPin />
              {location}
            </span>
          </div>
          <p>{parse(desc)}</p>
        </div>
      </div>
    </div>
  );
}
