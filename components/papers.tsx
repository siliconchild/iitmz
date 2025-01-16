import { AiTwotoneCalendar } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { BsBookmarksFill } from "react-icons/bs";
import { ReactNode } from "react";
import stringReplacer from "@/components/string-replacer";
import styles from "./papers.module.css";

type Paper = {
  title: string;
  authors: string[];
  year: string;
  publisher: string;
};

export function Paper({ paper }: { paper: Paper }) {
  return (
    <div className={styles.paper} key={paper.title}>
      <h4>
        <AiTwotoneCalendar /> {paper.year}
      </h4>
      <h3>{stringReplacer(paper.title)}</h3>
      <div className={styles.authors}>
        {paper.authors.map((author) => (
          <p key={author}>
            <FaUserEdit /> {author}
          </p>
        ))}
      </div>
      <p>
        <BsBookmarksFill /> {paper.publisher}
      </p>
    </div>
  );
}

export function Papers({ children }: { children: ReactNode[] }) {
  return (
    <div className={styles.papers}>
      <h2>Selected Papers</h2>
      {children}
    </div>
  );
}
