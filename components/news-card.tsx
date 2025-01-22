import styles from "./news-card.module.scss";
import Img from "./image";
import Link from "next/link";
import Button from "./button";

type NewsCardProps = {
  link: string;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  desc: string;
};

export default function NewsCard({ link, image, title, desc }: NewsCardProps) {
  return (
    <div className={styles.card}>
      <Link target="_blank" href={link}>
        <Img src={image.url} width={200} height={100} alt={image.alt} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <Button kind="SECONDARY" disabled={link === "#"}>Know More</Button>
      </Link>
    </div>
  );
}
