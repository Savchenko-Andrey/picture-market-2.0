"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./footer.module.scss"
import logoWhite from '@/assets/logo-white.png'
import ModalPost from "@/libs/modal/modal-post/modal-post";

import payment from '@/assets/payment.png'


export default function Description() {
  const [isModalForm, setIsModalForm] = useState(false);
  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    if (isModalForm) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    } 
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isModalForm]);

  return (
  <>
    <section className={styles.section}>
        <div className={styles.container}>
        <div>
          <div className={styles.container_logo}>
            <Image
              src={logoWhite}
              alt="logo"
              priority={true}
              loading="eager"
            />
          </div>
          <p className={`${styles.adress} ${styles.adaptive_adress}`}>48 Epstein Road SE28 8EJ London United Kingdom</p>
          </div>
          <div>
            <ul className={styles.list}>
              <li>
                <a className={styles.adress} onClick={()=> setIsModalForm(true)}>Email: designer@string-world.com</a>
              </li>
              <li>
                <a className={styles.adress} href="tel:+447455871180">Telephone: +447455871180</a>
              </li>
            </ul>
            <ul className={styles.list_text}>
              <li className={styles.item}>
                <p className={styles.link}>Terms and Conditions</p>
              </li>
              <li className={styles.item}>
                <p className={styles.link}>Privacy Policy</p>
              </li>
              <li className={styles.item}>
                <p className={styles.link}>Payment Policy</p>
              </li>
              <li className={styles.item}>
                <div className={styles.img_payment}>
                  <Image
                    src={payment}
                    alt="logo"
                    priority={true}
                    loading="eager"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
    </section>
    {isModalForm && <ModalPost setIsModalForm={setIsModalForm} />}
  </>
  )
}