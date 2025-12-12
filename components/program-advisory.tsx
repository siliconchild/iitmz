import styles from "./program-advisory.module.scss";
import Button from "./button";
import Link from "next/link";
import Img from "./image";

export const ProgramAdvisory = () => {
  return (
    <div id="pac" className={styles.pac}>
      <h2 className="section-title center line">Program Advisory Committee</h2>
      <div>
        <div className={styles.card}>
          <Img
            src="/sharat.jpg"
            alt="Photo of Prof Sharat Chandran"
            width={200}
            height={200}
          />
          <h3>Prof Sharat Chandran</h3>
          <h4>IIT, Bombay</h4>
          <Link target="_blank" href="https://www.cse.iitb.ac.in/~sharat/">
            <Button kind="SECONDARY">Know More</Button>
          </Link>
        </div>

        <div className={styles.card}>
          <Img
            src="/pandurangan.jpeg"
            alt="Photo of Prof Pandurangan"
            width={200}
            height={200}
          />
          <h3>Prof C Pandurangan</h3>
          <h4>IISc, Bengaluru</h4>
          <Link
            target="_blank"
            href="https://odaa.iisc.ac.in/prof-pandurangan-medal/"
          >
            <Button kind="SECONDARY">Know More</Button>
          </Link>
        </div>
        <div className={styles.card}>
          <Img
            src="/mark.png"
            alt="Photo of Prof Mark Lee"
            width={200}
            height={200}
          />
          <h3>Prof Mark Lee</h3>
          <h4>University of Birmingham</h4>
          <Link
            target="_blank"
            href="https://www.birmingham.ac.uk/staff/profiles/computer-science/academic-staff/lee-mark.aspx"
          >
            <Button kind="SECONDARY">Know More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
