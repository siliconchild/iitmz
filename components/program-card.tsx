import Img from "@/components/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { LuArrowRight } from "react-icons/lu";
import styles from "./program-card.module.scss";

type cardItem = {
  name: string;
  img: string;
  links: {
    label: string;
    href?: string;
    highlight?: boolean;
    external?: boolean;
  }[];
};

export default function ProgramCard(item: cardItem) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Img src={item.img} alt={item.name} width={450} height={250} placeholder="blur" />
        <p>{item.img}</p>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{item.name}</h2>
        <ul className={styles.linkList}>
          {item.links
            .filter((link) => link.href)
            .map((link, index) => (
              <li key={index}>
                <Link href={link.href!} className={link.highlight ? styles.primary : ""}>
                  {link.label}
                  {link.external ? <GoLinkExternal /> : <LuArrowRight />}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
