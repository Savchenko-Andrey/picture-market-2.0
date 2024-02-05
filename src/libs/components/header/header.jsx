"use client"
import Image from "next/image";

import styles from "./header.module.scss";
import logo from "@/assets/logo-black.png"


export default function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="logo"
            priority={true}
            loading="eager"
          />
        </div>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
    </section>
  );
}
