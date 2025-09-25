import styles from "./news-card.module.scss";
import Img from "./image";
import Link from "next/link";
import Button from "./button";
import { isDriveResourceUrl } from "@/utils/url";

type NewsCardProps = {
  link: string;
  image: string;
  title: string;
  desc: string;
};

export default function NewsCard({ link, image, title, desc }: NewsCardProps) {
  const imageURL = isDriveResourceUrl(image) ? `/api/resource?id=${image}` : image;
  const linkURL = isDriveResourceUrl(link)  ? `/api/resource?id=${link}` : link;

  return (
    <div className={styles.card}>
      <Link target="_blank" href={linkURL || "#"}>
        <Img src={`${imageURL}`} width={200} height={100} alt={`IITM Zanzibar News Image`} />
        <h3>{title}</h3>
        <p>{desc}</p>
        <Button kind="SECONDARY" disabled={link === "#"}>
          Know More
        </Button>
      </Link>
    </div>
  );
}
