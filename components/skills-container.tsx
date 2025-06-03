"use client";
import styles from "./skills-container.module.scss";
import SkillCard from "@/components/skill-card";
import { Tabs, TabButton, TabPanel } from "./tabs";
import { SkillsType } from "@/data/skills";

export default function SkillsContainer({ list }: { list: SkillsType }) {
  const highSchool = list.filter((item) => item.category === "High School");
  const ugPg = list.filter((item) => item.category === "University Students/Professionals");
  const working = list.filter((item) => item.category === "Organizations");

  return (
    <div className={styles.section}>
      <Tabs defaultIndex={0}>
        <div className={styles.tabs}>
          <TabButton className={styles.tab_button_active} index={0}>
            High School
          </TabButton>
          <TabButton className={styles.tab_button_active} index={1}>
          University Students/Professionals
          </TabButton>
          <TabButton className={styles.tab_button_active} index={2}>
          Organizations
          </TabButton>
        </div>

        <div>
          <TabPanel index={0}>
            {highSchool.length > 0 ? (
              <div className={styles.grid}>
                {highSchool.map((skill) => (
                  <SkillCard key={skill.id} {...skill} />
                ))}
              </div>
            ) : (
              <div className={styles.noItem}>
                <p>No Content for High School</p>
              </div>
            )}
          </TabPanel>

          <TabPanel index={1}>
            {ugPg.length > 0 ? (
              <div className={styles.grid}>
                {ugPg.map((skill) => (
                  <SkillCard key={skill.id} {...skill}  />
                ))}
              </div>
            ) : (
              <div className={styles.noItem}>
                <p>No Content for UG/PG</p>
              </div>
            )}
          </TabPanel>

          <TabPanel index={2}>
            {working.length > 0 ? (
              <div className={styles.grid}>
                {working.map((skill) => (
                  <SkillCard key={skill.id} {...skill}  />
                ))}
              </div>
            ) : (
              <div className={styles.noItem}>
                <p>No Content for Working Professionals</p>
              </div>
            )}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}
