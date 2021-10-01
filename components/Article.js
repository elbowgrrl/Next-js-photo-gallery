import styles from '../styles/Article.module.css'

export default function Article() {

  return (
    <article className={styles.article}>
      <header>
      </header>
      <body>

      </body>
      <footer>
        <span className={styles.span}>Nandhaka Pieris</span>
        <span className={styles.span}>2015-05-01</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </footer>
    </article>
  )
}