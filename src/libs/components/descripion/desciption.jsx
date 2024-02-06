import Button from "../button/button"
import styles from "./desciption.module.scss"

export default function Description() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.text}>
          Whether you're looking for a 
          <span className={styles.text_color}> unique gift </span>
          or a beautiful addition to your home decor, String World has you covered.
        </p>
        <Button text={"Buy for £ 69"} />
      </div>
    </section>
  )
}