import styles from "./advisory-council.module.scss";
import Link from "next/link";
import Img from "./image";
import Button from "./button";

export default function AdvisoryCouncil() {
  return (
    <div className={styles.section}>
      <h2 className="section-title center">Advisory Council</h2>
      <div className="container">
        <div className={styles.card}>
          <Img
            src="/robin-mason.jpg"
            alt="Picture of Prof Robin Mason"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.body}>
            <h2>Prof. Robin Mason</h2>
            <h4>Pro Vice Chancellor (International)</h4>
            <p>University of Birmingham</p>
          </div>
        </div>
        <div className={styles.card}>
          <Img
            src="/prof-leonard.jpg"
            alt="Picture of Prof Leonard Wantchekon"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.body}>
            <h2>Prof. Leonard Wantchekon</h2>
            <h4>Founder and President</h4>
            <p>African School of Economics</p>
            <h4>Professor of Politics and International Affairs</h4>
            <p>Princeton University </p>
          </div>
        </div>
        <div className={styles.card}>
          <Img
            src="/mridula.webp"
            alt="Picture Of Dr Mridula Nair"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.body}>
            <h2>Dr. Mridula Nair</h2>
            <h4>
              Research Fellow, <br /> Distinguished Inventor, <br />
              Distinguished Alumna of IITM
            </h4>
            <p>Eastman Kodak Company, USA</p>
          </div>
        </div>
        <div className={styles.card}>
          <Img
            src="/pramath.jpg"
            alt="Picture of Dr Pramath Raj Sinha"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.body}>
            <h2>Dr. Pramath Raj Sinha</h2>
            <h4>Founder & Chairman</h4>
            <p>Harappa Education</p>
          </div>
          {/* <Link href="https://ibse.iitm.ac.in/people/raghunathan-rengaswamy/">
            <Button kind="SECONDARY">View Bio</Button>
          </Link> */}
        </div>
        <div className={styles.card}>
          <h3>Chair</h3>
          <Img
            src="/prof-raghu.jpg"
            alt="Picture of Chair Raghunathan Rengaswamy"
            width={185}
            height={185}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.body}>
            <h2>Prof. Raghunathan Rengaswamy</h2>
            <h4>Dean, Global Engagement</h4>
            <p>Indian Institute of Technology, Madras</p>
          </div>
        </div>
      </div>
    </div>
  );
}
