import React from 'react';
import logo from "../logo.png";
import {Link} from "react-scroll";

// REACT FONT AWESOME IMPORTS
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        <a className="navbar-brand" href="#">
          <img className="headerLogo" src={logo} alt="logo..." />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" duration={600} offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="about" duration={600} offset={-110} className="nav-link" href="#">About</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="services" duration={600} offset={-110} className="nav-link" href="#">Services</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="experience" duration={600} offset={-110} className="nav-link" href="#">Experience</Link >
            </li>

            <li className="nav-item">
              <Link smooth={true} to="portfolio" duration={600} offset={-110} className="nav-link" href="#">Portfolio</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" duration={600} offset={-110} className="nav-link" href="#">Contacts</Link >
            </li>


          </ul>

        </div>
      </div>
      {/* .container */}
    </nav>
  )
}

export default Navbar
