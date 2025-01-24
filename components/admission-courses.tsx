import styles from "./admission-courses.module.scss";
import CourseCard from "./admissions-course-card";

export default function AcademicPrograms() {
  const programs = [
    {
      title: "BS in Data Science & AI",
      imageSrc: "/course3.jpg",
      links: [
        { label: "Eligibility", url: "/admissions/bs-eligibility" },
        { label: "Cirriculum", url: "/admissions/bs-eligibility" },
        { label: "Fee Structure", url: "/admissions/bs-fee" },
        {
          label: "Screening Test Documents",
          url: "/admissions/bs-screening-test",
        },
        {
          label: "Examination Centers",
          url: "/admissions/bs-screening-test",
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
        <h2 className="section-title">Programs Offered</h2>
        <div className={styles.grid}>
          {programs.map((program, index) => (
            <CourseCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
