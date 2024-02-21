"use client"
import { useState, useEffect } from "react"
import Image from "next/image";

import heroImg from '@/assets/hero-img.webp' 

import UploadPhoto from "@/libs/modal/modal-photo/modal-photo"

import Button from "@/libs/components/button/button"
import styles from "./hero.module.scss"


export default function Hero() {
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
          <div className={styles.container_title}>
            <h1 className={styles.title}>
              <span>
                <span>PERSONALIS</span>
                <span className={styles.title_color_black}>ed</span>
              </span>
              <span>
                <span className={styles.title_color_fiolet}>string</span>
                <span className={styles.title_color_white}>art</span>
              </span>
            </h1>
          </div>
          <div className={styles.description_container}>
            <h2 className={styles.description_tel}>
              <span>Thread </span>
              <span>portrait created </span>
              <span>from your photo </span>
            </h2>
            <h2 className={styles.description_tab}>Thread portrait created from your photo</h2>
          </div>
          <div className={styles.hero_img}> 
            <Image
              src={heroImg}
              alt="image"
              priority={true}
              loading="eager"
              quality={100}
            />
          </div> 
          <div onClick={() => setIsModal(true)} className={styles.btn}>
            <Button text={"Buy for £ 99"} />
          </div>
        </div>
      </section>
      
      {isModal && <UploadPhoto setIsModal={setIsModal} />}
    </>
  )
}