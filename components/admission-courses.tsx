"use client";
import { useState } from "react";
import styles from "./admission-courses.module.scss";
import CourseCard from "./admissions-course-card";

export default function AcademicPrograms() {
  const [activeTab, setActiveTab] = useState("ug");

  const programs = [
    {
      title: "BS in Chemical Process Engineering",
      imageSrc: "/course-1.jpg",
      links: [
        {
          label: "Program Overview",
          url: "/schools/engineering-and-science/bs-chemical-process-engineering",
        },
        {
          label: "Eligibility",
          url: "/schools/engineering-and-science/bs-chemical-process-engineering#eligibility",
        },
        {
          label: "Curriculum",
          url: "/schools/engineering-and-science/bs-chemical-process-engineering#curriculum",
        },
        {
          label: "Fee Structure",
          url: "/schools/engineering-and-science/bs-chemical-process-engineering#fee-structure",
        },
        {
          label: "Screening Test Information",
          url: "/schools/engineering-and-science/bs-chemical-process-engineering#screening-test",
        },
        {
          label: "Examination Centers",
          url: "/schools/engineering-and-science/bs-chemical-process-engineering#examination-centres",
        },
      ],
      // applicationDisabled: true,
      applicationLink: "https://admissions.iitmz.ac.in/bs",
    },
    {
      title: "BS in Data Science & AI",
      imageSrc: "/course3.jpg",
      links: [
        {
          label: "Program Overview",
          url: "/schools/engineering-and-science/bs-data-science-and-ai",
        },
        {
          label: "Eligibility",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#eligibility",
        },
        {
          label: "Curriculum",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#curriculum",
        },
        {
          label: "Fee Structure",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#fee-structure",
        },
        {
          label: "Screening Test Information",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#screening-test",
        },
        {
          label: "Examination Centers",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#examination-centres",
        },
      ],
      // applicationDisabled: true,
      applicationLink: "https://admissions.iitmz.ac.in/bs",
    },
    {
      title: "MTech in Data Science & AI",
      imageSrc: "/course4.jpg",
      links: [
        {
          label: "Program Overview",
          url: "/schools/engineering-and-science/mtech-data-science-and-ai",
        },
        {
          label: "Eligibility",
          url: "/schools/engineering-and-science/mtech-data-science-and-ai#eligibility",
        },
        {
          label: "Curriculum",
          url: "/schools/engineering-and-science/mtech-data-science-and-ai#curriculum",
        },
        {
          label: "Fee Structure",
          url: "/schools/engineering-and-science/mtech-data-science-and-ai#fee-structure",
        },
        {
          label: "Screening Test Information",
          url: "/schools/engineering-and-science/mtech-data-science-and-ai#screening-test",
        },
      ],
      applicationDisabled: true,
      applicationLink: "#",
    },
    {
      title: "MTech in Ocean Structures",
      imageSrc: "/ocean-structures.jpg",
      links: [
        {
          label: "Program Overview",
          url: "/schools/engineering-and-science/mtech-ocean-structures",
        },
        {
          label: "Eligibility",
          url: "/schools/engineering-and-science/mtech-ocean-structures#eligibility",
        },
        {
          label: "Curriculum",
          url: "/schools/engineering-and-science/mtech-ocean-structures#curriculum",
        },
        {
          label: "Fee Structure",
          url: "/schools/engineering-and-science/mtech-ocean-structures#fee-structure",
        },
        {
          label: "Screening Test Information",
          url: "/schools/engineering-and-science/mtech-ocean-structures#screening-test",
        },
        {
          label: "Program Structure",
          url: "/schools/engineering-and-science/mtech-ocean-structures#program-structure",
        },
      ],
      applicationDisabled: true,
      applicationLink: "#",
    },
  ];

  const ugPrograms = programs.filter((program) =>
    program.title.startsWith("BS"),
  );
  const pgPrograms = programs.filter((program) =>
    program.title.startsWith("MTech"),
  );

  const displayedPrograms = activeTab === "ug" ? ugPrograms : pgPrograms;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title center line">Programs Offered</h2>

        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "ug" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("ug")}
          >
            Undergraduate (UG)
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "pg" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("pg")}
          >
            Postgraduate (PG)
          </button>
        </div>

        <div className={styles.grid}>
          {displayedPrograms.map((program, index) => (
            <CourseCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
