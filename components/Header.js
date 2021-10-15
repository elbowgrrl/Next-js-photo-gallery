import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header(props) {
  return (
    <article className={styles.article}>
      <div
        style={{
          borderRadius: "150px",
          overflow: "hidden",
          width: "300px",
          height: "300px",
        }}
      >
        <Image
          alt="gallery image"
          src="/img/profile.jpeg"
          layout="responsive"
          width="300"
          height="300"
        />
      </div>
      <div className={styles.infoContainer}>
        <h1>{props.name}</h1>
        <div>{props.bio}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
      </div>
    </article>
  );
}
