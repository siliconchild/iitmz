import styles from "./page.module.scss";
import Img from "@/components/image";
import { FaUniversity } from "react-icons/fa";
import Button from "@/components/button";
import Link from "next/link";
import { faculty } from "#site/content";

const vistingFaculty = faculty.filter(
  (facultyMember) => facultyMember.type === "Visiting Faculty",
);
const permanentFaculty = faculty.filter(
  (facultyMember) => facultyMember.type === "Permanent Faculty",
);
const vistingFacultyGroupedByYear = vistingFaculty.reduce(
  (acc: Record<string, (typeof vistingFaculty)[number][]>, facultyMember) => {
    let years: string[] = [];

    if (facultyMember.year !== undefined && facultyMember.year !== null) {
      if (Array.isArray(facultyMember.year)) {
        years = facultyMember.year.map(String);
      } else {
        years = [String(facultyMember.year)];
      }
      for (const key of years) {
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(facultyMember);
      }
    }

    return acc;
  },
  {} as Record<string, (typeof vistingFaculty)[number][]>, // Explicitly type the initial value
);

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
      <div className="container">
        <div id="faculty" className={styles.faculty}>
          {permanentFaculty && (
            <>
              <h2 className="section-title center line">Faculty</h2>
              <div className={styles.cardContainer}>
                {permanentFaculty
                  .sort((a, b) => a.order - b.order)
                  .map((facultyMember) => (
                    <div className={styles.card} key={facultyMember.slug}>
                      <Img
                        src={`/${facultyMember.img}`}
                        alt={`Photo of ${facultyMember.name}`}
                        width={200}
                        height={200}
                      />
                      <h3>{facultyMember.name}</h3>
                      <h4>{facultyMember.title}</h4>
                      {facultyMember.subtitle && (
                        <h4>{facultyMember.subtitle}</h4>
                      )}
                      {facultyMember.body && (
                        <Link
                          href={`/schools/engineering-and-science/faculty/${facultyMember.slug}`}
                        >
                          <Button kind="SECONDARY">Know More</Button>
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            </>
          )}
          {vistingFaculty && (
            <>
              <h2 className="section-subtitle center line mt-6">
                Visiting Faculty
              </h2>
              {Object.keys(vistingFacultyGroupedByYear)
                .sort((a, b) => Number(b) - Number(a))
                .map((year) => (
                  <div key={year}>
                    <h3 className="section-subheading center">{`AY ${year}-${
                      Number(year) + 1
                    }`}</h3>
                    <div className={styles.cardContainer}>
                      {vistingFacultyGroupedByYear[year]
                        .sort((a, b) => a.order - b.order)
                        .map((facultyMember) => (
                          <div className={styles.card} key={facultyMember.slug}>
                            <Img
                              src={`/${facultyMember.img}`}
                              alt={`Photo of ${facultyMember.name}`}
                              width={200}
                              height={200}
                            />
                            <h3>{facultyMember.name}</h3>
                            <h4>{facultyMember.title}</h4>
                            {facultyMember.subtitle && (
                              <h4>{facultyMember.subtitle}</h4>
                            )}
                            {/* External link for visiting faculty */}
                            {facultyMember.link && (
                              <Link href={facultyMember.link} target="_blank">
                                <Button kind="SECONDARY">Know More</Button>
                              </Link>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
