"use client"
import Image from "next/image";
import Slider from "slick-slider-react"
import { useState, useEffect } from "react";

import UploadPhoto from "@/libs/modal/modal-photo/modal-photo"

import styles from "./cards.module.scss"

import cardFoto from "@/assets/card_photo.webp"
import cardFotoTel from "@/assets/card_photo_mobile.webp"
import cardPhotoBackground from "@/assets/card_photo_background_comp.webp"
import cardPhotoForm from "@/assets/card_photo_form.webp"
import cardPhotoCard from "@/assets/card_photo_card.webp"

import cardPhotoBackgroundTwo from "@/assets/card_photo_background.webp"

import Button from "@/libs/components/button/button";

export default function Cards() {
  const [index, setIndex] = useState(0);
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

  const arrowNext = () => {
    if(index === 3) {
      setIndex(0);
    } else {
      setIndex(index + 1)
      }
  }

  const arrowPrrev = () => {
    if(index === 0) {
      setIndex(3);
    } else {
      setIndex(index - 1)
      }
  }

  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
        <p className={styles.title}>Make your
          <span className={styles.title_color}> own </span> 
            portrait</p>
        </div>
        <div>
          <div className={styles.tel}>
            <Slider
              index={index}
              onSlide={setIndex}
              snapOutbound={true}
              draggable={true}
              dragCallback={true}
              alignment={'center'}
              snapDuration={700}
              className={styles.list}
            >
                <div className={styles.item}>
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
                </div>
                <div className={styles.item}>
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
                </div>
                <div className={styles.item}>
                  <div className={styles.item_padding}>
                    <p className={styles.item_text} style={{ width: "134px" }}>Make payment</p>
                    <p className={styles.item_text_after}>Make a payment, and our assistant can contact you to approve the layout before we start creating your string art portrait.</p>
                    {/* <p>If you are not 100% satisfied with your portrait, we are happy to issue a refund.</p> */}
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
                </div>
                <div className={styles.item}>
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
                </div>
            </Slider>
            </div>
          <div className={styles.desc}>
            <div className={styles.item_desc}>
              <div className={`${styles.item} ${styles.item_desc_transform_left}`}>
                  <div className={styles.item_padding}>
                    <p className={styles.item_text}>Choose a photo</p>
                    <div className={styles.item_container}>
                      <p className={styles.item_text_after}
                        style={{ width: "166px" }}>Upload a clear portrait photo with visible faces for your one-of-a-kind art piece.</p>
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
                            style={{ marginLeft: "auto", width: "180px", height: "178px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <svg className={styles.icon} stroke="currentColor" fill="rgb(0, 48, 49)" strokeWidth="0" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
            </div>
            <div className={styles.item_desc}>
            
                <div className={styles.item}>
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
                        <p className={styles.item_text_after_two}>Please leave your contact details so that our assistant can get in touch with you to approve the layout before we start creating your string art portrait.</p>
                      </div>
                      <div className={styles.container_img_two}>
                        <Image
                          src={cardPhotoForm}
                          alt="image"
                          priority={true}
                          loading="eager"
                          quality={100}
                          fill
                        />
                    </div>
                  </div>
                </div>
                <svg className={`${styles.icon}`} stroke="currentColor"  fill="rgb(0, 48, 49)" strokeWidth="0" viewBox="0 0 24 24"  height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
            </div>
            <div className={styles.item_desc}>
                <svg className={`${styles.icon} ${styles.icon_desc}`} stroke="currentColor"  fill="rgb(0, 48, 49)" strokeWidth="0" viewBox="0 0 24 24"  height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
                <div className={styles.item}>
                  <div className={styles.item_padding}>
                    <p className={styles.item_text} >Make payment</p>
                    <p className={styles.item_text_after_tree}>Make a payment, and our assistant can contact you to approve the layout before we start creating your string art portrait.</p>
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
                </div>
                <svg className={styles.icon} stroke="currentColor"  fill="rgb(0, 48, 49)" strokeWidth="0" viewBox="0 0 24 24"  height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path><path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path></svg>
            </div>
            <div className={styles.item_desc}>
              <div className={`${styles.item} ${styles.item_desc_transform_right}`}>
                  <div className={styles.gradient}>
                    <div className={styles.item_padding}>
                      <p className={styles.item_text_two} >Wait for delivery</p>
                      <p className={styles.item_text_after_four}>Production typically takes around 2 days, and we offer free delivery throughout the UK. We also offer worldwide shipping for an additional fee.</p>
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
                </div>
            </div>
        </div>

            <div className={styles.arr}>
              <div onClick={arrowPrrev} className={styles.arr_prev} style={index === 0 ? {display: "none"}: {display: "flex", marginRight: "auto"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="black" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
              </div>
              <div onClick={arrowNext} className={styles.arr_next} style={index === 3 ? {display: "none"}: {display: "flex", marginLeft: "auto"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="rgb(0, 48, 49)" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
              </div>
            </div>
            </div>
        <div className={styles.btn} onClick={() => setIsModal(true)}>
          <Button text={"Buy for £ 99"} />
        </div>
      </div>
    </section>
    {isModal && <UploadPhoto setIsModal={setIsModal} />}
  </>
  )
};