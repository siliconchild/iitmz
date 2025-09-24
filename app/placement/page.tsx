import { PlacementComp } from "@/components/student-placement";
import styles from "./page.module.scss";
import Img from "@/components/image";

export const metadata = {
  title: "Student Placement",
  description: "Check Out The Student Placement.",
  alternates: {
    canonical: `student-placement`,
  },
};

export default function PlacementPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Student Placement</h1>
        </div>
        <div className={styles.images}>
          <Img
            width={1200}
            height={600}
            src="/degree-distribution/2.jpeg"
            alt=""
            loading="eager"
          />
        </div>
        {/*<div className={styles.body}>
          <p>Information will be updated soon. Stay tuned for more details !</p>
        </div>*/}
        <PlacementComp />
      </div>
    </div>
  );
}
