import SkillsContainer from "@/components/skills-container";
import styles from "./page.module.scss";
import { skills } from "@/data/skills";

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
            <h1>Skilling Program</h1>
          </div>
          <div className={styles.body}>
              <SkillsContainer list={skills} />
          </div>
        </div>
      </div>
  );
}
