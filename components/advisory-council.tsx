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
            src="/mridula.webp"
            alt="Picture Of Dr Mridula Nair"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
          <div className={styles.body}>
            <h2>Dr. Mridula Nair</h2>
            <h4>
              Research Fellow & <br /> Distinguished Inventor
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
          <h3>Chaired By</h3>
          <Img
            src="/raghunathan-1.jpg"
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