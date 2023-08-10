import { createElement } from "react";
import styles from "./social-media.module.scss";
import socials from "@/data/socials";
import Link from "next/link";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { IconType } from "react-icons";

type SocialIcons = {
  [key: string]: IconType;
};

const socialIcons: SocialIcons = {
  facebook: BsFacebook,
  linkedin: BsLinkedin,
  instagram: BsInstagram,
  twitter: BsTwitter,
  youtube: BsYoutube,
};

type SocialMediaProps = {
  kind: "FULL" | "MINIMAL";
};

export default function SocialMedia({ kind }: SocialMediaProps) {
  return (
    <div
      className={`${styles.section} ${kind === "MINIMAL" && styles.minimal}`}
    >
      <div className={kind === "FULL" ? `container` : ``}>
        <h2>
          Follow us <br /> on Social Media
        </h2>
        {socials.map((social) => (
          <Link key={social.icon} href={social.link} target="_blank">
            <div className={styles.social}>
              {createElement(socialIcons[social.icon])}
              <p>{social.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
