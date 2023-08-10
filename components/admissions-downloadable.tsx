import styles from "./admissions-downloadable.module.scss";
import Button from "./button";
import Link from "next/link";

export default function AdmissionsDownloadable() {
  return (
    <div className={styles.section}>
      <div className="container">
        <p>Downloadable resources to help you prepare for Admissions 2023</p>
        <div className={styles.buttons}>
          <Link target="_blank" href="/information_brochure_v2.pdf">
            <Button>Information Brochure</Button>
          </Link>
          <Link target="_blank" href="/bs-sample-questions_v3.pdf">
            <Button>BS Sample Questions</Button>
          </Link>
          <Link target="_blank" href="/mtech-sample-questions_v2.pdf">
            <Button>MTech Sample Questions</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
