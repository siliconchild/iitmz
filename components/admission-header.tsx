import styles from "./admission-header.module.scss";
import Img from "./image";
import Slider from "./slider";

export default function AdmissionHeader() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className="container">
          <div className={styles.header}>
            <h1>
              Why Study At <br />
              IIT Madras Zanzibar<span>?</span>
            </h1>
            <p className={styles.intro}>
              Get an unparalleled learning experience in STEM fields. Benefit
              from our cutting-edge interdisciplinary courses, esteemed faculty
              and industry collaborations, empowering you to excel in these
              rapidly growing fields.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Slider showTracks={true}>
              {Array.from({ length: 7 }).map((_, index) => (
                <Img
                  key={`admission-image-${index + 1}`}
                  src={`/admission-header-${index + 1}.jpg`}
                  width={800}
                  height={350}
                  alt={`IITM Zanzibar campus life ${index + 1}`}
                  loading="eager"
                />
              ))}
            </Slider>
          </div>
        </div>

        <div className={styles.features}>
          <div className="container">
            <div className={styles.feature}>
              <h2>Advanced Curriculum</h2>
              <p>
                A curriculum that prepares students for future challenges
                emphasizes practical learning, interdisciplinary approaches, and
                industry relevance. It equips students with the latest knowledge
                and skills, from cutting-edge technologies to innovative
                research opportunities. IITM Zanzibar’s advanced curriculum
                ensures students excel in their chosen fields and make a
                meaningful impact.
              </p>
            </div>

            <div className={styles.feature}>
              <h2>Acclaimed Faculty</h2>
              <p>
                IITM Zanzibar boasts an acclaimed faculty renowned for their
                expertise and contributions to their respective fields.
                Comprising distinguished professors, researchers, and industry
                professionals, the faculty brings a wealth of knowledge and
                experience to the classroom. Their mentorship and guidance
                inspire students to achieve their full potential, fostering a
                dynamic learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
