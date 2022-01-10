import React from 'react'
// carouselのライブラリ
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS (画像フォルダ) 
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";
// import testimonialsbg from "../components/testimonials-bg.png";

export const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      >
        <>
        <img src={avatar1} alt="" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illum voluptate, blanditiis vitae qui cum assumenda ullam distinctio quaerat autem facere! Itaque ipsa numquam quaerat quos unde aliquid, ea omnis!</p>
        </div>
      </>

      <>
        <img src={avatar2} alt="" />
        <div className="myCarousel">
          <h3>John Doe 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illum voluptate, blanditiis vitae qui cum assumenda ullam distinctio quaerat autem facere! Itaque ipsa numquam quaerat quos unde aliquid, ea omnis!</p>
        </div>
      </>

      <>
        <img src={avatar3} alt="" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illum voluptate, blanditiis vitae qui cum assumenda ullam distinctio quaerat autem facere! Itaque ipsa numquam quaerat quos unde aliquid, ea omnis!</p>
        </div>
      </>

      <>
        <img src={avatar4} alt="" />
        <div className="myCarousel">
          <h3>John Doe 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illum voluptate, blanditiis vitae qui cum assumenda ullam distinctio quaerat autem facere! Itaque ipsa numquam quaerat quos unde aliquid, ea omnis!</p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel
