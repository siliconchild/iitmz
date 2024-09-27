"use client";
import parse from "html-react-parser";
import { AiOutlinePlus , AiOutlineMinus} from "react-icons/ai";
import { FaChalkboardUser } from "react-icons/fa6";
import { useState } from "react";
import styles from "./course-ciriculum-detail.module.scss";

type CourseDetailProps = {
  course: Course;
}

type Course = {
  courseNo?: string;
  courseName: string;
  category: string;
  L?: string;
  T?: string;
  E?: string;
  P?: string;
  O?: string;
  A?: string;
  totalCredits: string;
  details?: {
    content: string;
    faculty: string;
  };
}

export default function CourseCiriculumDetail({course}: CourseDetailProps) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <tr key={course.courseName} className={styles.courseRow}>
        <td data-cell="Name:" className={styles.courseRowTitle}>
          <div>{course.courseName}</div>
          {course.details && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={styles.detailsButton}
            >
              {showDetails ? (
                <>
                  Hide Course Details
                  <AiOutlineMinus />
                </>
              ) : (
                <>
                  View Course Details
                  <AiOutlinePlus />
                </>
              )}
            </button>
          )}
        </td>
        <td data-cell="Category">{course.category}</td>
        <td data-cell="Lectures">{course.L}</td>
        <td data-cell="Tutorials">{course.T}</td>
        <td data-cell="Extended Tutorials">{course.E}</td>
        {"P" in course && <td data-cell="Practicals">{course.P}</td>}
        {"A" in course && <td data-cell="A">{course.A}</td>}
        <td data-cell="Outside Classroom">{course.O}</td>
        <td data-cell="Total">{course.totalCredits}</td>
        {course.details && (
          <div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={styles.detailsButtonMobile}
            >
              {showDetails ? (
                <>
                  Hide Course Details
                  <AiOutlineMinus />
                </>
              ) : (
                <>
                  View Course Details
                  <AiOutlinePlus />
                </>
              )}
            </button>
          </div>
        )}
      </tr>
      <tr>
        {showDetails && course.details ? (
          <td colSpan={7} className={styles.details}>
            <div className={styles.faculty}>
              <FaChalkboardUser />
              <p>
                Faculty - <span>{course.details.faculty}</span>
              </p>
            </div>
            <p>{parse(course.details.content)}</p>
          </td>
        ) : null}
      </tr>
    </>
  );
}