import styles from "./news.module.scss";
import Button from "./button";
import Link from "next/link";
import NewsCard from "./news-card";
import { News as NewsType } from "@/data/news";
import {news} from "@/data/news"; 

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
          {news.map((newsItem:NewsType) => (
            <NewsCard
              key={newsItem.img}
              link={newsItem.linkURL || "#"}
              image={newsItem.img}
              title={newsItem.title}
              desc={newsItem.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
