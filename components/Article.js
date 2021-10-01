import styles from "../styles/Article.module.css";
import Image from "next/image";

export default function Article(props) {
  return (
    <article className={styles.article}>
      <body>
      <Image
          alt="gallery image"
          src="/img/landscape1.jpeg"
          layout="fixed"
          width="400"
          height="300"
        />
      </body>
      <footer className={styles.footer}>
        <span className={styles.span}>{props.title}</span>
        <span className={styles.span}>{props.date}</span>
        <p>{props.description}</p>
      </footer>
    </article>
  );
}
