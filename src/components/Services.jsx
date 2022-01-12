import React from 'react';
//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

export const Services = () => {
  return (

    <div id="services" className="services">
      <h2 className="services__title">Services</h2>

        <div className="servicesContainer">
          <div className="row servicesContainer__row">

            {/* 1 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="servicesContainer__rowBox">

                <div className="circleIconBg">
                  <FontAwesomeIcon className="circleIcon" icon={faDesktop} size="2x" />
                </div>

                <h3 className="servicesContainer__rowBox--title">Web Design</h3>
                <p className="servicesContainer__rowBox--text">
                  I approach each project individually and always focus on the result.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="servicesContainer__rowBox">

              <div className="circleIconBg">
                  <FontAwesomeIcon className="circleIcon" icon={faFileCode} size="2x" />
                </div>

                <h3 className="servicesContainer__rowBox--title">Web Development</h3>
                <p className="servicesContainer__rowBox--text">
                  Your website will be built with a new proven technologies.
                </p>
              </div>
            </div>

           {/* 3 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="servicesContainer__rowBox">

              <div className="circleIconBg">
                  <FontAwesomeIcon className="circleIcon" icon={faFacebookF} size="2x" />
                </div>

                <h3 className="servicesContainer__rowBox--title">Facebook Ads SMM</h3>
                <p className="servicesContainer__rowBox--text">
                  Your potential clients well see your services or product on Facebook.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="servicesContainer__rowBox">

              <div className="circleIconBg">
                  <FontAwesomeIcon className="circleIcon" icon={faGoogle} size="2x" />
                </div>
                
                <h3 className="servicesContainer__rowBox--title">Google Ads</h3>
                <p className="servicesContainer__rowBox--text">
                  Your service or product will appear at the top of the Google search.
                </p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Services
