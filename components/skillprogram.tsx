import Link from "next/link"
import styles from "./skillprogram.module.scss" // Adjusted import path

export default function SkillPrograms() {
  return (
    <div>
      {/* Main Content */}
      <main className={`${styles.main} ${styles.container}`}>
        <div className={styles.mainGrid}>
          {/* GITAA Partnership */}
          <div className={`${styles.card}`}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>GITAA Pvt. Ltd. Partnership</h2>
              <div className={styles.cardDescriptionText}> {/* Changed from card__description to cardDescriptionText */}
                <Link href="https://www.gitaa.in/ai-ml-training" className={styles.link} target="_blank">
                  Visit GITAA AI/ML Training
                </Link>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardSubtitle}>AI/ML Training Courses:</h3>
              <ul className={styles.cardList}>
                <li>Machine Learning Fundamentals</li>
                <li>Deep Learning with TensorFlow & PyTorch</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision Applications</li>
                <li>AI for Business Analytics</li>
                <li>Data Science & Predictive Modeling</li>
                <li>Reinforcement Learning</li>
              </ul>
            </div>
          </div>

          {/* Spoken Tutorial Partnership */}
          <div className={`${styles.card}`}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Spoken Tutorial Partnership</h2>
              <div className={styles.cardDescriptionText}>
                <Link href="https://spoken-tutorial.org/" className={styles.link} target="_blank">
                  Visit Spoken Tutorial
                </Link>
              </div>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardSubtitle}>Self-paced IT modules in various languages, including Kiswahili:</p>
              <ul className={styles.cardList}>
                <li>Introduction to Computers</li>
                <li>Introduction to LibreOffice Write (word processing)</li>
                <li>Introduction to LibreOffice Calc (spreadsheets)</li>
                <li>Audacity (Audio recording and editing)</li>
                <li>Basic Programming</li>
                <li>Web Development Fundamentals</li>
              </ul>
            </div>
          </div>

          {/* Ministry of ICIT Courses */}
          <div className={`${styles.card}`}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Ministry of ICIT, Tanzania Programs</h2>
              <div className={styles.cardDescriptionText}>Courses offered in November 2024</div>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li>Digital Transformation</li>
                <li>Machine Learning</li>
                <li>Blockchain Fundamentals</li>
                <li>Cloud Computing</li>
                <li>Cybersecurity Essentials</li>
                <li>IoT Applications</li>
              </ul>
            </div>
          </div>

          {/* OCGS Courses */}
          <div className={`${styles.card}`}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>OCGS Zanzibar Programs</h2>
              <div className={styles.cardDescriptionText}>
                Courses offered to the Office of the Chief Govt. Statistician in 2023
              </div>
            </div>
            <div className={styles.cardContent}>
              <ul className={styles.cardList}>
                <li>Big Data Analytics</li>
                <li>Data Visualization</li>
                <li>Statistical Analysis</li>
                <li>Data Collection Methodologies</li>
                <li>Reporting & Dashboard Creation</li>
              </ul>
            </div>
          </div>
        </div>

      </main>



    
    </div>
  )
}