import React from 'react';


import kojima from "../images/portfolios.png";
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, } from '@fortawesome/free-solid-svg-icons';

// REACT POP-UP BOX
// import Popup from 'reactjs-popup';
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import 'react-popupbox/dist/react-popupbox.css';




export const Portfolio = () => {

  
  // ---------------kojima Project-------------
  const openPopupboxKojima = () => {
    const content = (
      <>
        <img className='portfolioImage' src={kojima} alt="Portfolio Project" />    {/* Open the image */}
        <p className='portfolioText'>
        This is a collection of my works, websites and web applications. This includes a company LP page, car E-commerce website, and Todo application. As part of the building process,  I use a variety of languages and tools such as HTML, CSS(Sass), JavaScript, React, VUe, Webpack, Wordpress and PHP.
        </p>
        <b className='portfolioTitle'>Demo:</b> <a href="https://k-works.netlify.app/works" className="hyper-link" onClick={() => window.open("https://k-works.netlify.app/works", "_black")}>https://k-works.netlify.app/works</a>
        <br />

        <b className='portfolioTitle'>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://github.com/KoroCatty","_black")}>https://github.com/KoroCatty</a>
      </>
    )
  //   PopupboxManager.open({ content })
  // }
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Kojima JavaScript Project",
      },
    },
  });
}
  // pop-up box 内のeffectなどを追加
  const popupboxConfigKojima = {
    titleBar: {
      enable: true,
      // text: "Kojima Redux Project"
      // fontSize:"2px",
    },
    fadeIn: true,
    fadeInspeed: 500,
  }



// ---------------------------------
  return (
    <div id="portfolio" className="portfolio__wrapper">
      <div className="container ">
        <h1 className="text-uppercase text-center py-5">portfolios</h1>

        <div className="image-box-wrapper d-flex flex-wrap align-items-center justify-content-center">

          

          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxKojima}>
            <img src={kojima} alt="Kojima" className="portfolio-image" />
            <div className="overflow"></div>
            
            <FontAwesomeIcon className='portfolilo-icon' icon={faSearchPlus} />

          </div>
        </div>



      </div>
      {/* ここにポップアップを開く */}
   
      <PopupboxContainer {...popupboxConfigKojima} />
    </div>
  )
}

// export default Portfolio;
