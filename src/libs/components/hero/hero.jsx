"use client"
import { useState } from "react"
import UploadPhoto from "@/libs/modal/modal-photo/modal-photo"

import Button from "@/libs/components/button/button"
import styles from "./hero.module.scss"


export default function Hero() {
  const [isModal, setIsModal] = useState(false);

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
            <h2 className={styles.description}>
              <span>Unique </span>
              <span>string art </span>
              <span>from your photo </span>
            </h2>
          </div>
          <div onClick={() => setIsModal(true)}>
            <Button text={"Buy for £ 69"} />
          </div>
        </div>
      </section>
      {isModal && <UploadPhoto setIsModal={setIsModal} />}
    </>
  )
}