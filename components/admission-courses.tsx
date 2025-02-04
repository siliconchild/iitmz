import styles from "./admission-courses.module.scss";
import CourseCard from "./admissions-course-card";

export default function AcademicPrograms() {
  const programs = [
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
      applicationLink: "https://admissions.iitmz.ac.in/bsdsai",
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
      applicationLink: "https://admissions.iitmz.ac.in/mtechdsai",
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
      applicationLink: "https://admissions.iitmz.ac.in/mtechos",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title center line">Programs Offered</h2>
        <div className={styles.grid}>
          {programs.map((program, index) => (
            <CourseCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
