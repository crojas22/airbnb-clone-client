import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

const Footer = () => {
  return(
    <div className="border-top mt-3 footer">
      <div className="container">
        <div className="container-fluid px-0 py-4">
          <div className="d-none d-md-flex border-bottom row pb-4">
            <div className="col-md-3">
              <div className="mb-3">
                Airbnb
              </div>
              <ul className="text-muted font-regular">
                <li>
                  Careers
                </li>
                <li>
                  Press
                </li>
                <li>
                  Policies
                </li>
                <li>
                  Help
                </li>
                <li>
                  Diversity & Belonging
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                Discover
              </div>
              <ul className="text-muted font-regular ">
                <li>
                  Trust & Safety
                </li>
                <li>
                  Travel Credit
                </li>
                <li>
                  Gift Cards
                </li>
                <li>
                  Airbnb Citizen
                </li>
                <li>
                  Business Travel
                </li>
                <li>
                  Guidebooks
                </li>
                <li>
                  Airbnbmag
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                Hosting
              </div>
              <ul className="text-muted font-regular">
                <li>
                  Why Host
                </li>
                <li>
                  Hospitality
                </li>
                <li>
                  Responsible Hosting
                </li>
                <li>
                  Community Center
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <FaFacebook size={20}/>
                <FaTwitter size={20}/>
                <FaInstagram size={20}/>
              </div>
              <ul className="text-muted font-regular">
                <li>
                  Terms
                </li>
                <li>
                  Privacy
                </li>
                <li>
                  Site Map
                </li>
              </ul>
            </div>
          </div>
          <SimpleFooter />
        </div>
      </div>
    </div>
  )
};

export const SimpleFooter = () => (
  <div className="d-flex py-md-4 justify-content-between">
    <div className="text-muted">
      &copy;  Airbnb, Inc.
    </div>
    <div className="d-flex">
      <div className="mr-3">
        English <FaAngleDown />
      </div>
      <div>
        USD <FaAngleDown />
      </div>
    </div>
  </div>
);

export default Footer;