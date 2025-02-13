import { AiTwotoneCalendar } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { BsBookmarksFill } from "react-icons/bs";
import { ReactElement } from "react";
import stringReplacer from "@/components/string-replacer";
import styles from "./papers.module.scss";

type PaperProps = {
  title: string;
  authors: string[];
  year: string;
  publisher: string;
};

export function Paper({ title, authors, year, publisher }: PaperProps) {
  return (
    <div className={styles.paper} key={title}>
      <h4>
        <AiTwotoneCalendar /> {year}
      </h4>
      <h3>{stringReplacer(title)}</h3>
      <div className={styles.authors}>
        {authors.map((author) => (
          <p key={author}>
            <FaUserEdit /> {author}
          </p>
        ))}
      </div>
      <p className={styles.publisher}>
        <BsBookmarksFill /> {publisher}
      </p>
    </div>
  );
}

type PapersProps = {
  children: ReactElement<typeof Paper> | ReactElement<typeof Paper>[];
};

export function Papers({ children }: PapersProps) {
  return (
    <section className={styles.papers}>
      <h2>Selected Papers</h2>
      {children}
    </section>
  );
}
