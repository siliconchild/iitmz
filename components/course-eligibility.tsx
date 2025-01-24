import React from 'react';
import styles from "./eligibility.module.scss";


const CourseEligibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
<section
      className={styles.section} 
    >
      <h2 className="section-title center">Eligibility Criteria</h2>
            <div className={styles.panel}>
              <ul>
                {children}
              </ul>
            </div>

    </section>
  );
};

export default CourseEligibility;