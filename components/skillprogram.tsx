import Link from "next/link";
import styles from "./skillprogram.module.scss";
import InquirySection from "./admissions-enquiry";
import Img from "./image";

export default function SkillPrograms() {
  return (
    <section className={styles.section}>
      <div className={styles.programGrid}>
        {/* GITAA Partnership */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/logos/6.png"
                alt="GITAA Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>AI/ML Training</h2>
              <h3 className={styles.cardSubtitle}>GITAA Pvt. Ltd.</h3>
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
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              IITM Zanzibar has been partnering with GITAA Pvt. Ltd. to offer
              several in-person sessions in the area of Digital Transformation,
              Machine Learning, AI and so on. The courses have been very well
              received with great testimonials from the learners. We look
              forward to more such programs, leveraging the decades long
              experience of GITAA Pvt. Ltd. in providing such training in India,
              through its expert faculty.
            </p>
          </div>
        </article>

        {/* Spoken Tutorial Partnership */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/spoken_tutorial.jpeg"
                alt="Spoken Tutorial Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>Self-Paced Learning Platform</h2>
              <h3 className={styles.cardSubtitle}>Spoken Tutorial </h3>
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
          </div>
          {/* <div className={styles.cardContent}>
            <h4 className={styles.contentTitle}>IT modules in various languages, including Kiswahili:</h4>
            <ul className={styles.courseList}>
              <li>Introduction to Computers</li>
              <li>Introduction to LibreOffice Write (word processing)</li>
              <li>Introduction to LibreOffice Calc (spreadsheets)</li>
              <li>Audacity (Audio recording and editing)</li>
            </ul>
          </div> */}
          <div className={styles.cardContent}>
            <p className={styles.description}>
              Spoken Tutorial is a prominent platform for self-paced learning,
              suitable for all ages. Having training hundreds of thousands of
              learners in India, Spoken Tutorial worked with IITM Zanzibar to
              offer a week-long pilot program to various communities in Zanzibar
              including high schoolers, teachers, and youth between jobs. Expect
              similar engagements, on both commercial and non-commercial bases,
              soon!
            </p>
          </div>
        </article>

        {/* CERT TDS Courses */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/logos/25.png"
                alt="CERT TDS Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>Digital School</h2>
              <h3 className={styles.cardSubtitle}>CERT-TDS</h3>
              <div
                className={`${styles.cardMeta} ${styles.certButtonsContainer}`}
              >
                {" "}
                {/* Added certButtonsContainer class */}
                <Link
                  href="https://www.cert.ae/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  Visit CERT
                </Link>
                <Link
                  href="https://thedigitalschool.org/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  {" "}
                  {/* Assuming a placeholder link for TDS */}
                  Visit TDS
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              IITM Zanzibar is proud to partner with CERT and The Digital School
              in launching the first regional office of the SkillED Academies
              project in Zanzibar, Tanzania.
              <br />
              <br />
              This strategic collaboration is focused on advancing digital
              education and practical training across Africa through applied
              research, vocational programs, and the development of learning
              solutions aligned with national priorities.
            </p>
          </div>
        </article>
        {/* Beem Africa */}

        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/logos/26.png"
                alt="Beem Africa Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}></h2>
              <h3 className={styles.cardSubtitle}>
                Bongo Live Enterprise Ltd T/A Beem Africa &lsquo;Beem&rsquo;
              </h3>
              {/* <div
                className={`${styles.cardMeta} ${styles.certButtonsContainer}`}
              >
                {" "}
                <Link
                  href="https://www.cert.ae/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  Visit CERT
                </Link>
                <Link
                  href="https://thedigitalschool.org/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  {" "}
                  Visit TDS
                </Link>
              </div> */}
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              Information will be updated soon.
            </p>
          </div>
        </article>

        {/* Soft Tech */}

        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/logos/14.png"
                alt="Soft Tech Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}></h2>
              <h3 className={styles.cardSubtitle}>Soft Tech Consulting Ltd</h3>
              {/* <div
                className={`${styles.cardMeta} ${styles.certButtonsContainer}`}
              >
                {" "}
                <Link
                  href="https://www.cert.ae/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  Visit CERT
                </Link>
                <Link
                  href="https://thedigitalschool.org/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  {" "}
                  Visit TDS
                </Link>
              </div> */}
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              Information will be updated soon.
            </p>
          </div>
        </article>

        {/* Ministry of ICIT Courses */}
        {/* <article className={styles.programCard}>
          <div className={styles.imageContainer}>
            <img
              src="/micit.jpg"
              alt="Ministry of ICIT Building"
              className={styles.cardImage}
              height={120}
              width={200}
            />
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>Ministry of ICIT</h2>
            <h3 className={styles.cardSubtitle}>Tanzania Government Programs</h3>
          </div>
        </article> */}

        {/* OCGS Courses */}
        {/* <article className={styles.programCard}>
          <div className={styles.imageContainer}>
            <Img
              src="/ocgs.jpg"
              alt="OCGS Zanzibar Office"
              className={styles.cardImage}
              height={120}
              width={200}
            />
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>OCGS Zanzibar</h2>
            <h3 className={styles.cardSubtitle}>Government Statistics Office</h3>
          </div>
        </article> */}
      </div>
      <div className={styles.inquirySection}>
        <InquirySection
          title="Interested in our skilling programs?"
          description="Reach out to us at"
          emails={["infodesk@iitmz.ac.in"]}
        />
      </div>
    </section>
  );
}
