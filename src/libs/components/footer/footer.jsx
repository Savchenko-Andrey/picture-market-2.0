"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "./footer.module.scss"
import logoWhite from '@/assets/logo-white.webp'
import ModalPost from "@/libs/modal/modal-post/modal-post";

import payment from '@/assets/payment.webp'
import Imprint from "../imprint/imprint";
import Privacy from "../privacy/privacy";
import PaymentPolicy from "../payment/payment";


export default function Footer() {
  const [isModalForm, setIsModalForm] = useState(false);
  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );

  // imprint
  const [isModalImprint, setIsModalImprint] = useState(false);

  //privacy
  const [isModalPrivacy, setIsModalPrivacy] = useState(false);
  
  //payment
  const [isModalPayment, setIsModalPayment] = useState(false);

  useEffect(() => {
    if (isModalForm) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    else if (isModalImprint) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    else if (isModalPrivacy) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    else if (isModalPayment) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isModalForm, isModalImprint, isModalPrivacy, isModalPayment]);

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
              <li className={styles.item} onClick={()=> setIsModalImprint(true)}>
                <p className={styles.link}>Terms and Conditions</p>
              </li>
              <li className={styles.item}>
                <p className={styles.link} onClick={()=> setIsModalPrivacy(true)}>Privacy Policy</p>
              </li>
              <li className={styles.item}>
                <p className={styles.link} onClick={()=> setIsModalPayment(true)}>Payment Policy</p>
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
      {isModalImprint && <Imprint setIsModalImprint={setIsModalImprint} />}
      {isModalPrivacy && <Privacy setIsModalPrivacy={setIsModalPrivacy} />}
      {isModalPayment && <PaymentPolicy setIsModalPayment={setIsModalPayment} />}
  </>
  )
}