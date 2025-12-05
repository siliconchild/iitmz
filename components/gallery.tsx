import styles from "./gallery.module.scss";
import Image from "next/image";
import Slider from "./slider";
import Img from "./image";

export default function Gallery() {
  return (
    <section>
      <Slider slidesToShow={4}>
        <div className={styles.item}>
          <Img
            src="/slider/1.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/2.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/3.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/4.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/5.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/6.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/7.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/8.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/9.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/10.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/11.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/12.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/13.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/14.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/15.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/slider/16.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
      </Slider>
    </section>
  );
}
