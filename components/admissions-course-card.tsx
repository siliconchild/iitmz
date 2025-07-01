import styles from "./admissions-course-card.module.scss";
import Link from "next/link";
import Button from "./button";

type CourseLink = {
  label: string;
  url: string;
};

type CourseCardProps = {
  title: string;
  links: CourseLink[];
  applicationLink: string;
  applicationDisabled?: boolean;
};

export default function CourseCard({
  title,
  links,
  applicationLink,
  applicationDisabled = false,
}: CourseCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3>{title}</h3>

        <div className={styles.links}>
          {links.map((link, index) => (
            <Link key={index} href={link.url} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.applyButton}>
          {applicationDisabled ? (
            <Button disabled>Apply Now</Button>
          ) : (
            <Link target="_blank" href={applicationLink}>
              <Button>Apply Now</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
