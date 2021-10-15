import styles from '../styles/Header.module.css'
import Image from "next/image"

export default function Header(props) {
  return(
  <article className={styles.article}>
    <h1 className={styles.titleText}>{props.name}</h1>
    {/* <img src="/img/profile.jpeg" alt="Photo of photographer" id="bio-photo"/> */}
    <div style={{borderRadius: '150px', overflow: 'hidden', width: '300px',
          height: '300px'}}>
    
    <Image
          alt="gallery image"
          src="/img/profile.jpeg"
          layout="responsive" 
          width="300"
          height="300"
        />
        </div>
        <p className={styles.bodyText}>{props.bio}</p>
        
        <span className={styles.bodyText}>{props.phone}</span>
        <span className={styles.bodyText}>{props.email}</span>
        
  </article>
  )
}