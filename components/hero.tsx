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
            <h3> Application for the BS &amp; MTech full-time degree programs</h3>
<<<<<<< HEAD
            <h4>Starts from Feb 01, 2025</h4>
=======
            <h4>
              {/* Starts from Feb 01, 2025 */}
              For AY 2025-26: Starts from Jan 10, 2025
            </h4>
            {/* <h4>MTech Ocean Structures Applications are live</h4>
            <h5>Last Date: Sep 15, 2024 | 11:59 PM</h5> */}
>>>>>>> 9bee9ad2470e5ddc08ccd595638e1dcbf5fc683d

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
            <h3>Welcome To</h3>
            <h2> IIITM Zanzibar Campus</h2>
            {/* <h4>Last Date: Sep 15, 2024 | 11:59 PM</h4>
            <Button>
              <Link target="_blank" href="https://admissions.ge.iitm.ac.in/iitmz-mtechos">
                Apply Now
              </Link>
            </Button> */}
          </div>
        </div>
      </Slider>
    </section>
  );
}
