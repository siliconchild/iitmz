import styles from "./course-components.module.scss";
import Link from "next/link";

export const Section = ({
  children,
  id,
}: {
  children?: React.ReactNode; // children is now optional
  id: string;
}) => (
  <div id={id} className={styles.section}>
    {children}
  </div>
);

export const List = ({ children }: { children?: React.ReactNode }) => (
  <ul className={styles.list}>{children}</ul>
);

export const ListItem = ({ children }: { children?: React.ReactNode }) => (
  <li className={styles.listItem}>{children}</li>
);

export const Note = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.note}>{children}</div>
);

export const Documents = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.documents}>{children}</div>
);

export const Document = ({
  href,
  children,
}: {
  href?: string; // href is now optional
  children?: React.ReactNode; // children is now optional
}) => {
  // If href is provided, render a clickable Link
  if (href) {
    return (
      <Link href={href} target="_blank" className={styles.document}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a non-clickable div
  return <div className={styles.document}>{children}</div>;
};