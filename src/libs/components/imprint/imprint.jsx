"use client"
import Image from "next/image";
import { useState } from "react";

import styles from './imprint.module.scss';

import logoBlack from "@/assets/logo-black.webp";
import ModalPost from "@/libs/modal/modal-post/modal-post";

export default function Imprint({ setIsModalImprint }) {
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
          <div className={styles.container_closed} onClick={()=>setIsModalImprint(false) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="black" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
          </div>
        </div>

          <p className={styles.text}>Terms and Conditions of Use</p>
          <div>
          <p className={styles.description}>
            <span className={styles.pre_title}>Introduction</span>
          Welcome to our website, where we (String World) offer string art portraits created from your photos. By accessing and using our website, you agree to comply with and be bound by these terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Intellectual Property</span>
          All content and materials available on this website, including but not limited to text, graphics, images, videos, logos, and software, are the property of String World and are protected by applicable copyright, trademark, and other intellectual property laws. You may not use, copy, reproduce, distribute, transmit, or modify any content or materials on this website without our prior written consent.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Use of Our Services</span>
          We offer string art portrait services that are subject to our approval. We reserve the right to refuse service to anyone at any time without notice. You agree to provide accurate, current, and complete information about yourself and your photo when using our services.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Pricing and Payment</span>
          We offer competitive pricing for our string art portrait services. All prices are subject to change without notice. Payment is required in advance and can be made through our website using our secure payment system.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Delivery</span>
          We offer free delivery of our string art portraits throughout the UK. We aim to complete production within 2-3 days of receiving your order and will provide you with an estimated delivery date when your order is confirmed. We are not responsible for any delays or damages caused by third-party delivery services.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Refunds and Returns</span>
          We take pride in the quality of our string art portraits and strive to ensure that you are completely satisfied with your purchase. If you are not satisfied with your portrait for any reason, please contact us within 14 days of receipt to arrange for a refund or exchange. We are not responsible for any damages caused by mishandling or misuse of our products.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Shipping of Product Returns</span>
          If you decide to return your string art portrait, the shipping costs for the return will be the responsibility of the customer. We recommend using a trackable shipping service to ensure that the return is safely delivered to us.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Limitation of Liability</span>
          We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of our website or the information, products, services, or related graphics contained on our website. In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of our website.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Changes to These Terms and Conditions of Use</span>We reserve the right to modify these terms and conditions of use at any time without notice. By continuing to use our website after such modifications are made, you agree to be bound by the revised terms and conditions of use.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Contact Information</span>
            If you have any questions or concerns about these terms and conditions of use, please do not hesitate to contact us at
            <span className={styles.description_email} onClick={()=> setIsModalForm(true)}> designer@string-world.com</span>.
          </p>
          <p className={styles.description}>Date of Last Update: 12.02.2024</p>
        </div>
      </div>
      </div>
      {isModalForm && <ModalPost setIsModalForm={setIsModalForm}/>}
  </>
  ) 
}
