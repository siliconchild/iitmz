import styles from "./admissions-downloadable.module.scss";
import Button from "./button";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

export default function AdmissionsDownloadable() {
  return (
    <div className={styles.section}>
      <div className="container">
        <p>Downloadable resources to help you prepare for Admissions 2024</p>
        <div className={styles.buttons}>
          <div>
            <Link
              target="_blank"
              href="/IITMZST_Information_Brochure_2024_v1.1.pdf"
            >
              <Button kind="SECONDARY_BLACK">
                <MdOutlineFileDownload />
                Information Brochure
              </Button>
            </Link>
            <Link target="_blank" href="/IITMZST_BS_Sample_Questions.pdf">
              <Button kind="SECONDARY_BLACK">
                <MdOutlineFileDownload />
                BS Sample Questions
              </Button>
            </Link>
            <Link target="_blank" href="/IITMZST_MTech_Sample_Questions.pdf">
              <Button kind="SECONDARY_BLACK">
                <MdOutlineFileDownload />
                MTech Sample Questions
              </Button>
            </Link>
          </div>
          <div>
            <Link target="_blank" href="/BS2023ScreeningTestQuestionPaper.pdf">
              <Button kind="SECONDARY_BLACK">
                <MdOutlineFileDownload />
                2023 BS Screeing Test Question Paper
              </Button>
            </Link>
            <Link
              target="_blank"
              href="/MTech2023ScreeningTestQuestionPaper.pdf"
            >
              <Button kind="SECONDARY_BLACK">
                <MdOutlineFileDownload />
                2023 MTech Screeing Test Question Paper
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
