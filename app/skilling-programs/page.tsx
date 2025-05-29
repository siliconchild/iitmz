// import SkillsContainer from "@/components/skills-container";
import SkillPrograms from "@/components/skillprogram";
import styles from "./page.module.scss";
import Img from "@/components/image";
import Slider from "@/components/slider";
// import { skills } from "@/data/skills";

export const metadata = {
  title: "Skilling Program",
  description:
    "Check Out The Skilling program.",
  alternates: {
    canonical: `skilling-program`,
  },
};

export default function SkillsPage() {
  return (
<div className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <h1>Skilling and Certification Programs</h1>
            <p>
            IITM Zanzibar is working with a number of partners to offer online and offline skilling courses in various domains. Several of these have been on-demand programs for corporates or ministry departments. IITM Zanzibar is expanding the portfolio of offerings, and will include asynchronous and synchronous course material spanning several domains.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Slider showTracks={true}>
              {Array.from({ length: 12 }).map((_, index) => (
                <Img
                  key={`admission-image-${index + 1}`}
                  src={`/skilling-prg/${index + 1}.png`}
                  width={800}
                  height={450}
                  alt={`IITM Zanzibar campus life ${index + 1}`}
                  loading="eager"
                  objectFit="cover"
                />
              ))}
            </Slider>
          </div>
          <div className={styles.body}>
              {/* <SkillsContainer list={skills} /> */}
              <SkillPrograms />
          </div>
        </div>
      </div>
  );
}
