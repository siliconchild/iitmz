import styles from "./admissions-course-card.module.scss";
import Link from "next/link";
import Button from "./button";
import Img from "./image";

type CourseLink = {
  label: string;
  url: string;
};

type CourseCardProps = {
  title: string;
  imageSrc: string;
  links: CourseLink[];
  applicationLink: string;
  applicationDisabled?: boolean;
};

export default function CourseCard({
  title,
  imageSrc,
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
            <Link key={index} href={link.url} className={styles.link} target="_blank">
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.applyButton}>
          <Link target="_blank" href={applicationLink}>
            <Button disabled={applicationDisabled}>Apply Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
