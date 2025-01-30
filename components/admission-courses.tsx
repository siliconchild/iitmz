import styles from "./admission-courses.module.scss";
import CourseCard from "./admissions-course-card";

export default function AcademicPrograms() {
  const programs = [
    {
      title: "BS in Data Science & AI",
      imageSrc: "/course3.jpg",
      links: [
        { label: "Eligibility", url: "/schools/engineering-and-science/bs-data-science-and-ai#eligibility" },
        { label: "Cirriculum", url: "/schools/engineering-and-science/bs-data-science-and-ai#curriculum" },
        {
          label: "Fee Structure",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#fee-structure",
        },
        {
          label: "Screening Test Documents",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#preparation-resources",
        },
        {
          label: "Examination Centers",
          url: "/schools/engineering-and-science/bs-data-science-and-ai#examination-centres",
        },
      ],
      applicationLink: "/apply/bs",
    },
    {
      title: "MTech in Data Science & AI",
      imageSrc: "/course4.jpg",
      links: [
        { label: "Eligibility", url: "/admissions/mtech-eligibility" },
        { label: "Cirriculum", url: "/admissions/bs-eligibility" },
        { label: "Program Structure", url: "/admissions/bs-fee" },
        { label: "Fee Structure", url: "/admissions/bs-fee" },
        {
          label: "Screening Test Documents",
          url: "/admissions/bs-screening-test",
        },
      ],
      applicationLink: "/apply/mtech",
    },
    {
      title: "MTech in Ocean Structures",
      imageSrc: "/ocean-structures.jpg",
      links: [
        { label: "Eligibility", url: "/admissions/mtech-eligibility" },
        { label: "Cirriculum", url: "/admissions/bs-eligibility" },
        { label: "Fee Structure", url: "/admissions/bs-fee" },
        {
          label: "Screening Test Documents",
          url: "/admissions/bs-screening-test",
        },
      ],
      applicationLink: "/apply/mtech-os",
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
