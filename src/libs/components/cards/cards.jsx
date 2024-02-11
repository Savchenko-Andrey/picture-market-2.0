import Image from "next/image";

import styles from "./cards.module.scss"

import cardFoto from "@/assets/card_photo.png"
import cardFotoTel from "@/assets/card_photo_mobile.png"
import cardPhotoBackground from "@/assets/card_photo_background_comp.png"
import cardPhotoForm from "@/assets/card_photo_form.png"
import cardPhotoCard from "@/assets/card_photo_card.png"

import cardPhotoBackgroundTwo from "@/assets/card_photo_background.png"

import Button from "@/libs/components/button/button";

export default function Cards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>Make your
          <span className={styles.title_color}> own </span> 
          portrait</p>
        <div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.item_padding}>
                <p className={styles.item_text}>Choose a photo</p>
                <div className={styles.item_container}>
                  <p className={styles.item_text_after}
                    style={{ width: "156px" }}>Upload a clear portrait photo with visible faces for your one-of-a-kind art piece.</p>
                  <div>
                    <div className={styles.img_container}>
                      <Image
                        src={cardFoto}
                        alt="image"
                        priority={true}
                        loading="eager"
                        quality={100}
                        style={{ marginLeft: "auto" }}
                      />
                    </div>
                    <div className={styles.img_container_mob}>
                      <Image
                        src={cardFotoTel}
                        alt="image"
                        priority={true}
                        loading="eager"
                        quality={100}
                        style={{marginLeft: "auto", width: "180px", height: "178px"}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <Image
                src={cardPhotoBackground}
                alt="image"
                fill
                priority={true}
                quality={100}
                loading="eager"
                className={styles.card_photo_background}
              />
                <div className={styles.background}>
                  <div className={styles.item_padding}>
                    <p className={styles.item_text_two}>Complete the form</p>
                    <p className={styles.item_text_after}>Please leave your contact details so that our assistant can get in touch with you to approve the layout before we start creating your string art portrait.</p>
                  </div>
                  <div >
                    <Image
                      src={cardPhotoForm}
                      alt="image"
                      priority={true}
                      loading="eager"
                      quality={100}
                      style={{marginLeft: "auto", marginRight: "20px"}}
                    />
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.item_padding}>
                <p className={styles.item_text} style={{ width: "134px" }}>Make payment</p>
                <p className={styles.item_text_after}>Make a payment, and our assistant can contact you to approve the layout before we start creating your string art portrait.</p>
                <div >
                    <Image
                      src={cardPhotoCard}
                      alt="image"
                      priority={true}
                      loading="eager"
                      quality={100}
                      style={{marginLeft: "auto"}}
                  />
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.gradient}>
                <div className={styles.item_padding}>
                  <p className={styles.item_text_two} style={{width: "144px"}}>Wait for delivery</p>
                  <p className={styles.item_text_after} style={{width: "140px"}}>Production typically takes around 2 days, and we offer free delivery throughout the UK. We also offer worldwide shipping for an additional fee.</p>
                </div>
              </div>
              <Image
                src={cardPhotoBackgroundTwo}
                alt="image"
                priority={true}
                loading="eager"
                quality={100}
                style={{objectFit: "cover", height: "100%"}}
              />
            </li>
          </ul>
        </div>
        <Button text={"Buy for £ 69"} />
      </div>
    </section>
  )
};