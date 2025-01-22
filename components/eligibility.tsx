import styles from "./eligibility.module.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePause } from "react-icons/ai";
import { Tabs, TabButton, TabPanel } from "./tabs";

type EligibilityProps =
  | {
      type: "FULL";
    }
  | {
      type: "SINGLE";
      courseSlug: string;
    };

const coursesMap: { [key: string]: number } = {
  "bs-data-science-and-ai": 0,
  "mtech-data-science-and-ai": 1,
  "mtech-ocean-structures": 2,
};


export default function Eligilibity(props: EligibilityProps) {
  const getIndex = (courseIndex: number) => {
    if (props.type === "FULL") {
      return courseIndex;
    } else if (props.type === "SINGLE") {
      return coursesMap[props.courseSlug] === courseIndex ? 0 : 1;
    }
    return 0;
  };
  return (
    <section
      className={`${styles.section} ${
        props.type === "SINGLE" && styles.single
      }`}
    >
      <h2 className="section-title center">Eligibility Criteria</h2>
      <Tabs>
        <div className={styles.tabs}>
          <div className={styles.list}>
            <TabButton index={0} className={styles.tab_button_active}>
              BS in Data Science & AI
            </TabButton>
            <TabButton index={1} className={styles.tab_button_active}>
              MTech in Data Science & AI
            </TabButton>
            <TabButton index={2} className={styles.tab_button_active}>
              MTech in Ocean Structures
            </TabButton>
          </div>

          <TabPanel
            index={getIndex(0)}
          >
            <div className={styles.panel}>
              <ul>
                <li>
                  <BsFillCheckCircleFill className={styles.green} />
                  <p>
                    Eligible applicants will appear for a test at a test center;
                    shortlisted candidates will be called for an interview. A
                    holistic assessment of the quality of the application,
                    performance in the screening test, and interviews conducted
                    by the expert faculty panel will be used to admit students.
                    The screening test will be similar to SAT in level/type.
                    Further details will be announced shortly.
                  </p>
                </li>
                <li>
                  <BsFillCheckCircleFill className={styles.green} />
                  <p>
                    To be eligible for the Bachelor of Science in Data Science
                    and Artificial Intelligence (BS DS & AI) program at IITM
                    Zanzibar Campus, you must meet one of the following
                    eligibility criteria
                  </p>
                </li>
                <li>
                  <AiOutlinePause className={styles.green} />
                  <p>
                    Advanced Certificate of Secondary Education (Form VI) with 3
                    principal passes, in Natural Sciences
                  </p>
                </li>
                <li>
                  <AiOutlinePause className={styles.green} />
                  <p>
                    Final examination of the 10+2 system or two-year
                    Pre-University, conducted by any recognized Central/ Indian
                    State Board (CBSE etc.)
                  </p>
                </li>
                <li>
                  <AiOutlinePause className={styles.green} />
                  <p>
                    General Certificate Education (GCE) Examination
                    (London/Cambridge/Sri Lanka) at the Advanced (A) Level
                  </p>
                </li>
                <li>
                  <AiOutlinePause className={styles.green} />
                  <p>
                    High School Certificate Examination of the Cambridge
                    University or International Baccalaureate Diploma of the
                    International Baccalaureate office, Geneva
                  </p>
                </li>
                <li>
                  <AiOutlinePause className={styles.green} />
                  <p>
                    Any Public School/Board/University examination in India or
                    in any foreign country recognized as equivalent to 10+2
                    system by the Association of Indian Universities (AIU)
                  </p>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel
            index={getIndex(1)}
          >
            <div className={styles.panel}>
              <ul>
                <li>
                  <BsFillCheckCircleFill className={styles.green} />
                  <p>
                    Eligible applicants will appear for a test at a test center;
                    shortlisted candidates will be called for an interview. A
                    holistic assessment of the quality of the application,
                    performance in the screening test, and interviews conducted
                    by the expert faculty panel will be used to admit students.
                    The screening test will be similar to SAT in level/type.
                    Further details will be announced shortly.
                  </p>
                </li>
                <li>
                  <BsFillCheckCircleFill className={styles.green} />
                  <p>4 year UG degree in Engineering/Science</p>
                </li>
              </ul>
            </div>
          </TabPanel>
        </div>
        <TabPanel
          index={getIndex(2)}
        >
          <div className={styles.panel}>
            <ul>
              <li>
                <BsFillCheckCircleFill className={styles.green} />
                <p>
                  4-year Undergraduate degree in Civil Engineering with a
                  minimum of 60% marks.
                </p>
              </li>
              <li>
                <BsFillCheckCircleFill className={styles.green} />
                <p>
                  Eligible applicants will appear for an online screening test;
                  shortlisted candidates will be called for an interview. A
                  holistic assessment of the quality of the application,
                  performance in the screening test, and interviews conducted by
                  the expert faculty panel will be used to admit students. The
                  screening test will be similar to SAT in level/type.{" "}
                </p>
              </li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
}

