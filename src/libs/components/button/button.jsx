import styles from "./button.module.scss"

export default function Button({ text }) {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  )
}