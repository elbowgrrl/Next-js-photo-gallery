import styles from "../styles/Article.module.css";
import Image from "next/image";

export default function Article() {
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
        <span className={styles.span}>Nandhaka Pieris</span>
        <span className={styles.span}>2015-05-01</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </footer>
    </article>
  );
}
