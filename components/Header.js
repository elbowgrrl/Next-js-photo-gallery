import styles from '../styles/Header.module.css'
import Image from "next/image"

export default function Header(props) {
  return(
  <article className={styles.article}>
    <h1>{props.name}</h1>
    <Image
          alt="gallery image"
          src="/img/profile.jpeg"
          layout="fixed"
          width="400"
          height="600"
        />
  </article>
  )
}