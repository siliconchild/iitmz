import styles from "./hero.module.scss";
import Slider from "./slider";
import Img from "./image";

export default function Hero() {
  return (
    <section>
      <Slider>
        <div className={styles.item}>
          <Img
            width={1200}
            height={800}
            alt="College Students Image"
            src="/hero2-min.jpg"
            loading="eager"
            sizes="(max-width: 768px) 900px, (min-width: 768px) 1200px"
          />

          <div className={styles.content}>
            <h4>IITM Zanzibar Campus</h4>
            <h3>Welcome To</h3>
            <h1>
              IIT Madras <span>Zanzibar</span>
            </h1>
            {/* <ApplyDropdown /> */}
          </div>
        </div>
      </Slider>
    </section>
  );
}
