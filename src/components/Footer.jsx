import React from 'react';
// scroll Library
import { Link } from "react-scroll";

import youtube from "../images/youtube.png";

// Social Icons Library
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  // RedditShareButton,
  // RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

export const Footer = () => {
  return (
    <div className="footer">

      <div className="container footerContainer">
        <div className="row">

          <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
            <div className="d-flex">
              <p>City Melborne Main st 2022 office #2022</p>
            </div>

            <div className="d-flex">
              <a href="tel:555-005-123">+7(960)555-555</a>
            </div>

            <div className="d-flex">
              <p>kojima.website@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4">
            <div className="row mt-3">
              <div className="col">
                <Link smooth={true} to="home" duration={600} offset={-110} href="" className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="about" duration={600} offset={-110} href="" className="footer-nav">About Me</Link>
                <br />
                <Link smooth={true} to="services" duration={600} offset={-110} href="" className="footer-nav">Services</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" duration={600} offset={-110} href="" className="footer-nav">Experience</Link>
                <br />
                <Link smooth={true} to="portfolio" duration={600} offset={-110} href="" className="footer-nav">Portfolio</Link>
                <br />
                <Link smooth={true} to="contacts" duration={600} offset={-80} href="" className="footer-nav">Contacts</Link>
              </div>



            </div>
          </div>

          <div className="social__icons col-lg-5 col-md-5 col-sm-6 mt-3 align-items-center">
            <div className="social__iconsRow  d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/kaydrum"}
                quote={"Drumming channel"}
                hashtag="#kaydrum"
              >
                <FacebookIcon className="mx-3" size={36}>
                </FacebookIcon>
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://www.youtube.com/kaydrum"}
                quote={"Drumming channel"}
                hashtag="#kaydrum"
              >
                <TwitterIcon className="mx-3" size={36}>
                </TwitterIcon>
              </TwitterShareButton>


              <LinkedinShareButton
                url={"https://www.youtube.com/kaydrum"}
                quote={"Drumming channel"}
                hashtag="#kaydrum"
              >
                <LinkedinIcon className="mx-3" size={36}>
                </LinkedinIcon>
              </LinkedinShareButton>

              <div class="">
                <a href="https://www.youtube.com/channel/UC-1CLdw49SQsvt9E8del8nA" class="headerSocial__link" target='_blank'>
                  <img src={youtube} alt="" class="youtube" />
                </a>
              </div>

            </div>

            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Kojima Web Developer | All Right Reserved
            </p>
          </div>

        </div>
        {/* .row */}
      </div>
    </div>
  )
}


