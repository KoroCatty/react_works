import React from "react";
import me from "../me.jpg";

export const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col lg-6 col xm-12">
        
        </div>

      <div className="photo__wrap mb-3">   {/* bottom margin */}
            <img src={me} alt="author..." className="mePhoto" />
          </div>

        <div className="col lg-6 col xm-12">
          <h1 className="author__heading">About Me</h1>
          <p className="author__headingText">
            Hello! I am Andrew. I have been developing websites for over 5 years. I'm Full-Stack Web Developer. Technologies I use is MERN(MongoDB, Express, ReactJS and NodeJS).

            I create responsive websites that are displayed on all devices desktops and smartphones.

            Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch).

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
