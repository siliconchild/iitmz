import styles from "./courses.module.scss";
import { AiOutlineUnorderedList, AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
import Button from "./button";
import Img from "./image";
import { courses } from "#site/content";

type CoursesProps = {
  layout?: "HORIZONTAL" | "VERTICAL";
};

export default function Courses({ layout = "HORIZONTAL" }: CoursesProps) {
  return (
    <section
      className={`${styles.section}  ${
        layout === "VERTICAL" && styles.vertical
      }`}
    >
      <div className="container">
        <h2 className="section-title center line">Academic Programs</h2>
        <div className={styles.grid}>
          {courses
            .filter((course) => course.type === "oncampus")
            .map((course) => (
              <div className={styles.item} key={course.slug}>
                <div className={styles.image}>
                  <Img
                    src={course.cardImg}
                    width={270}
                    height={320}
                    style={{ objectFit: "cover" }}
                    alt={course.title || "Course image"}
                  />
                </div>
                <div className={styles.content}>
                  <Link href={`/schools/engineering-and-science/${course.slug}`}>
                    <h3>{course.title}</h3>
                  </Link>
                  <p>{course.cardDesc}</p>

                  <div className={styles.footer}>
                    {!course.comingSoon && course.duration && (
                      <div>
                        <AiOutlineCalendar />
                        <span>{course.duration}</span>
                      </div>
                    )}
                    {!course.comingSoon && course.credits && (
                      <div>
                        <AiOutlineUnorderedList />
                        <span>{`${course.credits} Credits`}</span>
                      </div>
                    )}


                    {!course.comingSoon && (
                      <Link
                        href={`/schools/engineering-and-science/${course.slug}`}
                      >
                        <Button kind="SECONDARY">More Details</Button>
                      </Link>
                    )}


                    {!course.comingSoon && course.applicationLink && (
                       <Link target="_blank" href={course.applicationLink}>
                         <Button>Apply now</Button>
                       </Link>
                    )}
                    
                    {!course.comingSoon && !course.applicationLink && (
                        <Button disabled={true}>Apply now</Button>
                    )}


                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}