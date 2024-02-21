"use client"
import Image from "next/image";
import { useState } from "react";

import styles from './payment.module.scss'
import logoBlack from "@/assets/logo-black.webp";
import ModalPost from "@/libs/modal/modal-post/modal-post";


export default function PaymentPolicy({setIsModalPayment}) {
  const [isModalForm, setIsModalForm] = useState(false);

  return(
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
          <div className={styles.container_closed} onClick={()=> setIsModalPayment(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="black" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
          </div>
          </div>
          <p className={styles.text}>Payment Policy</p>

        <div>
          <p className={styles.description}>At String World, we aim to provide a seamless and secure payment experience for our customers when purchasing our exquisite string art portraits. To ensure transparency and clarity, we have outlined our Payment Policy as follows:</p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Accepted Payment Methods: </span >
            We accept payments made via Visa and Mastercard credit and debit cards. For your convenience and security, all payments will be processed through a secure payment gateway provided by Stripe.</p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Payment Processing: </span >
            When you place an order on our website, you will be directed to the Stripe payment gateway to complete the transaction. Please note that we do not store any payment information on our servers. All payment details, including credit card information, are securely handled and processed by Stripe.
          </p>
          <p className={styles.description}><span className={styles.pre_title}>Currency: </span >
            All prices displayed on our website are in British Pound (GBP), and your payment will be processed in GBP. If you are ordering from outside the United Kingdom, the final amount charged to your card may be subject to conversion fees by your bank or financial institution. Please check with your provider for further details.
          </p>
          <p className={styles.description}>
              <span className={styles.pre_title}>Order Confirmation:</span > Once your payment is successfully processed, you will receive an order confirmation email containing the details of your purchase. If you do not receive this email within a reasonable time after payment, please contact our customer support team at
              <span className={styles.description_email} onClick={() => setIsModalForm(true)}> designer@string-world.com</span>
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Payment Security:</span > We take the security of your payment information seriously. Stripe employs industry-leading security measures to protect your financial data, ensuring that your transaction is safe and secure.
          </p>
          <p className={styles.description}>
                <span className={styles.pre_title}>Payment Issues:</span > In the event of any payment-related issues or discrepancies, please reach out to our customer support team at
                <span className={styles.description_email} onClick={() => setIsModalForm(true)}> designer@string-world.com</span>. We will promptly investigate the matter and provide a resolution to the best of our ability.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Refund Policy:</span > For information regarding refunds and our refund policy, please refer to our dedicated Refund Policy page, which is included in our Privacy Policy.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}>Updates to the Payment Policy:</span > We reserve the right to update or modify this Payment Policy at any time without prior notice. Any changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this policy periodically to stay informed about our payment practices.
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}></span > By proceeding with your purchase on our website, you acknowledge and agree to the terms and conditions outlined in this Payment Policy.
          </p>
          <p className={styles.description}>
              <span className={styles.pre_title}></span >
              If you have any questions or concerns about our Payment Policy, please do not hesitate to contact us at
              <span className={styles.description_email} onClick={() => setIsModalForm(true)}> designer@string-world.com</span>
          </p>
          <p className={styles.description}>
            <span className={styles.pre_title}></span >Date of Last Update: 12.02.2024
          </p>

        </div>
      </div>
      </div>
      {isModalForm && <ModalPost setIsModalForm={setIsModalForm}/>}
    </>
  );
};

