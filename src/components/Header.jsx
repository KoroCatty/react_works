import React from "react";
import Typed from "react-typed";// Library



export const Header = () => {
  return (
      <div className="header-wrapper">
        <div className="main-info">
          <h1 className="main-infoText">web development and websites promotions</h1>

      {/* Loop the texts */}
       <Typed 
       className="typed-text"
       strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
       typeSpeed={40}
       backSpeed={60}
       loop
       />

       <a href="" className="btnMain__offer">Contact Me</a>
        </div>
      </div>
  )
}

