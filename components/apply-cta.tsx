import styles from "./apply-cta.module.scss";
import Button from "@/components/button";
import Link from "next/link";

type ApplyCardProps = {
  title?: string;
  description?: string;
  buttonLink?: string;
  buttonText?: string;
};

export default function ApplyCard({
  title = "Ready to Begin Your Journey?",
  description = "Take the first step towards your future at IIT Madras Zanzibar. Applications are now open for the upcoming academic year.",
  buttonLink = "https://admissions.iitmz.ac.in",
  buttonText = "Apply Now",
}: ApplyCardProps) {
  return (
    <div className={styles.applyCard}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.applyCta}>
          <Link target="_blank" href={buttonLink}>
            <Button kind="PRIMARY">{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
