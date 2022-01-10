import React from 'react';
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
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
        <img className='portfolio-image-popupbox' src={netflix} alt="netflix" />    {/* Open the image */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com","_black")}>https://google.com</a>
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
        <img className='portfolio-image-popupbox' src={cityGuide} alt="City Guide App" />    {/* Open the image */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b>Demo:</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com", "_black","_black")}>https://google.com</a>
        <br />
        <b>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com","_black")}>https://google.com</a>
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
        <img className='portfolio-image-popupbox' src={portfolio} alt="Portfolio Project" />    {/* Open the image */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b>Demo:</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com", "_black")}>https://google.com</a>
        <br />
        <b>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com","_black")}>https://google.com</a>
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


  // ---------------TaskManager Project-------------
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className='portfolio-image-popupbox' src={taskManager} alt="Portfolio Project" />    {/* Open the image */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae saepe fuga ipsum alias tenetur praesentium, quos eum blanditiis officia, tempora, consequatur cum? Nesciunt necessitatibus, quo at hic vitae fugiat itaque.
        </p>
        <b>Demo:</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com", "_black")}>https://google.com</a>
        <br />
        <b>Git Hub</b> <a href="" className="hyper-link" onClick={() => window.open("https://google.com","_black")}>https://google.com</a>
      </>
    )
  //   PopupboxManager.open({ content })
  // }
  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        text: "yes",
      },
    },
  });
}
  // pop-up box 内のeffectなどを追加
  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      // text: "TaskManager Redux Project"
      // fontSize:"2px",
    },
    fadeIn: true,
    fadeInspeed: 500,
  }




  return (
    <div className="portfolio__wrapper">
      <div className="container ">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>

        <div className="image-box-wrapper d-flex flex-wrap align-items-center justify-content-center">

          {/* <div className="image-box-wrapper row justify-content-center"> This doesn't work*/}
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img src={netflix} alt="netflix" className="portfolio-image" />
            <div className="overflow"></div>
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

          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img src={taskManager} alt="taskManager" className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className='portfolilo-icon' icon={faSearchPlus} />

          </div>
        </div>



      </div>
      {/* ここにポップアップを開く */}
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

// export default Portfolio;
