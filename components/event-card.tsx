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
  startDate: string;
  endDate?: string;
  regLink: string;
  name: string;
  slug?: string;
  time: string;
  location: string;
  desc: string;
  links?: { title: string; link: string }[];
  type: "PAST" | "UPCOMING";
}

export default function EventCard({img, startDate, endDate, regLink,name, slug, time, location, desc, links, type}: EventCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <Image src={img} alt="Event Poster" width={400} height={400} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.date}>
            <div>
              <h3>{startDate}</h3>
            </div>
            {endDate && (
              <>
                <span>&#8212;</span>
                <div>
                  <h3>{endDate}</h3>
                </div>
              </>
            )}
          </div>
          <div className={styles.cta}>
            {type === "UPCOMING" && (
              <Link target="_blank" href={regLink}>
                <Button kind="PRIMARY">Register Now</Button>
              </Link>
            )}
          </div>
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
          <div className={styles.links}>
            {links &&
              links.map((linkItem) => (
                <Link key={linkItem.title} href={linkItem.link}>
                  <Button kind="SECONDARY">{linkItem.title}</Button>
                </Link>
              ))}
            {slug && (
              <Link href={`/events/${slug}`}>
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
