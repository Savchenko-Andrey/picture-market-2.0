"use client"
import { useState, useEffect } from "react"
import UploadPhoto from "@/libs/modal/modal-photo/modal-photo"

import Button from "../button/button"
import styles from "./desciption.module.scss"

export default function Description() {
  const [isModal, setIsModal] = useState(false);

  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );


  useEffect(() => {
    if (isModal) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    } 
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isModal]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.text}>
            Whether you're looking for a 
            <span className={styles.text_color}> unique gift </span>
            or a beautiful addition to your home decor, String World has you covered.
          </p>
          <div onClick={() => setIsModal(true)}>
            <Button text={"Buy for £ 99"} />
          </div>
        </div>
      </section>
      {isModal && <UploadPhoto setIsModal={setIsModal} />}
    </>
  )
}