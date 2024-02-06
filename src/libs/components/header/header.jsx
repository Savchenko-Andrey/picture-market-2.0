"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import styles from "./header.module.scss";
import logo from "@/assets/logo-black.png"
import Menu from "../menu/menu";
import {Page} from '@/libs/shared/nav-list'

export default function Header() {
  const [isMenu, setMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  const stateMenu = () => {
    setMenu(!isMenu)
  }  

  useEffect(() => {
    if (isMenu) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isMenu]);

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
              {Page.map(({ title, id }) => (
                <li key={id} >
                  <p className={styles.item}>{title}</p>
                </li>
                ))}
            </ul>
            <span className={styles.item_line}></span>
          </div>
          <div className={styles.menu} onClick={stateMenu}>
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
            <Menu setMenu={setMenu} />
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
}
