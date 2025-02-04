import styles from "./hero.module.scss";
import Slider from "./slider";
import Img from "./image";
import Button from "./button";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <Slider autoplayInterval={8000}>
        <div className={styles.item}>
          <Img
            width={1200}
            height={800}
            alt="IITM Zanzibar Campus Image"
            src="/iitm_campus.jpg"
            loading="eager"
            sizes="(max-width: 768px) 900px, (min-width: 768px) 1200px"
          />

          <div className={styles.content}>
            {/* <h4>IITM Zanzibar Campus</h4> */}
            <h3>
              {" "}
              Application for the BS &amp; MTech full-time degree programs
            </h3>
            <h4>Starts from Feb 01, 2025</h4>
            {/* <h4>MTech Ocean Structures Applications are live</h4>
            <h5>Last Date: Sep 15, 2024 | 11:59 PM</h5> */}

            <Button>
              <Link target="_blank" href="https://admissions.iitmz.ac.in/">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
        <div className={styles.item}>
          <Img
            width={1200}
            height={800}
            alt="IITM Zanzibar Campus Image"
            src="/hero.jpg"
            loading="eager"
            sizes="(max-width: 768px) 900px, (min-width: 768px) 1200px"
          />

          <div className={styles.content}>
            {/* <h4>IITM Zanzibar Campus</h4> */}
            {/* <h3>Welcome To</h3> */}
            <h1>IIT Madras Zanzibar</h1>
            <h4>
              Application for the BS &amp; MTech full-time degree programs
            </h4>
            <h5>Starts from Feb 01, 2025</h5>
            <Button>
              <Link
                target="_blank"
                href="https://admissions.ge.iitm.ac.in/iitmz-mtechos"
              >
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </Slider>
    </section>
  );
}
