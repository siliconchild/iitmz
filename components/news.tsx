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
            link="https://www.iitmz.ac.in/admission"
            image={{
              url: "/1.jpeg",
              alt: "Logo of IIT Madras",
            }}
            title="The BS & MTech academic courses have started from Oct 7, 2024"
            desc="The classes for the AY 2024-25 for the BS & MTech degree programs at IITM Zanzibar have started on Oct 07, 2024"
          />
          <NewsCard
            link="https://www.iitmz.ac.in/admission"
            image={{
              url: "/OS.jpg",
              alt: "Image of Preeti Aghalayam",
            }}
            title="MTech Ocean Structures"
            desc="Classes has started for the new MTech program in Ocean Structures from AY 2024-25"
          />
          <NewsCard
            link="https://www.iitmz.ac.in/admission"
            image={{
              url: "/bs-news.JPG",
              alt: "Image of IITM Zanzibar campus building",
            }}
            title="Admissions for the AY 2025-26 will open in Feb 2025"
            desc="The next application cycle for the BS & MTech programs will start from Feb 01, 2025"
          />
        </div>
      </div>
    </section>
  );
}
