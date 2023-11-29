import styles from "./gallery.module.scss";
import Image from "next/image";
import Slider from "./slider";
import Img from "./image";

export default function Gallery() {
  return (
    <section>
      <Slider slidesToShow={5}>
        <div className={styles.item}>
          <Img
            src="/gallery-alt-1.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gallery-alt-2.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gallery-alt-3.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gallery-alt-4.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gallery-alt-5.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of human and machine"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/gallery-alt-6.jpg"
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
