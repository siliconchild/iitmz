import React from 'react';
import styles from "./job-prospects.module.scss";


const JobProspects: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className={styles.prospects}>
        <h4>Job Prospects</h4>
     {children}
    </section>
  );
};

export default JobProspects;
