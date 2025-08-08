import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import styles from "./page.module.scss";
import {
  Curriculum,
  Semester,
  Course,
  CourseContent,
  Faculty,
} from "@/components/cirriculum";
import Img from "@/components/image";
import Link from "next/link";
import { BiBuilding } from "react-icons/bi";
import { GoGlobe } from "react-icons/go";
import Button from "@/components/button";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePause } from "react-icons/ai";
import { AiOutlineUnorderedList, AiOutlineCalendar } from "react-icons/ai";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineDateRange } from "react-icons/md";
import {
  FaCheck,
  FaDownload,
  FaFilePdf,
  FaCoins,
  FaClock,
  FaGlobe,
} from "react-icons/fa6";
import { FaDesktop, FaFileAlt, FaChalkboardTeacher } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import InquirySection from "@/components/admissions-enquiry";
import ApplyCard from "@/components/apply-cta";
import { RxCaretRight } from "react-icons/rx";
import {
  Section,
  List,
  ListItem,
  Document,
  Documents,
  Note,
} from "@/components/course-components";
import { ISTDate } from "@/utils/date";
import { courses } from "#site/content";

function getCourses(coursesSlug: string) {
  return courses.find((item) => item.slug === coursesSlug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const coursesMember = courses.find(
    (coursesMember) => coursesMember.slug === slug,
  );
  if (!coursesMember) return {};
  return {
    title: `${coursesMember?.title} | Courses`,
    description:
      coursesMember?.seo?.desc ||
      `IITM Zanzibar ${coursesMember.title} course information`,
    alternates: {
      canonical: `schools/engineering-and-science/courses/${slug}`,
    },
  };
}

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
  FaClock,
  FaDesktop,
  FaGlobe,
  LiaChalkboardTeacherSolid,
  MdOutlineDateRange,
  FaChalkboardTeacher,
  InquirySection,
  ApplyCard,
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

  if (!coursesMember) {
    notFound();
  }

  const applicationClosingDate = ISTDate(coursesMember.applicationClosingDate);
  const currentDate = ISTDate();

  // If course is marked as coming soon, display minimal content
  if (coursesMember.comingSoon) {
    return (
      <section className={styles.section}>
        <div className="container">
          <section className={styles.body}>
            <div className={styles.titleBar}>
              <div className={styles.mainTitle}>
                <h1>{coursesMember.title}</h1>
              </div>
            </div>
            <div className={styles.comingSoon}>
              <div className={styles.comingSoonContent}>
                <div className={styles.comingSoonIcon}>🚀</div>
                <h2>Coming Soon</h2>
                <p>
                  {coursesMember.cardDesc ||
                    "This course is currently under development. Stay tuned for more details."}
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }

  if (!coursesMember.body) {
    notFound();
  }

  // Regular course display when not coming soon
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Img
          src={coursesMember.coverImg || ""}
          alt="course cover image"
          width={900}
          height={600}
        />
      </div>
      <div className="container">
        <section className={styles.body}>
          <div className={styles.titleBar}>
            <div className={styles.mainTitle}>
              {coursesMember.type === "online" && (
                <span className={styles.onlineBadge}>
                  Web Enabled Online Course
                </span>
              )}
              <h1>{coursesMember.title}</h1>
              <p className={styles.applicationClosingDate}>
                {applicationClosingDate >= currentDate ? (
                  <>
                    <strong>Applications Close on - </strong>
                    <span>{coursesMember.applicationClosingDate}</span>
                  </>
                ) : (
                  <>
                    <strong>Applications Closed – </strong>
                    <span>
                      Reopening in Jan{" "}
                      {applicationClosingDate.getFullYear() + 1}
                    </span>
                  </>
                )}
              </p>
            </div>

            <div className={styles.cta}>
              {coursesMember.flyerLink && (
                <Link target="_blank" href={coursesMember.flyerLink}>
                  <Button kind="SECONDARY">Download Program Flyer</Button>
                </Link>
              )}
              {coursesMember?.applicationLink && (
                <Link
                  target="_blank"
                  href={
                    coursesMember.applicationDisabled
                      ? "#"
                      : coursesMember.applicationLink
                  }
                >
                  <Button
                    kind="PRIMARY"
                    disabled={coursesMember.applicationDisabled}
                  >
                    Apply Now
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className={styles.meta}>
            {coursesMember.duration && (
              <div className={styles.item}>
                <AiOutlineCalendar />
                <p>Duration</p>
                <span>{coursesMember.duration}</span>
              </div>
            )}
            {(coursesMember.credits || coursesMember.type) && (
              <div className={styles.item}>
                <AiOutlineUnorderedList />
                <p>{coursesMember.credits ? "Total Credits" : "Medium"}</p>
                <span>{coursesMember.credits || coursesMember.type}</span>
              </div>
            )}
            {coursesMember.department && (
              <div className={styles.item}>
                <BiBuilding />
                <p>School of</p>
                <span>{coursesMember.department}</span>
              </div>
            )}
            {coursesMember.language && (
              <div className={styles.item}>
                <GoGlobe />
                <p>Language</p>
                <span>{coursesMember.language}</span>
              </div>
            )}
          </div>
          {/* The check !coursesMember.body above ensures body exists here */}
          <MDXContent
            code={coursesMember.body!} // Use non-null assertion as we've checked it
            components={coursesPageComponents}
            frontmatter={{
              title: coursesMember.title,
              cover: coursesMember.coverImg,
            }}
          />
        </section>
      </div>
    </section>
  );
}
