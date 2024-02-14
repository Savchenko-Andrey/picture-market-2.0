"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./gratitude.module.scss"
import ModalPost from "@/libs/modal/modal-post/modal-post"

export default function Gratitude() {
  const [isModal, setIsModal]= useState(true)

  const [isModalForm, setIsModalForm] = useState(false);
  const [isScroll, setIsScroll] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
    );

  useEffect(() => {
    if (isModal) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    else if (isModalForm) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isModal, isModalForm]);

  return (
    
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        <Link className={styles.a} href="/">
          <div className={styles.container_icon}>
          <svg className={styles.icon} stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 24 24" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path></svg>
          </div>
        </Link>
        <p className={styles.title}>Thank You for Your Order!</p>
        <p className={styles.text}>We sincerely appreciate your trust in choosing our string art portraits.</p>
        <p className={styles.text}>Our designer will contact you shortly to confirm the layout for your portrait. Additionally, we may inquire about more pictures to ensure we create the best piece of art possible.</p>
        <p className={styles.text}>If you have any questions or concerns in the meantime, please don't hesitate to reach out to us. We're here to ensure your experience with us is nothing short of exceptional.</p>
        <p className={styles.text}>Once again, thank you for your order!</p>
        <p className={styles.text}>Best Regards, String World</p>
        <div className={styles.container_btn}>
          <button className={styles.button} onClick={()=> setIsModalForm(true)}>contact us</button>
          <Link className={styles.button} href="/">home page
          </Link>
        </div>
      </div>
    </section>
    {isModalForm && <ModalPost setIsModalForm= {setIsModalForm} />}
    </>
  )
}