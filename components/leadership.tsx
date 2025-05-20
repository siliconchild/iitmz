import styles from "./leadership.module.scss";
import Img from "./image";
import Link from "next/link";

export default function Leadership() {
  return (
    <div className={styles.section}>
      <h2 className="section-title center">IITM Zanzibar Leadership</h2>
      <div className="container">
        <Link href="/schools/engineering-and-science/faculty/prof-preeti-aghalayam">
          <div className={styles.card}>
            <Img
              src="/preeti.jpg"
              height={200}
              width={200}
              alt="Image of Professor Preeti Aghalayam"
            />
            <h3>Prof Preeti Aghalayam</h3>
            <h4>Director in Charge</h4>
            <p>Dean of School of Engineering & Science</p>
          </div>
        </Link>
        <Link href="/schools/engineering-and-science/faculty/prof-suresh-akkihebbal">
          <div className={styles.card}>
            <Img
              src="/Prof-Suresh-Akkihebbal.jpg"
              height={200}
              width={200}
              alt="Image of Professor Suresh Akkihebbal"
            />
            <h3>Prof. K. Suresh Akkihebbal</h3>
            <h4>Vice President and Professor-in-Charge </h4>
            <p>Academic Administration</p>
          </div>
        </Link>
        <Link href="/schools/engineering-and-science/faculty/prof-ligy-philip">
          <div className={styles.card}>
            <Img
              src="/ligy-1.png"
              height={200}
              width={200}
              alt="Image of Professor Ligy Philip"
            />
            <h3>Prof Ligy Philip</h3>
            <h4>Professor-in-charge (Infrastructure)</h4>
          </div>
        </Link>
        <Link href="/schools/engineering-and-science/faculty/dr-paresh-pattani">
          <div className={styles.card}>
            <Img
              src="/paresh.JPG"
              height={200}
              width={200}
              alt="Photo of Dr. Paresh Pattani"
            />
            <h3>Dr. Paresh Pattani</h3>
            <h4>Vice President</h4>
            <p>Institutional Development</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
