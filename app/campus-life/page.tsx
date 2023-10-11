import styles from "./page.module.scss";
import Img from "@/components/image";
import Link from "next/link";
import Maps from "@/components/map";

export const metadata = {
  title: "Discover Our Campus",
  description:
    "Experience an Enriching Campus Life at IIT Madras Zanzibar. Diverse Clubs, Sports, Cultural Events, And Excellent Facilities Await. Learn More.",
  alternates: {
    canonical: `campus-life`,
  },
};

export default function CampusLife() {
  return (
    <>
      <section className={styles.campus}>
        <div className="container">
          <div className={styles.content}>
            <h1>
              Discover <br /> Our Campus
            </h1>
            <p>
              At IITM Zanzibar, campus life is an integral part of the
              educational experience. Our stimulating environment encourages
              personal growth, community, and exploration. With diverse student
              clubs, sports facilities, cultural events, support services, and a
              serene atmosphere, students can thrive academically, socially, and
              personally.
            </p>
            <p>
              The IIT Madras Zanzibar campus will comprise four large classrooms
              and several smaller classrooms. Laboratory spaces will cater to
              the needs of the students, and include computers, physics and
              chemistry. Students will be accommodated on campus in hostel
              (dorm) rooms and have access to a dining hall, a multipurpose
              store, a smart seminar hall and an auditorium as well.
            </p>
          </div>
          <div className={styles.images}>
            <Link target="_blank" href="/layout-ground-floor.webp">
              <Img
                width={200}
                height={180}
                src="/layout-ground-floor.webp"
                alt=""
                loading="eager"
              />
            </Link>
            <Link target="_blank" href="/layout-gate.webp">
              <Img
                width={200}
                height={360}
                src="/layout-gate.webp"
                alt=""
                loading="eager"
              />
            </Link>
            <Link target="_blank" href="/layout-furniture.webp">
              <Img
                width={200}
                height={180}
                src="/layout-furniture.webp"
                alt=""
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.gallery}>
        <Img
          src="/campus1.png"
          width={400}
          height={300}
          alt="Image of IITM Zanzibar Campus"
        />
        <Img
          src="/campus1.jpg"
          width={400}
          height={300}
          alt="Image of IITM Zanzibar Campus"
        />
        <Img
          src="/campus2.png"
          width={400}
          height={300}
          alt="Image of IITM Zanzibar Campus"
        />
      </div>
      <div className="container">
        <div className={styles.map}>
          <h3>Campus Location</h3>
          <div className={styles.mapcontainer}>
            <Maps />
          </div>
        </div>
      </div>
    </>
  );
}
