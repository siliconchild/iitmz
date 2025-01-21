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
            link="https://admissions.iitmz.ac.in/"
            image={{
              url: "/news-admission1.jpg",
              alt: "Logo of IIT Madras",
            }}
            title="Admissions for the AY 2025-26 is live"
            desc="Applications for the BS & MTech full-time degree programs starts from Jan 10, 2025"
          />
          <NewsCard
            link="https://www.iitmz.ac.in/admission"
            image={{
              url: "/news-admission2.png",
              alt: "Image of Preeti Aghalayam",
            }}
            title="For more information on the admissions"
            desc="Degree Programs, Eligibility Criteria, Tuition Fee, Selection Process, Admission Brochure, Screening Test Question Papers & Application Link"
          />
          <NewsCard
            link="#"
            image={{
              url: "/bs-news.JPG",
              alt: "Image of IITM Zanzibar campus building",
            }}
            title="IITM Zanzibar Screening Test Information Brochure"
            desc="Information Brochure for Admission to Full-Time BS and MTech programs at Indian Institute of Technology Madras, Zanzibar Campus"
          />
        </div>
      </div>
    </section>
  );
}
