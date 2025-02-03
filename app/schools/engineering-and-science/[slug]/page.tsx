import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import styles from "./page.module.scss";
import { Curriculum, Semester, Course, CourseContent, Faculty } from "@/components/cirriculum";
import Img from "@/components/image";
import Link from "next/link";
import { BiBuilding } from "react-icons/bi";
import { GoGlobe } from "react-icons/go";
import Button from "@/components/button";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePause } from "react-icons/ai";
import { AiOutlineUnorderedList, AiOutlineCalendar } from "react-icons/ai";
import { FaCheck, FaDownload, FaFilePdf, FaCoins } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import InquirySection from "@/components/admissions-enquiry";
import { RxCaretRight } from "react-icons/rx";
import { Section, List, ListItem, Document, Documents, Note } from "@/components/course-components";
import { courses } from "#site/content";

function getCourses(coursesSlug: string) {
  return courses.find((item) => item.slug === coursesSlug);
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const coursesMember = courses.find((coursesMember) => coursesMember.slug === slug);
  if (!coursesMember) return {};
  return {
    title: `${coursesMember?.title} | Courses`,
    description: coursesMember?.seo?.desc || `IITM Zanzibar ${coursesMember.title} course information`,
    alternates: {
      canonical: `schools/engineering-and-science/courses/${slug}`,
    },
  };
}

const dynamicParams = false;
export { dynamicParams };

export function generateStaticParams() {
  return courses.map((item) => ({ slug: item.slug }));
}

const coursesPageComponents = {
  Section,
  List,
  Document,
  FaFilePdf,
  Documents,
  ListItem,
  Note,
  Curriculum,
  Faculty,
  Semester,
  Course,
  CourseContent,
  BsFillCheckCircleFill,
  AiOutlinePause,
  FaCheck,
  FaFileAlt,
  FaDownload,
  BsArrowRightCircleFill,
  FaCoins,
  RxCaretRight,
} as const;

export default async function PagePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const coursesMember = getCourses(slug);

  if (!coursesMember || !coursesMember.body) notFound();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Img src={coursesMember.coverImg || ""} alt="course cover image" width={900} height={600} />
      </div>
      <div className="container">
        <section className={styles.body}>
          <div className={styles.titleBar}>
            <div className={styles.mainTitle}>
              <h1>{coursesMember.title}</h1>
              {coursesMember.applicationClosingDate && (
                <p className={styles.applicationClosingDate}>
                  <strong>Applications Close on -</strong> <span>{coursesMember.applicationClosingDate}</span>
                </p>
              )}
            </div>

            <div className={styles.cta}>
              {coursesMember.flyerLink && (
                <Link target="_blank" href={coursesMember.flyerLink}>
                  <Button kind="SECONDARY">Download Program Flyer</Button>
                </Link>
              )}
              {coursesMember?.applicationLink && (
                <Link target="_blank" href={coursesMember.applicationLink}>
                  <Button kind="PRIMARY" disabled={coursesMember.applicationLink === "#"}>
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
              <span>{coursesMember.duration}</span>
            </div>
            <div className={styles.item}>
              <AiOutlineUnorderedList />
              <p>Total Credits</p>
              <span>{coursesMember.credits}</span>
            </div>
            <div className={styles.item}>
              <BiBuilding />
              <p>School of</p>
              <span>{coursesMember.department}</span>
            </div>
            <div className={styles.item}>
              <GoGlobe />
              <p>Language</p>
              <span>{coursesMember.language}</span>
            </div>
          </div>
          {coursesMember.body && (
            <MDXContent
              code={coursesMember.body}
              components={coursesPageComponents}
              frontmatter={{
                title: coursesMember.title,
                cover: coursesMember.coverImg,
              }}
            />
          )}
          <InquirySection />
        </section>
      </div>
    </section>
  );
}
