import styles from "./tobpar.module.scss";
import SocialMedia from "./social-media";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className="container">
        <a href="tel:+919043338564">(+91) 9043338564</a>
        <a href="mailto:infodesk@iitmz.ac.in">infodesk@iitmz.ac.in</a>
        <span>Zanzibar, Tanzania</span>
        <SocialMedia kind="MINIMAL" />
      </div>
    </div>
  );
}
