import styles from "./page.module.scss";
import courses from "@/data/courses";
import Img from "@/components/image";
import { Accordion, AccordionItem } from "@/components/accordion";
import Eligilibity from "@/components/eligibility";
import { AiOutlineUnorderedList, AiOutlineCalendar, AiOutlineCheck } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { BiBuilding } from "react-icons/bi";
import { GoGlobe } from "react-icons/go";
import Button from "@/components/button";
import Link from "next/link";
import CourseCiriculumDetail from "@/components/course-ciriculum-detail";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  const { slug } = params;

  const course = Object.values(courses).find((course) => course.slug === slug);

  return {
    title: `${course?.title} | Apply Now`,
    description: course?.seo?.desc,
    alternates: {
      canonical: `schools/engineering-and-science/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.values(courses).map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const course = Object.values(courses).find((course) => course.slug === params.slug);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Img src={course?.coverImg || ""} alt="data science course image" width={900} height={600} />
      </div>
      <div className="container">
        <section className={styles.body}>
          <div className={styles.titleBar}>
            <div className={styles.mainTitle}>
              <h1>{course?.title}</h1>
              {course?.applicationClosingDate && (
                <p className={styles.applicationClosingDate}>
                  <strong>Applications Close on -</strong> <span>{course?.applicationClosingDate}</span>
                </p>
              )}
            </div>

            <div className={styles.cta}>
              {course && "flyerLink" in course && (
                <Link target="_blank" href={course?.flyerLink}>
                  <Button kind="SECONDARY">Download Program Flyer</Button>
                </Link>
              )}
              {course?.applicationLink && (
                <Link target="_blank" href={course?.applicationLink}>
                  <Button kind="PRIMARY" disabled={course.applicationLink === "#"}>
                    Apply Now
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className={styles.meta}>
            <div className={styles.item}>
              <AiOutlineCalendar />
              <p>Duration</p>
              <span>{course?.meta.duration}</span>
            </div>
            <div className={styles.item}>
              <AiOutlineUnorderedList />
              <p>Total Credits</p>
              <span>{course?.meta.credits}</span>
            </div>
            <div className={styles.item}>
              <BiBuilding />
              <p>School of</p>
              <span>{course?.meta.department}</span>
            </div>
            <div className={styles.item}>
              <GoGlobe />
              <p>Language</p>
              <span>{course?.meta.language}</span>
            </div>
          </div>
          <div className={styles.description}>
            <h4>Description</h4>
            <p>{course?.desc}</p>
          </div>
          <div className={styles.prospects}>
            <h4>Job Prospects</h4>
            <p>{course?.prospects.desc}</p>
            <ul>
              {course?.prospects.points.map((point) => (
                <li key={point}>
                  <AiOutlineCheck />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {course && "downloadableResources" in course && (
            <div>
              <h4>Downloadable Resources</h4>
              <div className={styles.downloadableFiles}>
                {course &&
                  "downloadableResources" in course &&
                  course?.downloadableResources.map((resource: any) => (
                    <div key={resource.title}>
                      <Link target="_blank" href={resource.link}>
                        <Button kind="SECONDARY_BLACK">
                          <MdOutlineFileDownload />
                          {resource.title}
                        </Button>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div>
            <h4>Eligibility Criteria</h4>
            <Eligilibity type="SINGLE" courseSlug={params.slug} />
          </div>
          <div className={styles.curriculum}>
            <Accordion title="Curriculum">
              {course && "info" in course?.curriculum && (
                <div className={styles.info}>
                  {course?.curriculum.info.map((item) => <p key={item}>{item}</p>)}
                </div>
              )}
              {course?.curriculum.semesters.map((semester, index) => (
                <AccordionItem key={semester.title} initialEntered={index === 0}>
                  <div>
                    <h5>{semester.title}</h5>
                    <p>{`${semester.credits} credits`}</p>
                  </div>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th title="To know what (L, T, E, P, A, O) is hover your mouse pointer over it">
                          Category
                        </th>
                        <th title="Lectures">L</th>
                        <th title="Tutorials">T</th>
                        <th title="Extended Tutorials">E</th>
                        <th title="Practicals">P</th>
                        <th title="Outside Classroom">O</th>
                        <th title="Total Credits">Total Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semester.courses.map((course) => (
                        <CourseCiriculumDetail key={course.courseName} course={course} />
                      ))}
                    </tbody>
                  </table>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </section>
  );
}
