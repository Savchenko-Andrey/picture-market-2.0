import Image from "next/image";

import styles from "./footer.module.scss"
import logoWhite from '@/assets/logo-white.png'

export default function Description() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_logo}>
          <Image
            src={logoWhite}
            alt="logo"
            priority={true}
            loading="eager"
          />
        </div>
        <p className={styles.adress}>48 Epstein Road SE28 8EJ London United Kingdom</p>
        <ul className={styles.list}>
          <li><a className={styles.adress} href="mailto:designer@string-world.com">Email: designer@string-world.com</a></li>
          <li><a className={styles.adress} href="tel:+447455871180">Telephone: +447455871180</a></li>
        </ul>
      </div>
    </section>
  )
}