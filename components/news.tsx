import styles from "./news.module.scss";
import Button from "./button";
import Link from "next/link";
import NewsCard from "./news-card";

export default function News() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.header}>
            <p>News</p>
            <h3>
              Discover The Latest <span>From IITM</span>
            </h3>
            <Link href="https://www.iitm.ac.in/happenings/IITM-news">
              <Button>View All</Button>
            </Link>
          </div>
          <NewsCard
            link="#"
            image={{
              url: "/bs-news.JPG",
              alt: "Logo of IIT Madras",
            }}
            title="The results of BS in Data Science & AI are out"
            desc="The IIT Madras BS in Data Science & AI final results were informed to the shortlisted candidates. Candidates are requested to check their registered emails for the updates from the admission team"
          />
          <NewsCard
            link="https://www.iitmz.ac.in/schools/engineering-and-science/mtech-ocean-structures"
            image={{
              url: "/ocean-structures.jpg",
              alt: "Image of Preeti Aghalayam",
            }}
            title="MTech Ocean Structures - IIT Madras Zanzibar Campus has announced a new Master's program for the AY 2024-25"
            desc="IIT Madras Zanzibar Campus invites applications to its new MTech Program in Ocean Structures from candidates of all Nationalities. Applications will close by June 20, 2024 "
          />
          <NewsCard
            link="https://www.iitmz.ac.in/events"
            image={{
              url: "/stemv2.jpeg",
              alt: "Image of IITM Zanzibar campus building",
            }}
            title="'Discover STEM’ - Genwise Residential Program for High Schoolers"
            desc="The 'Discover STEM' Program at IIT Madras Zanzibar, conducted by GenWise, is a residential camp for students completing grade 10, 11 or 12. Scheduled from July 28 to August 9, 2024, it offers modules on Engineering Design and Astrophysics and expert talks in various STEM areas."
          />
        </div>
      </div>
    </section>
  );
}
