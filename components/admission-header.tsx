import styles from "./admission-header.module.scss";
import Img from "./image";
import { Tabs, TabButton, TabPanel } from "./tabs";
import ApplyDropdown from "./apply-dropdown";
import Link from "next/link";

export default function AdmissionHeader() {
  return (
    <div className="container">
      <section className={`${styles.section}`}>
        <div>
          <div className={styles.header}>
            <h1>
              Why Study At <br />
              IITM Zanzibar<span>.</span>
            </h1>
            <p>
              Get an unparalleled learning experience in data science and AI.
              Benefit from our cutting-edge courses, esteemed faculty and
              industry collaborations, empowering you to excel in these rapidly
              growing fields.
            </p>
            <ApplyDropdown />
          </div>
          <Tabs>
            <div className={styles.tabs}>
              <TabButton className={styles.tab_button_active} index={0}>
                Advanced Curiculum
              </TabButton>
              <TabButton className={styles.tab_button_active} index={1}>
                Acclaimed Faculty
              </TabButton>

              <TabPanel index={0}>
                <p>
                  A curriculum that prepares students for the challenges of the
                  future. With a strong emphasis on practical learning,
                  interdisciplinary approaches, and industry relevance, the
                  curriculum equips students with the latest knowledge and
                  skills. From cutting-edge technologies to innovative research
                  opportunities, the advanced curriculum at IITM ensures
                  students are well-prepared to excel in their chosen fields and
                  make a meaningful impact in the world. Click{" "}
                  <Link href="/schools/engineering-and-science/bs-data-science-and-ai">
                    here
                  </Link>{" "}
                  to see the curriculum for BS in DS & AI and{" "}
                  <Link href="/schools/engineering-and-science/mtech-data-science-and-ai">
                    here
                  </Link>{" "}
                  for MTech in DS & AI
                </p>
              </TabPanel>
              <TabPanel index={1}>
                <p>
                  IITM Zanzibar boasts an acclaimed faculty renowned for their
                  expertise and contributions to their respective fields.
                  Comprising distinguished professors, researchers, and industry
                  professionals, the faculty brings a wealth of knowledge and
                  experience to the classroom. Their mentorship and guidance
                  inspire students to achieve their full potential, fostering a
                  dynamic learning environment. With a commitment to excellence
                  in teaching and research, the acclaimed faculty at IITM plays
                  a pivotal role in shaping future leaders and innovators. Know
                  more about the IITM Zanzibar faculty{" "}
                  <Link href="/schools/engineering-and-science#faculty">
                    here
                  </Link>
                </p>
              </TabPanel>
            </div>
          </Tabs>
        </div>
        <Img src="/main2.png" width={480} height={460} alt="" loading="eager" />
      </section>
    </div>
  );
}
