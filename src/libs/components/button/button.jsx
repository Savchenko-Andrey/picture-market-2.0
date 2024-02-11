"use client"
import { useState } from "react"

import UploadPhoto from "@/libs/modal/modal-photo/modal-photo"
import styles from "./button.module.scss"

export default function Button({ text }) {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <button className={styles.btn} onClick={() => setIsModal(true)}>{text}</button>
      {isModal && <UploadPhoto setIsModal={setIsModal} />}
    </>
  )
}