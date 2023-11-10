import Testimonials from "@/components/testimonials";
import styles from "./page.module.scss";
import "blaze-slider/dist/blaze.css";

export const metadata = {
  title: "Testimonials",
  description:
    "Learn More From The Experience of Our Students. Check Out Student Testimonials Here. ",
  alternates: {
    canonical: `testimonials`,
  },
};

export default function TestimonialsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title center line">
          What students <br /> Think about IIT Madras
        </h1>
        <Testimonials
          type="SECONDARY"
          slidesToShow={3}
          slideGap="20px"
          showTracks={true}
        />
      </div>
    </div>
  );
}
