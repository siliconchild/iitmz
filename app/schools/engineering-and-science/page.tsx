import styles from "./page.module.scss";
import Courses from "@/components/courses";
import Img from "@/components/image";
import { FaUniversity } from "react-icons/fa";
import Button from "@/components/button";
import Link from "next/link";
import faculty from "@/data/faculty";

export const metadata = {
  title: "School Of Engineering & Science",
  description:
    "Learn More About The Academic Programs, Advisory Board, and Faculty at the School Of Engineering and Science, IIT Madras Zanzibar Campus. ",
  alternates: {
    canonical: `schools/engineering-and-science`,
  },
};

export default function AcademicsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Img
          src="/school-eng1w.png"
          alt="Header Image depicting technology"
          width={1400}
          height={900}
        />
        <h1>
          <FaUniversity /> School of Engineering & Science
        </h1>
      </div>
      <div className="container">
        <div id="pac" className={styles.pac}>
          <h2 className="section-title center line">
            Program Advisory Committee
          </h2>
          <div>
            <div className={styles.card}>
              <Img
                src="/sharat.jpg"
                alt="Photo of Prof Sharat Chandran"
                width={250}
                height={250}
              />
              <h3>Prof Sharat Chandran</h3>
              <h4>IIT, Bombay</h4>
              <Link target="_blank" href="https://www.cse.iitb.ac.in/~sharat/">
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>

            <div className={styles.card}>
              <Img
                src="/pandurangan.jpeg"
                alt="Photo of Prof Pandurangan"
                width={250}
                height={250}
              />
              <h3>Prof C Pandurangan</h3>
              <h4>IISc, Bangalore</h4>
              <Link
                target="_blank"
                href="https://odaa.iisc.ac.in/prof-pandurangan-medal/"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
            <div className={styles.card}>
              <Img
                src="/mark.png"
                alt="Photo of Prof Mark Lee"
                width={250}
                height={250}
              />
              <h3>Prof Mark Lee</h3>
              <h4>University of Birmingham</h4>
              <Link
                target="_blank"
                href="https://www.birmingham.ac.uk/staff/profiles/computer-science/academic-staff/lee-mark.aspx"
              >
                <Button kind="SECONDARY">Know More</Button>
              </Link>
            </div>
          </div>
        </div>
        <div id="courses">
          <Courses layout="VERTICAL" />
        </div>
        <div id="faculty" className={styles.faculty}>
          <h2 className="section-title center line">Faculty</h2>
          <div>
            {faculty.map((facultyMember) => (
              <div className={styles.card} key={facultyMember.slug}>
                <Img
                  src={facultyMember.img}
                  alt={`Photo of ${facultyMember.name}`}
                  width={200}
                  height={200}
                />
                <h3>{facultyMember.name}</h3>
                <h4>{facultyMember.title}</h4>
                {facultyMember.titlesec && <h4>{facultyMember.titlesec}</h4>}
                <Link
                  href={`/schools/engineering-and-science/faculty/${facultyMember.slug}`}
                >
                  <Button kind="SECONDARY">Know More</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
