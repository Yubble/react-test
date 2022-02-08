/*
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-02-05 16:41:10
 */

import styles from './Carousel.module.css'
import { Image, Carousel as AntCarousel } from 'antd'

import carouselImage1 from "../../assets/images/carousel_1.jpg";
import carouselImage2 from "../../assets/images/carousel_2.jpg";
import carouselImage3 from "../../assets/images/carousel_3.jpg";

export const Carousel = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src={carouselImage1} />
      <Image src={carouselImage2} />
      <Image src={carouselImage3} />
    </AntCarousel>
  )
}