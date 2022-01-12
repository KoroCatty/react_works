import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

export const Footer = () => {
  return (
    <div className="footer">


      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Melborne Main st 2022 office #223</p>
            </div>

            <div className="d-flex">
              <a href="tel:555-005-123">+7(960)555-555</a>
            </div>

            <div className="d-flex">
              <p>kojimacoding@gmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="" className="footer-nav">Home</a>
                <br />
                <a href="" className="footer-nav">About Me</a>
                <br />
                <a href="" className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a href="" className="footer-nav">Experience</a>
                <br />
                <a href="" className="footer-nav">Portfolio</a>
                <br />
                <a href="" className="footer-nav">Contacts</a>
              </div>



            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
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

              <RedditShareButton
                url={"https://www.youtube.com/kaydrum"}
                quote={"Drumming channel"}
                hashtag="#kaydrum"
                >
                <RedditIcon className="mx-3" size={36}>
                </RedditIcon>
              </RedditShareButton>

              <LinkedinShareButton
                url={"https://www.youtube.com/kaydrum"}
                quote={"Drumming channel"}
                hashtag="#kaydrum"
                >
                <LinkedinIcon className="mx-3" size={36}>
                </LinkedinIcon>
              </LinkedinShareButton>
            </div>

            <p className="pt-3 text-center">
              Copyright&copy;
    {new Date().getFullYear()}&nbsp;Kojima Web Developer | All Right Reserved
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}


