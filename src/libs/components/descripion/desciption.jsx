"use client"
import { useState } from "react"
import UploadPhoto from "@/libs/modal/modal-photo/modal-photo"

import Button from "../button/button"
import styles from "./desciption.module.scss"

export default function Description() {
  const [isModal, setIsModal] = useState(false);

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
            <Button text={"Buy for £ 69"} />
          </div>
        </div>
      </section>
      {isModal && <UploadPhoto setIsModal={setIsModal} />}
    </>
  )
}