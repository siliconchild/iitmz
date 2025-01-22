import styles from "./page.module.scss";
import eventsList from "@/data/events";
import Img from "@/components/image";
import Button from "@/components/button";
import Link from "next/link";
import parse from "html-react-parser";
import EventSchedule from "@/components/event-schedule";
import { CiClock1 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

export async function generateMetadata({ params }: any) {
  const eventSlug = params.slug || null;
  const event = eventsList.find((event) => event.slug === eventSlug);
  if (event) {
    return {
      title: `${event.name}`,
      description: event.desc,
      alternates: {
        canonical: `events/${eventSlug}`,
      },
    };
  } else {
    return {};
  }
}

const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  return eventsList.map((event) => ({
    slug: event.slug,
  }));
}


export default function EventDetail({ params }: any) {
  const eventSlug = params.slug || null;
  const event = eventsList.find((event) => event.slug === eventSlug);
  if (!event) return null;
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.grid}>
            <div className={styles.poster}>
              <Img
                src={event.img}
                alt="Event Poster"
                width={800}
                height={800}
              />
            </div>
            <div className={styles.eventBody}>
              <div className={styles.header}>
                <div className={styles.date}>
                  <div>
                    <h3>{event.startDate}</h3>
                  </div>
                  {event.endDate && (
                    <>
                      <span>&#8212;</span>
                      <div>
                        <h3>{event.endDate}</h3>
                      </div>
                    </>
                  )}
                </div>
                {event && (event.endDate || event.startDate) ? (
                  <div className={styles.cta}>
                    {new Date(event?.endDate || event?.startDate) >
                      new Date() && (
                      <Link target="_blank" href={event.regLink}>
                        <Button kind="PRIMARY">Register Now</Button>
                      </Link>
                    )}
                  </div>
                ) : null}
              </div>
              <div className={styles.content}>
                <h1>{event.name}</h1>
                <div>
                  <span>
                    <CiClock1 />
                    {event.time}
                  </span>
                  <span>
                    <SlLocationPin />
                    {event.location}
                  </span>
                </div>
                <p>{parse(event.desc)}</p>
                <div className={styles.links}>
                  {event.links &&
                    event.links.map((linkItem) => (
                      <Link key={linkItem.title} href={linkItem.link}>
                        <Button kind="SECONDARY">{linkItem.title}</Button>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            {event && event.schedule && (
              <EventSchedule schedule={event.schedule} />
            )}
          </div>
          <div className={styles.speakers}>
            <h4>Speakers</h4>
            <div>
              {event.speakers &&
                event.speakers.map((speaker: any, index: number) => (
                  <div key={index} className={styles.speaker}>
                    {speaker.img && (
                      <Img
                        src={speaker.img}
                        alt={speaker.name}
                        width={200}
                        height={200}
                      />
                    )}
                    <h3>{speaker.name}</h3>
                    <p>{speaker.position}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.otherInfoSection}>
            {event.otherInfo &&
              event.otherInfo.map((info: any, index: number) => (
                <div className={styles.otherInfoItem} key={index}>
                  <h4>{info.title}</h4>
                  <p>{info.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
