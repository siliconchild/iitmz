import ResearchHighlights from "@/components/research";
import styles from "./page.module.scss";
import Button from "@/components/button";

export const metadata = {
  title: "Innovative Research",
  description:
    "Explore Cutting-edge Research at IIT Madras Zanzibar. Join Our Vibrant Ecosystem. Learn More.",
  alternates: {
    canonical: `research`,
  },
};

export default function ResearchPage() {
  return (
    <div className={styles.page}>
           <div className="container">
              <div className={styles.header}>
              <h1>Research Highlights</h1>
              </div>
              <div className={styles.body}>
        <ResearchHighlights />
        </div>
        </div>
    </div>
  );
}
