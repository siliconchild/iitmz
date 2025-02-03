import styles from "./course-components.module.scss";
export const Section = ({ children, id }: { children: React.ReactNode; id: string }) => (
  <div id={id} className={styles.section}>
    {children}
  </div>
);

export const List = ({ children }: { children: React.ReactNode }) => (
  <ul className={styles.list}>{children}</ul>
);

export const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className={styles.listItem}>{children}</li>
);

export const Note = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.note}>{children}</div>
);

export const Documents = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.documents}>{children}</div>
);

export const Document = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className={styles.document}>
    {children}
  </a>
);
