import React from "react";
import me from "../images/me.jpg";

export const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col lg-6 col xm-12"></div>

        <div className="aboutPhoto mb-3">   {/*  margin bottom*/}
          <img src={me} alt="author..." className="aboutPhoto__me" />
        </div>

        <div className="col lg-6 col xm-12">
          <h1 className="aboutHeading">About Me</h1>
          <p className="aboutHeading__text">
            I am Kojima; a Japanese front-end Web Developer based in Melbourne, Australia. I have been developing websites and completed the Diploma of Web Development at the Australian Institute Of ICT in 2021.I am experienced in building websites for Japanese clients through web cloud services and renewing the client’s websites. I offer bilingual services in Japanese and English. I have come to love making websites during the school period.
            I am highly motivated, collaborative, and detailed. I am passionate about continually developing my skills and knowledge, and apply new techniques. In my free time, I enjoy to play the drums and making videos. If you have any comments, please feel free to contact me from my contact section!
          </p>
        </div>
      </div>
    </div>
  )
}

// export default AboutMe
