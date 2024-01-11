import styles from "./admissions-downloadable.module.scss";
import Button from "./button";
import Link from "next/link";

export default function AdmissionsDownloadable() {
  return (
    <div className={styles.section}>
      <div className="container">
        <p>Downloadable resources to help you prepare for Admissions 2023</p>
        <div className={styles.buttons}>
          <Link target="_blank" href="IITMZST_Information_Brochure_2024.pdf">
            <Button>Information Brochure</Button>
          </Link>
          <Link
            target="_blank"
            href="/IITMZST_BS_Sample_Questions.pdf"
          >
            <Button>BS Sample Questions</Button>
          </Link>
          <Link
            target="_blank"
            href="/IITMZST_MTech_Sample_Questions.pdf"
          >
            <Button>MTech Sample Questions</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
