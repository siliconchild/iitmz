import styles from "./apply-cta.module.scss";
import Button from "@/components/button";
import Link from "next/link";

type ApplyCardProps = {
  title: string;
  description?: string;
  buttonLink?: string;
  buttonText: string;
  buttonDisabled?: boolean;
};

export default function ApplyCard({
  title,
  description,
  buttonLink = "#",
  buttonText,
  buttonDisabled = false,
}: ApplyCardProps) {
  return (
    <section className={styles.applyCard}>
      <div className={styles.content}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {buttonLink && (
          <div className={styles.applyCta}>
            {!buttonDisabled && (
              <Link target="_blank" href={buttonLink}>
                <Button kind="PRIMARY">{buttonText}</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
