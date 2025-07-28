import styles from "./page.module.scss";
import Courses from "@/components/courses";
import Img from "@/components/image";
import { FaUniversity } from "react-icons/fa";
import Button from "@/components/button";
import Link from "next/link";

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
      {/* <div className={styles.header}>
        <Img
          src="/school-eng1w.png"
          alt="Header Image depicting technology"
          width={1400}
          height={900}
        />
        <h1>
          <FaUniversity /> School of Engineering & Science
        </h1>
      </div> */}
      <div className="container">
        <div id="courses">
          <Courses layout="VERTICAL" />
        </div>
      </div>
    </div>
  );
}
