import React from "react";
import styles from "./course-eligibility.module.scss";

const CourseEligibility: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  return (
    <section className={styles.section}>
      <h3>Eligibility Criteria</h3>
      <div className={styles.panel}>
        {children}
      </div>
    </section>
  );
};

export default CourseEligibility;
