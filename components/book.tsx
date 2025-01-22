import { ReactElement } from "react";
import styles from "./book.module.scss";
import Img from "@/components/image";

type BookProps = {
  title: string;
  publisher: string;
  year: number;
  cover: string;
};

export function Book({ title, publisher, year, cover }: BookProps) {
  return (
    <li key={title}>
      <Img src={cover} height={150} width={100} alt={`Book Cover of ${title}`} />
      <div>
        <h4>{title}</h4>
        <p>{publisher}</p>
        <h5>{year}</h5>
      </div>
    </li>
  );
}

type BooksProps = {
  children: ReactElement<typeof Book> | ReactElement<typeof Book>[];
};

export function Books({ children }: BooksProps) {
  return (
    <div className={styles.books}>
      <h2>Books Published</h2>
      <ul>{children}</ul>
    </div>
  );
}
