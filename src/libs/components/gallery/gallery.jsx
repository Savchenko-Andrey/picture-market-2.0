"use client"
import Image from 'next/image';
import { useState } from "react";
import Slider from "slick-slider-react"

import styles from './gallery.module.scss'

// imagesTel
import photoFirst from '@/assets/img-gallery/gallery_one.png';
import photoSecond from '@/assets/img-gallery/gallary_two.png';
import photoThird from '@/assets/img-gallery/gallary_tree.png';
import photoFourth from '@/assets/img-gallery/gallary_fo.png';


const imagesTel = [photoFirst, photoFourth, photoSecond, photoThird];



export default function Gallery() { 
  const [index, setIndex] = useState(0);

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id='gallery'>
    <div className={styles.tel} >
        <p className={styles.title}>Enjoy Gallery</p>
        <Slider
        {...settings}
        index={index}
        onSlide={setIndex}
        snapOutbound={true}
        draggable={true}
        dragCallback={true}
        alignment={'center'}
        snapDuration={700}
        className={styles.container}
        >
          
        {imagesTel.map((item, i) => (
          <div key={i}
            className={styles.item}
          >
          <Image
            src={item}
            alt="image"
            priority={false}
            loading="eager"
            quality={80}
            style={{ objectFit: "cover", width: "288px", height: "350px"}}
          />
          </div>
        ))}
        </Slider>
    </div>
      <div className={styles.desc}>
      <p className={styles.title}>Enjoy Gallery</p>
      <Slider
        index={index}
        onSlide={setIndex}
        snapOutbound={true}
        draggable={true}
        dragCallback={true}
        alignment={'center'}
        snapDuration={700}
        className={styles.container}>
        
        {imagesTel.map((item, i) => (
          <div key={i}
            className={styles.item}
          >
          <Image
            src={item}
            alt="image"
            priority={false}
            loading="eager"
            quality={80}
            className={styles.img_desc}
          />
          </div>
        ))}
      </Slider>
      </div>
      

      
      <div className={styles.section}>
      <div onClick={arrowPrrev} className={styles.arr_prev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="white" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
      </div>
      <div className={styles.container_marker}>
        <div className={styles.marker} 
        onClick={()=> {setIndex(0)}} 
        style={index === 0 ?{background: "rgb(99, 71, 137)"}:{}}>

        </div>
        <div className={styles.marker} 
        onClick={()=> {setIndex(1)}} 
        style={index === 1 ?{background: "rgb(99, 71, 137)"}:{}}>

        </div>
        <div className={styles.marker} 
        onClick={()=> {setIndex(2)}} 
        style={index === 2 ?{background: "rgb(99, 71, 137)"}:{}}>

        </div>
        <div className={styles.marker} 
        onClick={()=> {setIndex(3)}} 
        style={index === 3 ?{background: "rgb(99, 71, 137)"}:{}}>

        </div>
      </div>
        <div onClick={arrowNext} className={styles.arr_next}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="white" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"/></svg>
      </div>
    </div>
    </section>
  )
}