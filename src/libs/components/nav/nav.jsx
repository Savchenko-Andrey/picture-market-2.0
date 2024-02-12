import styles from './nav.module.scss'

export default function Nav({setMenu}) {
  
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
          <a className={styles.link} onClick={()=> setMenu(false)}>Home</a>
      </li>
        <li className={styles.item}>
          <a href="#about" className={styles.link} onClick={()=> setMenu(false)}>About Us</a>
      </li>
      <li className={styles.item}>
          <a href="#gallery" className={styles.link} onClick={()=> setMenu(false)}>Gallery</a>
      </li>
      <li className={styles.item}>
          <a className={styles.link}>Order</a>
        </li>
    </ul>
  )
}