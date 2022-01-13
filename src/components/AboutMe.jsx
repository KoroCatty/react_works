import React from "react";
import me from "../me.jpg";

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
            Hello! I am Kojima; a Japanese front-end Web Developer based in Melbourne, Australia. I have been developing websites for over 1 year and completed the Diploma of Web Development at the Australian Institute Of ICT in 2021. I am experienced in building websites for clients through web cloud services and renewing the client’s websites. I offer bilingual services in Japanese and English.
            
           Technologies I use is MERN(HTML, SASS, JavaScript, React.js and Wordpress).

            I create responsive websites that are displayed on all devices desktops and smartphones.

            Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (Figma or Adobe software).

            And I’m ready to do this for you, before we start developing your website, we will discuss all the  details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weaknesses.

            All this is necessary to give your customers something that your competitors do not provide, or to present it too, but better!

            After the website is finished and ready to deploy and sell a product or service. It is essential that your potential clients know about you. I will create an advertising campaign for you in  Google Adwords and Facebook!
          </p>
        </div>
      </div>
    </div>
  )
}

// export default AboutMe
