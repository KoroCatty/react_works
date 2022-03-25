import React from "react";

// Library (typing effect)
import Typed from "react-typed";

import { ParticleBg } from "./ParticleBg";
// scroll Library
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div id="home" className="headerWrapper">
      <ParticleBg />

      <div className="headerInfo">
        <h1 className="headerInfoText">web development and websites promotions</h1>

        {/* Loop the texts */}
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Brand Design", "Google Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <Link smooth={true} to="contacts" duration={600} offset={-90} href="" className="headerBtn">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

