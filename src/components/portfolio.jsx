import React from 'react';
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import kojima from "../images/kojima.png";
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus, } from '@fortawesome/free-solid-svg-icons';

// REACT POP-UP BOX
// import Popup from 'reactjs-popup';
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import 'react-popupbox/dist/react-popupbox.css';




export const Portfolio = () => {

  // --------------Netflix-------------
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className='portfolioImage' src={netflix} alt="netflix" />    {/* Open the image */}
        <p className='portfolioText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b className='portfolioTitle'>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com","_black")}>https://google.com</a>
      </>
    )
  //   PopupboxManager.open({ content })
  // }
  PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Yourdsds",
        },
      },
    });
  }

  // pop-up box 内のeffectなどを追加
  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      // text: "netflix project",
        // fontSize:"2px",
    },
    fadeIn: true,
    fadeInspeed: 500,
  }


  // ---------------City Guide App-------------
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className='portfolioImage' src={cityGuide} alt="City Guide App" />    {/* Open the image */}
        <p className='portfolioText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b className='portfolioTitle'>Demo:</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com", "_black","_black")}>https://google.com</a>
        <br />
        <b className='portfolioTitle'>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com","_black")}>https://google.com</a>
      </>
    )
    // PopupboxManager.open({ content })
  // }
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Yourvsfdsffsdfdsds",
      },
    },
  });
}

  // pop-up box 内のeffectなどを追加
  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      // text: "City Guide App"
    },
    fadeIn: true,
    fadeInspeed: 500,
  }

  // ---------------Portfolio Project-------------
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className='portfolioImage' src={portfolio} alt="Portfolio Project" />    {/* Open the image */}
        <p className='portfolioText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b className='portfolioTitle'>Demo:</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com", "_black")}>https://google.com</a>
        <br />
        <b className='portfolioTitle'>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com","_black")}>https://google.com</a>
      </>
    )
  //   PopupboxManager.open({ content })
  // }
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "Yaaay",
      },
    },
  });
}



  // pop-up box 内のeffectなどを追加
  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      // text: "Portfolio React and Material UI Project"
    },
    fadeIn: true,
    fadeInspeed: 500,
  }


  // ---------------kojima Project-------------
  const openPopupboxKojima = () => {
    const content = (
      <>
        <img className='portfolioImage' src={kojima} alt="Portfolio Project" />    {/* Open the image */}
        <p className='portfolioText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b className='portfolioTitle'>Demo:</b> <a href="" className="hyper-link" onClick={() => window.open("https://korocatty.github.io/works/", "_black")}>https://korocatty.github.io/works</a>
        <br />
        <b className='portfolioTitle'>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://github.com/KoroCatty/works","_black")}>https://github.com/KoroCatty/works</a>
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
        <h1 className="text-uppercase text-center py-5">portfolio</h1>

        <div className="image-box-wrapper d-flex flex-wrap align-items-center justify-content-center">

          {/* <div className="image-box-wrapper row justify-content-center"> This doesn't work(too old?)*/}

          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img src={netflix} alt="netflix" className="portfolio-image" />
            <div className="overflow"></div>

            {/* 虫メガネアイコン */}
            <FontAwesomeIcon className='portfolilo-icon' icon={faSearchPlus} />

          </div>

          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img src={cityGuide} alt="cityGuide" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className='portfolilo-icon' icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img src={portfolio} alt="portfolio" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className='portfolilo-icon' icon={faSearchPlus} />

          </div>

          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxKojima}>
            <img src={kojima} alt="Kojima" className="portfolio-image" />
            <div className="overflow"></div>
            
            <FontAwesomeIcon className='portfolilo-icon' icon={faSearchPlus} />

          </div>
        </div>



      </div>
      {/* ここにポップアップを開く */}
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigKojima} />
    </div>
  )
}

// export default Portfolio;
