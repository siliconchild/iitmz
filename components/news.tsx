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
            link="https://www.indiatoday.in/education-today/news/story/iit-madras-set-to-create-history-by-establishing-an-international-campus-in-zanzibar-tanzania-2404437-2023-07-10"
            image={{
              url: "/slot1.webp",
              alt: "Logo of IIT Madras",
            }}
            title=" IIT Madras set to create history by establishing an international campus in Zanzibar-Tanzania"
            desc="The Indian Institute of Technology Madras (IIT Madras), the top-ranked Educational Institute in the country, has become the first IIT in the country to launch an international campus, which is coming up in Zanzibar-Tanzania."
          />
          <NewsCard
            link="https://www.cnbctv18.com/education/meet-preeti-aghalayam-the-first-woman-director-of-an-iit-zanzibar-campus-17195151.htm"
            image={{
              url: "/slot2.webp",
              alt: "Image of Preeti Aghalayam",
            }}
            title="Meet Preeti Aghalayam — the first ever woman director of an IIT"
            desc="Preeti Aghalayam, an alumna of IIT Madras, has been appointed as the director-in-charge of the upcoming Zanzibar campus of IIT Madras "
          />
          <NewsCard
            link="https://indianexpress.com/article/opinion/columns/director-in-charge-iit-madras-zanzibar-writes-taking-the-indian-campus-to-the-world-8892772/"
            image={{
              url: "/slot3.webp",
              alt: "Image of IITM Zanzibar campus building",
            }}
            title="Head of IIT Madras Zanzibar writes: Taking the Indian campus to the world "
            desc="Scientific research today has to be interdisciplinary, multifaceted and should bring together a diversity of views."
          />
        </div>
      </div>
    </section>
  );
}
