import styles from "./hero.module.scss";
import Slider from "./slider";
import Img from "./image";
import Button from "./button";
import Link from "next/link";
import ApplyDropdown from "./apply-dropdown";

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
            <h3>Welcome To</h3>
            <h1>
              IIT Madras <span>Zanzibar</span>
            </h1>
            <h4>
              Admissions to all academic programs for AY 2024-25 are now closed
            </h4>
            <h5>
              For admission queries, reach out to admissions@iitmz.ac.in
            </h5>
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
            <h3>Welcome To</h3>
            <h1>
              IIT Madras <span>Zanzibar</span>
            </h1>
            <h4>
              &lsquo;Discover STEM&rsquo; - Genwise Residential Program for High
              Schoolers
            </h4>
            <h5>July 28 - Aug 09, 2024</h5>
            <Button>
              <Link target="_blank" href="/events">
                Know More
              </Link>
            </Button>
          </div>
        </div>
      </Slider>
    </section>
  );
}
