import styles from "./hero.module.scss";
import Slider from "./slider";
import Img from "./image";
import Button from "./button";
import Link from "next/link";
import ApplyDropdown from "./apply-dropdown";

export default function Hero() {

  return (
    <section>
      <Slider>
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
            <h4>MTech Ocean Structures Applications are live</h4>
            <h5>Last Date: June 20, 2024 | 11:59 PM</h5>
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
            <h4>MTech Ocean Structures Applications are live</h4>
            <h5>Last Date: June 20, 2024 | 11:59 PM</h5>
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
