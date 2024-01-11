import styles from "./admission-widget.module.scss";
import Link from "next/link";

export default function AdmissionWidget() {
  return (
    <div className={styles.widget}>
      <button>Admissions 2024</button>
      <div className={styles.content}>
        <Link href="/admission">Apply Now</Link>
        <Link target="_blank" href="/IITMZST_Information_Brochure_2024.pdf">
          Information Brochure
        </Link>
        <Link
          target="_blank"
          href="/IITMZST_BS_Sample_Questions.pdf"
        >
          BS Sample Questions
        </Link>
        <Link
          target="_blank"
          href="/IITMZST_MTech_Sample_Questions.pdf"
        >
          MTech Sample Questions
        </Link>
      </div>
    </div>
  );
}
