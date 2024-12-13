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
            <h3>Web-Enabled Masters Program for working professionals</h3>
            <h1>
              MTech <span>Industrial AI</span>
            </h1>
            {/* <h4>
              MTech Ocean Structures Applications are live
            </h4>
            <h5>
            Last Date: Sep 15, 2024 | 11:59 PM
            </h5>
            */}
            <Button>
              <Link target="_blank" href="https://admissions.iitmz.ac.in/iitmz-mtechiai">
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
            {/* <h4>
              MTech Ocean Structures Applications are live
            </h4>
            <h5>Last Date: Sep 15, 2024 | 11:59 PM</h5>
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
