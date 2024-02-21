"use client"
import Image from "next/image";

import { useState } from "react";

import styles from './privacy.module.scss';

import logoBlack from "@/assets/logo-black.webp";
import ModalPost from "@/libs/modal/modal-post/modal-post";


export default function Privacy({ setIsModalPrivacy}){
  const [isModalForm, setIsModalForm] = useState(false);

  return (
    <>
      <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.container_img}>
            <Image
              src={logoBlack}
              alt="logo"
              priority={true}
              loading="eager"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.container_closed} onClick={()=> setIsModalPrivacy(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="black" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
          </div>
          </div>
          <p className={styles.text}>Privacy Policy</p>
          
        <div>
          <p className={styles.description}>At String World, we respect your privacy and are committed to protecting your personal information. We use your information only to provide and improve our services. By using our website, you agree to the collection and use of your information in accordance with this policy.</p>
          <p className={styles.description} >
            <span className={styles.pre_title}>Information Collection and Use:</span>
            We collect your personal information to provide and improve our services to you. This includes your name, email address, and shipping information, as well as the photos that you provide for creating portraits. We may also collect non-personal information such as browser type, IP address, and device information for analytics purposes.</p >
          <p className={styles.description} >
            <span className={styles.pre_title}>Information Sharing:</span>
            We do not sell or share your personal information with any third parties except to comply with legal requirements or to protect our rights.
          </p >
          <p className={styles.description} >
            <span className={styles.pre_title}>Stripe Payment:</span>
            For secure payment processing, we use Visa and Mastercard payment methods by Stripe link. Stripe ensures that your payment information is handled securely and in compliance with the highest industry standards.
          </p >
          <p className={styles.description} >
            <span className={styles.pre_title}>Security: </span>
              We take reasonable precautions to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure.
          </p >
          <p className={styles.description} >
            <span className={styles.pre_title}>Legal Information:</span>
              String World is a legally registered business in the United Kingdom. We operate in accordance with all applicable laws and regulations, including tax laws. As a responsible business, we fulfil all our tax obligations, contributing to the community and the country's economy.
          </p >
          <p className={styles.description} >
            <span className={styles.pre_title}>Updates to Privacy Policy:</span>
              At String World, we strive to ensure the privacy and security of our customers' information. As part of our commitment to transparency, we may update our privacy policy from time to time to reflect any changes in our data practices or legal requirements.
          </p >
          <p className={styles.description} >
            <span className={styles.pre_title}></span>
            Please note that we will not individually notify customers of these policy changes. Instead, any updates will be posted directly on this page. Therefore, we encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information.
          </p >
          <p className={styles.description} >
            <span className={styles.pre_title}>Shipping Policy:</span>
            We offer free shipping on all orders within the UK. We use standard shipping, and delivery times vary depending on your location. Orders typically take 3-5 business days to arrive.
          </p >
          <p className={styles.description} >
            International shipping is available for an additional fee. Delivery times and fees vary depending on your location. We are not responsible for any customs fees or taxes.
          </p >
          <p className={styles.description} >
            Please note that production typically takes 2-3 days before shipping. We will notify you by email once your order has shipped.
          </p >
          <p className={styles.description} >
            Date of Last Update: 12.02.2024
          </p >
          <p className={styles.description} >
              If you have any questions or concerns about our Privacy Policy or any other aspect of our services, please do not hesitate to contact us at
              <span className={styles.description_email} onClick={() => setIsModalForm(true)}> designer@string-world.com</span>
          </p >
        </div>
      </div>
      </div>
      {isModalForm && <ModalPost setIsModalForm={setIsModalForm}/>}
    </>
  );
};