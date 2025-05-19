import styles from "./news-card.module.scss";
import Img from "./image";
import Link from "next/link";
import Button from "./button";

type NewsCardProps = {
  link: string;
  image: string;
  title: string;
  desc: string;
  apiImage?: boolean;
};

export default function NewsCard({ link, image, title, desc, apiImage=true }: NewsCardProps) {
  const imgPrefix = apiImage ? "/api/resource?id=" : "";
  return (
    <div className={styles.card}>
      <Link target="_blank" href={link || "#"}>
        <Img src={`${imgPrefix}${image}`} width={200} height={100} alt={`IITM Zanzibar News Image`} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <Button kind="SECONDARY" disabled={link === "#"}>
          Know More
        </Button>
      </Link>
    </div>
  );
}
