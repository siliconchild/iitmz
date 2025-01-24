import styles from "./admissions-enquiry.module.scss";
import { IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";
import Button from "@/components/button";

export default function InquirySection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>Have Questions?</h2>
            <p>
              Are you interested in applying to IIT Madras Zanzibar and still have questions about the
              program, admission process and screening test? Our admission counsellors are here to help.
            </p>

            <div className={styles.contacts}>
              <a href="https://wa.me/919600685899" className={styles.contact}>
                <IoLogoWhatsapp />
                <span>+91 9600 685 899</span>
              </a>
              <a href="mailto:admissions@iitmz.ac.in" className={styles.contact}>
                <IoMailOutline />
                <span>admissions@iitmz.ac.in</span>
              </a>
            </div>

            <div className={styles.cta}>
              <p>
                Fill out the IITM Zanzibar Inquiry Form and our admission counsellor will be in touch with
                you.
              </p>
              <Button kind="PRIMARY">Enquire Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
