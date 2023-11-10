import styles from "./courses.module.scss";
import { AiOutlineUnorderedList, AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
import Button from "./button";
import Img from "./image";
import Image from "next/image";

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
          <div className={styles.item}>
            <Img
              src="/course3.jpg"
              width={270}
              height={320}
              style={{ objectFit: "cover" }}
              alt="Image of human and machine"
            />

            <div className={styles.content}>
              <a href="course-details.html">
                <h3>BS in Data Science & AI</h3>
              </a>
              <p>
                The program will deliver a comprehensive curriculum in Data
                Science and Artificial Intelligence, designed to teach in-demand
                skills necessary to excel in this rapidly evolving field. Add:
                The program involves foundational courses like probability
                theory, linear algebra and statistics, moving onto higher level
                professional courses. The course will also involve hands-on
                projects that help the students prepare for a future filled with
                limitless possibilities in DS & AI.
              </p>

              <div className={styles.footer}>
                <div>
                  <AiOutlineCalendar />
                  <span>4 Years</span>
                </div>
                <div>
                  <AiOutlineUnorderedList />
                  <span>433 Credits</span>
                </div>
                <Link href="/schools/engineering-and-science/bs-data-science-and-ai">
                  <Button kind="SECONDARY">More Details</Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://admissions.ge.iitm.ac.in/iitm-application-form-zanzibar"
                >
                  <Button>Apply now</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <Img
              src="/course4.jpg"
              width={270}
              height={320}
              style={{ objectFit: "cover" }}
              alt="Image of human and machine"
            />

            <div className={styles.content}>
              <a href="course-details.html">
                <h3>MTech in Data Science & AI</h3>
              </a>

              <p>
                This program presents a rigorous and comprehensive curriculum
                designed to cultivate expertise in DS & AI. Along with core
                courses like Mathematical Foundations of Data Science,
                Programming and Data Structures and a selection of supplementary
                electives. There is a heavy emphasis on hands-on lab work and
                industry driven projects, students acquire research aptitude
                along with the necessary skills to succeed in the job market.
              </p>

              <div className={styles.footer}>
                <div>
                  <AiOutlineCalendar />
                  <span>2 Years</span>
                </div>
                <div>
                  <AiOutlineUnorderedList />
                  <span>190 Credits</span>
                </div>
                <Link href="/schools/engineering-and-science/mtech-data-science-and-ai">
                  <Button kind="SECONDARY">More Details</Button>
                </Link>
                <Link
                  target="_blank"
                  href="https://admissions.ge.iitm.ac.in/iitm-zanzibar-campus-application-form-m-tech"
                >
                  <Button> Apply now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
