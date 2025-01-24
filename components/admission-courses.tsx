import styles from "./admission-courses.module.scss";
import CourseCard from "./admissions-course-card";

export default function AcademicPrograms() {
  const programs = [
    {
      title: "BS in Data Science & AI",
      imageSrc: "/course3.jpg",
      links: [
        { label: "Eligibility", url: "/admissions/bs-eligibility" },
        { label: "Tuition Fee", url: "/admissions/bs-fee" },
        { label: "BS Sample Questions", url: "/admissions/bs-sample-questions" },
        { label: "Screening Test Question Papers", url: "/admissions/bs-screening-test" },
      ],
      applicationLink: "/apply/bs",
    },
    {
      title: "MTech in Data Science & AI",
      imageSrc: "/course4.jpg",
      links: [
        { label: "Eligibility", url: "/admissions/mtech-eligibility" },
        { label: "Tuition Fee", url: "/admissions/mtech-fee" },
        { label: "Sample Questions", url: "/admissions/mtech-sample-questions" },
        { label: "Screening Test Question Papers", url: "/admissions/mtech-screening-test" },
      ],
      applicationLink: "/apply/mtech",
    },
    {
      title: "MTech in Ocean Structures",
      imageSrc: "/ocean-structures.jpg",
      links: [
        { label: "Eligibility", url: "/admissions/mtech-os-eligibility" },
        { label: "Tuition Fee", url: "/admissions/mtech-os-fee" },
        { label: "Sample Questions", url: "/admissions/mtech-os-sample-questions" },
        { label: "Screening Test Question Papers", url: "/admissions/mtech-os-screening-test" },
      ],
      applicationLink: "/apply/mtech-os",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title center">Academic Programs</h2>
        <div className={styles.description}>
          <p>
            Explore our diverse range of academic programs and find detailed information about eligibility,
            important dates, and application processes.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((program, index) => (
            <CourseCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
