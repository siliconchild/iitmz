"use client";
import parse from "html-react-parser";
import { useState } from "react";

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
      <tr key={course.courseName}>
        <td data-cell="Name:">
          {course.courseName}
          {course.details && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                width: "fit-content",
                fontSize: "1.2rem",
                padding: "0.5rem 1rem",
                marginLeft: "1rem",
                borderRadius: "10px",
              }}
            >
              View Course Details
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
      </tr>
      <tr>
        {showDetails && course.details ? (
          <td colSpan={7} style={{ padding: "2rem" }}>
            <p style={{ textAlign: "left", fontSize: "1.5rem" }}>
              {parse(course.details.content)}
            </p>
          </td>
        ) : null}
      </tr>
    </>
  );
}