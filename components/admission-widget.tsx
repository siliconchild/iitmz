import styles from "./admission-widget.module.scss";
import Link from "next/link";
import { FaGraduationCap, FaWhatsapp } from "react-icons/fa";
import { MdOutlineQuestionAnswer, MdOutlineLibraryBooks } from "react-icons/md";

export default function ContactWidget() {
  return (
    <div className={styles.widget}>
      <Link
        target="_blank"
        // href="https://admissions.iitmz.ac.in/"
        href="https://admissions.iitmz.ac.in/bscpe"
        className={styles.widgetItem}
      >
        <FaGraduationCap className={styles.icon} />
        <label>Apply Now</label>
      </Link>

      <Link
        target="_blank"
        href="/BS-CPE-Program-Flyer.pdf"
        className={styles.widgetItem}
      >
        <MdOutlineLibraryBooks className={styles.icon} />
        <label>Info Brochure</label>
      </Link>

      <Link
        target="_blank"
        href="https://ge.iitm.ac.in/forms/iitmz-enquiry-form"
        className={styles.widgetItem}
      >
        <MdOutlineQuestionAnswer className={styles.icon} />
        <label>Enquire Now</label>
      </Link>

      {/* <Link
        href="https://wa.me/919600685899"
        target="_blank"
        className={styles.widgetItem}
      >
        <FaWhatsapp className={styles.icon} />
      </Link> */}
    </div>
  );
}
