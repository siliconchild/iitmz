import { ReactNode } from "react";
import styles from "./book.module.css";
import Img from "@/components/image";

type Book = {
  title: string;
  publisher: string;
  year: number;
  cover: string;
};

export function Book({ book }: { book: Book }) {
  return (
    <li key={book.title}>
      <Img src={book.cover} height={150} width={100} alt={`Book Cover of ${book.title}`} />
      <div>
        <h4>{book.title}</h4>
        <p>{book.publisher}</p>
        <h5>{book.year}</h5>
      </div>
    </li>
  );
}

export function Books({ children }: { children: ReactNode }) {
  return (
    <div className={styles.books}>
      <h2>Books Published</h2>
      <ul>{children}</ul>
    </div>
  );
}
