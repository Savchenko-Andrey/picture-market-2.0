import styles from './nav.module.scss'
import { List } from '@/libs/shared/nav-list'

export default function Nav() {
  
  return (
    <ul className={styles.list}>
      {List.map(({ title, id }) => (
        <li key={id} className={styles.item}>
          <a href={id} className={styles.link}>{title}</a>
        </li>
      ))}
    </ul>
  )
}