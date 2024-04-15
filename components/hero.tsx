import styles from "./hero.module.scss";
import Slider from "./slider";
import Img from "./image";
import ApplyDropdown from "./apply-dropdown";
import Button from "./button";
import Link from "next/link";

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
            <h4>
              BS Live Webinar with Director of IITM & Director-in-Charge of
              IITMZ
            </h4>
            <h5>April 16, 5.30 PM IST | 3 PM EAT</h5>
            <Button>
              <Link
                target="_blank"
                href=" https://us06web.zoom.us/webinar/register/WN_7AuU0zV4ToaM37eOExj31A"
              >
                Register Now
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
            <h4>
              BS Live Webinar with Director of IITM & Director-in-Charge of
              IITMZ
            </h4>
            <h5>April 16, 5.30 PM IST | 3 PM EAT</h5>
            <Button>
              <Link
                target="_blank"
                href=" https://us06web.zoom.us/webinar/register/WN_7AuU0zV4ToaM37eOExj31A"
              >
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      </Slider>
    </section>
  );
}
