import Nav from '../nav/nav'
import styles from './menu.module.scss'


export default function Menu({ setMenu, setIsModal, setIsModalForm }) {
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.closed}
        onClick={() => { setMenu(false)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144m224 0L144 368"/></svg>
      </div>
      <Nav setMenu={setMenu} />
      <div className={styles.list}>
        <ul className={styles.list}>
          <li className={styles.item} onClick={() => setIsModalForm(true) & setMenu(false)}>
              <svg className={styles.icon} stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"></path>
              </svg>
          </li>
          <li className={styles.item} onClick={() => setIsModal(true) & setMenu(false)}>
              <svg className={styles.icon} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
              </svg>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}