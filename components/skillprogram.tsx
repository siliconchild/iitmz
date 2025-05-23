import Link from "next/link";
import styles from "./skillprogram.module.scss";

export default function SkillPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.programGrid}>
        {/* GITAA Partnership */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>GITAA Pvt. Ltd. Partnership</h2>
            <div className={styles.cardMeta}>
              <Link
                href="https://www.gitaa.in/ai-ml-training"
                className={styles.cardLink}
                target="_blank"
              >
                Visit GITAA AI/ML Training
              </Link>
            </div>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardSubtitle}>AI/ML Training Courses:</h3>
            <ul className={styles.courseList}>
              <li>Machine Learning Fundamentals</li>
              <li>Deep Learning with TensorFlow & PyTorch</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision Applications</li>
              <li>AI for Business Analytics</li>
              <li>Data Science & Predictive Modeling</li>
              <li>Reinforcement Learning</li>
            </ul>
          </div>
        </article>

        {/* Spoken Tutorial Partnership */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Spoken Tutorial Partnership</h2>
            <div className={styles.cardMeta}>
              <Link
                href="https://spoken-tutorial.org/"
                className={styles.cardLink}
                target="_blank"
              >
                Visit Spoken Tutorial
              </Link>
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardSubtitle}>
              Self-paced IT modules in various languages, including Kiswahili:
            </p>
            <ul className={styles.courseList}>
              <li>Introduction to Computers</li>
              <li>Introduction to LibreOffice Write (word processing)</li>
              <li>Introduction to LibreOffice Calc (spreadsheets)</li>
              <li>Audacity (Audio recording and editing)</li>
              <li>Basic Programming</li>
              <li>Web Development Fundamentals</li>
            </ul>
          </div>
        </article>

        {/* Ministry of ICIT Courses */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>
              Ministry of ICIT, Tanzania Programs
            </h2>
            <div className={styles.cardMeta}>
              Courses offered in November 2024
            </div>
          </div>
          <div className={styles.cardContent}>
            <ul className={styles.courseList}>
              <li>Digital Transformation</li>
              <li>Machine Learning</li>
              <li>Blockchain Fundamentals</li>
              <li>Cloud Computing</li>
              <li>Cybersecurity Essentials</li>
              <li>IoT Applications</li>
            </ul>
          </div>
        </article>

        {/* OCGS Courses */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>OCGS Zanzibar Programs</h2>
            <div className={styles.cardMeta}>
              Courses offered to the Office of the Chief Govt. Statistician in
              2023
            </div>
          </div>
          <div className={styles.cardContent}>
            <ul className={styles.courseList}>
              <li>Big Data Analytics</li>
              <li>Data Visualization</li>
              <li>Statistical Analysis</li>
              <li>Data Collection Methodologies</li>
              <li>Reporting & Dashboard Creation</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
