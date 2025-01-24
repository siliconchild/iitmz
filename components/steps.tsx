import styles from "./steps.module.scss";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { BsCameraVideo, BsCheckCircle } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Steps() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">Admission Process</h2>
          <div className={styles.process}>
            <p>
              For queries email <a href="mailto:admissions@iitmz.ac.in">admissions@iitmz.ac.in</a>
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.stepWrapper}>
            <span className={styles.number}>1</span>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <FaRegEdit />
              </div>
              <h3>Submit Online Application</h3>
              <p>
                Visit <a href="https://admissions.iitmz.ac.in/">admissions.iitmz.ac.in</a> to submit your
                application.
              </p>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <span className={styles.number}>2</span>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <MdOutlineQuiz />
              </div>
              <h3>Screening Test</h3>
              <p>
                <strong>BS:</strong> Computer Based Test (Physical Test Centre)
                <br />
                <strong>MTech:</strong> Online Proctored Test
              </p>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <span className={styles.number}>3</span>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <BsCameraVideo />
              </div>
              <h3>Online Interview</h3>
              <p>
                Interview with professors to evaluate motivation, technical aptitude, achievements and program
                readiness.
              </p>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <span className={styles.number}>4</span>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <HiOutlineDocumentText />
              </div>
              <h3>Selection Process</h3>
              <p>Final selections are made by the IITMZ Admission Committee based on overall performance.</p>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <span className={styles.number}>5</span>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <BsCheckCircle />
              </div>
              <h3>Admission Offer</h3>
              <p>Selected candidates receive a provisional admission letter from IITM Zanzibar.</p>
            </div>
          </div>

          <div className={styles.stepWrapper}>
            <span className={styles.number}>6</span>
            <div className={styles.step}>
              <div className={styles.iconWrapper}>
                <RiSecurePaymentLine />
              </div>
              <h3>Registration</h3>
              <p>Confirm your admission by paying the registration fee within the specified timeline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
