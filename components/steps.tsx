import styles from "./steps.module.scss";
import Button from "./button";
import Link from "next/link";
import { IoIdCardOutline } from "react-icons/io5";
import { SlGraduation } from "react-icons/sl";
import { BsPatchCheck, BsPen } from "react-icons/bs";

export default function Steps() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">How To Apply</h2>
          {/* <div className={styles.process}>
            <p>Learn More About Our Selection Process</p>
            <Link target="_blank" href="/zanzibar/selection_process.pdf">
              <Button kind="SECONDARY">Download PDF</Button>
            </Link>
          </div> */}
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <SlGraduation />
            <h3>Check Eligilibity</h3>
            <p>
              Ensure you meet the specified criteria, including academic
              qualifications and prerequisites. This step is crucial in
              determining your eligibility for our data science and AI programs.
            </p>
          </div>
          <div className={styles.card}>
            <IoIdCardOutline />
            <h3>Create Account</h3>
            <p>
              Next step in our application process is to create an Account. By
              creating an account, you gain access to our online portal, where
              you can complete your application, track its progress, and receive
              important updates and notifications.
            </p>
          </div>
          <div className={styles.card}>
            <BsPen />
            <h3>Fill Application Form</h3>
            <p>
              Once you have created your account, the next step is to fill out
              the application form. Provide accurate and detailed information
              about your academic background, work experience, and any other
              required details.
            </p>
          </div>
          <div className={styles.card}>
            <BsPatchCheck />
            <h3>That&rsquo;s It</h3>
            <p>
              Congratulations, you&rsquo;ve completed the application process!
              Now, sit back and relax while our admissions team carefully
              reviews your application. We will keep you updated on the progress
              and notify you promptly.
            </p>
          </div>
        </div>
        {/* <Link href="">
          <Button type="SECONDARY">Apply Now</Button>
        </Link> */}
      </div>
    </section>
  );
}
