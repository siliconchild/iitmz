import styles from "./ceremony.module.scss";
import Slider from "./slider";
import Img from "./image";

export default function SigningCeremony() {
  return (
    <section>
      <Slider slidesToShow={5}>
        <div className={styles.item}>
          <Img
            src="/birmingham-2x.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with University of Birmingham"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/ase-2x.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with African School of Economics"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/deakin-2x.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with Deakin University"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/nutm-2x.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with Nigerian University of Technology and Management"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/dit.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with DIT"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/udsm.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with UDSM"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/cert-tds.jpeg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with CERT & TDS"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/5.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with Airtel Africa Foundation"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/micit.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with MICIT"
          />
        </div>
        <div className={styles.item}>
          <Img
            src="/ocgs.jpg"
            width={260}
            height={290}
            style={{ objectFit: "cover" }}
            alt="Image of signing of MOU with OCGS"
          />
        </div>
      </Slider>
    </section>
  );
}
