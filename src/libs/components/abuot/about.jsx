import Image from "next/image";

import styles from "./about.module.scss"
import backgroundMob from "@/assets/about_girl_mob.png"
import backgroundTab from "@/assets/about_tab.png"


export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.background_color}></div>
      <div className={styles.background}>
        <Image
          src={backgroundMob}
          alt="image"
          fill
          priority={true}
          loading="eager"
          className={styles.img_mob}
        />
        <Image
          src={backgroundTab}
          alt="image"
          fill
          priority={true}
          loading="eager"
          className={styles.img_tab}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.title_box}>
          <p className={styles.title}>What is string world?</p>
        </div>

        <p className={styles.text}>String World creates stunning, one-of-a-kind string art portraits based on your photo, crafted by crossing a single continuous black thread over 3 million times. We capture the details and nuances of your image, resulting in a truly unique and striking piece of art. Perfect as a unique gift or addition to your home decor. Circle diameter 45cm.</p>
      </div>
    </section>
  )
}