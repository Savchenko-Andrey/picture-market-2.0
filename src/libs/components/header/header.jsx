"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import styles from "./header.module.scss";
import logo from "@/assets/logo-black.webp"
import Menu from "../menu/menu";
import UploadPhoto from "@/libs/modal/modal-photo/modal-photo"

import ModalPost from "@/libs/modal/modal-post/modal-post";

export default function Header() {
  const [isMenu, setMenu] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isModalForm, setIsModalForm] = useState(false);
  
  const [isScroll, setIsScroll] = useState(
  typeof window !== "undefined" ? window.scrollY : 0
  );


  useEffect(() => {
    if (isMenu) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    } else if (isModal) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    } else if (isModalForm) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isMenu, isModal, isModalForm]);

  return (
    <>
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
            <ul className={styles.nav_list}>
              <li>
                <a href="#about" className={styles.item}>About Us</a>
              </li>
              <li>
                <a href="#gallery" className={styles.item}>Gallery</a>
              </li>
              <li>
                <p className={styles.item} onClick={()=> setIsModalForm(true)}>Order</p>
              </li>
            </ul>
            <span className={styles.item_line}></span>
          </div>
          <div className={styles.menu} onClick={()=> setMenu(true)}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </div>
      </section>

      <AnimatePresence>
      {isMenu &&
        <motion.div
            animate={isMenu ? "open" : "closed"}
            variants={{ open: { x: 0, opacity: 1 } }}
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            className={styles.animations}
          >
            <Menu setMenu={setMenu} setIsModal={setIsModal} setIsModalForm={setIsModalForm} />
          </motion.div>
        }
      </AnimatePresence>
      {isModal && <UploadPhoto setIsModal={setIsModal} />}
      {isModalForm && <ModalPost setIsModalForm={setIsModalForm} />}
    </>
  );
}
