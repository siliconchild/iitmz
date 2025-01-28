// components/curriculum.tsx
"use client";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaChalkboardUser } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@/components/accordion";
import styles from "./course-ciriculum-detail.module.scss";

type PropsWithChildren<P = {}> = P & { children?: React.ReactNode };

type CurriculumProps = {
  info?: string[];
};

export const Curriculum = ({ children }: PropsWithChildren<CurriculumProps>) => {
  return (
    <Accordion id="curriculum" title="Curriculum">
      {children}
    </Accordion>
  );
};

type SemesterProps = {
  title: string;
  credits: string;
  initialEntered?: boolean;
};

export const Semester = ({
  title,
  credits,
  initialEntered = false,
  children,
}: PropsWithChildren<SemesterProps>) => {
  return (
    <AccordionItem initialEntered={initialEntered}>
      <div className={styles.head}>
        <h5>{title}</h5>
        <p>{`${credits} credits`}</p>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th title="To know what (L, T, E, P, A, O) is hover your mouse pointer over it">Category</th>
            <th title="Lectures">L</th>
            <th title="Tutorials">T</th>
            <th title="Extended Tutorials">E</th>
            <th title="Practicals">P</th>
            <th title="Outside Classroom">O</th>
            <th title="Total Credits">Total Credits</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </AccordionItem>
  );
};

type CourseProps = {
  courseNo?: string;
  courseName: string;
  category: string;
  credits: {
    L?: string;
    T?: string;
    E?: string;
    P?: string;
    O?: string;
    total: string;
  };
};

export const Course = ({ courseName, category, credits, children }: PropsWithChildren<CourseProps>) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <tr className={styles.courseRow}>
        <td data-cell="Name:" className={styles.courseRowTitle}>
          <div>{courseName}</div>
          {children && (
            <button onClick={() => setShowDetails(!showDetails)} className={styles.detailsButton}>
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
        <td data-cell="Category">{category}</td>
        <td data-cell="Lectures">{credits?.L}</td>
        <td data-cell="Tutorials">{credits?.T}</td>
        <td data-cell="Extended Tutorials">{credits?.E}</td>
        <td data-cell="Practicals">{credits?.P}</td>
        <td data-cell="Outside Classroom">{credits?.O}</td>
        <td data-cell="Total">{credits.total}</td>
      </tr>
      {showDetails && children && (
        <tr>
          <td colSpan={8} className={styles.details}>
            {children}
          </td>
        </tr>
      )}
    </>
  );
};

export const Faculty = ({ name }: { name: string }) => (
  <div className={styles.faculty}>
    <FaChalkboardUser />
    <p>
      Faculty - <span>{name}</span>
    </p>
  </div>
);

export const CourseContent = ({ children }: PropsWithChildren) => (
  <div className={styles.courseContent}>{children}</div>
);
