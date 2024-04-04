import styles from "./tobpar.module.scss";
import SocialMedia from "./social-media";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className="container">
        {/* <a href="tel:+919043338564">(+91) 9043338564</a> */}
        <a href="mailto:infodesk@iitmz.ac.in">
          <span>for general queries -</span>infodesk@iitmz.ac.in
        </a>
        <a href="mailto:admissions@iitmz.ac.in">
          <span>for admissions -</span>admissions@iitmz.ac.in
        </a>
        <SocialMedia kind="MINIMAL" />
      </div>
    </div>
  );
}
