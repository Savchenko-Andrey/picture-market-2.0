"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Imprint from "@/libs/components/imprint/imprint";
import Privacy from "@/libs/components/privacy/privacy";

import styles from "./modal-photo.module.scss";
import img from './Img/chooseImg.png'

export default function UploadPhoto({setIsModal}) { 
  const [imageUrl, setImageUrl] = useState(img);
  const [file, setFile] = useState(null);

  const [isModalPrivacy, setIsModalPrivacy] = useState(false);
  const [isModalImprint, setIsModalImprint] = useState(false);

  const [isChecked, setisChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const fileInput = useRef(null);

  useEffect(() => {
    if (!window.globalState) {
      window.globalState = {};
    }

    const fileFromGlobalState = window.globalState?.file;
    if (fileFromGlobalState) {
      setImageUrl(fileFromGlobalState);
    }
  }, []);

  function handleButtonError() {
    setIsError(true);
  }

  function handleButtonClick() {
    fileInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    const url = URL.createObjectURL(file);

    if (!window.globalState) {
      window.globalState = {};
    }

    window.globalState['file'] = url;

    reader.addEventListener('load', event => {
      setImageUrl(event.target.result);
    });

    setFile(file);

    reader.readAsDataURL(file);
  }

  return (
  <>
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.closed} onClick={() => setIsModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="black" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
        </div>
          <div className={styles.container_content}>
            <p className={styles.title}>Please, upload your photo</p>
            <div className={styles.photo}>
              <Image
                src={imageUrl}
                alt="upload photo"
                fill
                priority={true}
                loading="eager"
                quality={100}
                className={styles.img}
                onClick={handleButtonClick}
              />
            </div>
            <input
              type="file"
              name="photo"
              ref={fileInput}
              style={{ display: 'none' }}
              multiple
              accept=".jpeg, .png, .jpg"
              onChange={handleImageChange}
          />
          {imageUrl === img ? "" : <div className={styles.policy}>
            <div className={styles.form_group}>
              <input
                className={styles.input}
                type="checkbox"
                id="check"
                onClick={() => setisChecked(!isChecked) & setIsError(false)}
                value={isChecked}
                name="checkbox"
                required
              />
              <label htmlFor="check">
                <svg className={styles.svg_checked} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1"/><path fill="white" d="M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31a1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26Z"/></svg>
              </label>
            </div>
            <div className={styles.container_label}>
              <label htmlFor="check" className={styles.label} style={{ paddingLeft: "30px" }}>
                I am agree to the
              </label>
              <p className={styles.label_color} style={{ marginLeft: "5px" }} onClick={()=> setIsModalPrivacy(true)}>
                Privacy Policy
              </p>
              <span style={{ marginLeft: "5px" }} className={styles.label}> and </span>
                <p className={`${styles.label_color} ${styles.position}`} onClick={()=> setIsModalImprint(true) }>
                Terms and Conditions
              </p>
            </div>
          </div>}
          {isError && <p className={styles.error}>Please agree with Privacy Policy</p>}
          
          {imageUrl === img ?
            <div onClick={handleButtonClick}>
                <div className={styles.mask}>choose image</div>
            </div>
            :
            <div className={styles.container_btn}>
              <div className={styles.update} onClick={handleButtonClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048">
                    <path className={styles.svg} fill="currentColor" d="M1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-172 0-330-55t-289-154t-226-238t-141-304l123-34q40 145 123 265t198 208t253 135t289 49q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-129 0-251 36T546 267T355 428T215 640h297v128H0V256h128v274q67-123 163-221t212-166T752 37t272-37" />
                  </svg>
              </div>
              {!isChecked ?
                <div onClick={handleButtonError}>
                    <div className={styles.mask}>Buy for  £ 99</div>
                </div>
                :
                <div>
                    <script async
                      src="https://js.stripe.com/v3/buy-button.js">
                    </script>

                    <stripe-buy-button
                      buy-button-id="buy_btn_1Ot9o8BvsSffaihH7GbB1oV3"
                      publishable-key="pk_live_51NTPQmBvsSffaihHutVQGNFakDGH0b8Yeqb5qgVW7X1xgge8YRucsJlxLmOVNtr0xGzlRaKk2lsT7vfSL2J2ZZ0800vVyTZ1UY"
                    >
                    </stripe-buy-button>
                </div>
              }
            </div>
          }
          </div>
        </div>
      </div>
      {isModalImprint && <Imprint setIsModalImprint={setIsModalImprint} />}
      {isModalPrivacy && <Privacy setIsModalPrivacy={setIsModalPrivacy} />}

    </>
  )
}
