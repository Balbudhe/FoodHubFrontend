import React, { useState } from "react";
import "./Foote.css";
import './Responsfoot.css';
const Foote = () => {
  const [date,setDate]=useState(new Date());
  
  return (
    <div className="footer-sec">
      <div className="footer">
        <div className="sec1">
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="https://foodhubforbusiness.com/partner-with-foodhub/">Become a partner</a></li>
          </ul>
        </div>
        <div className="sec1">
          <ul>
            <li><a href="https://foodhubcareers.com/">Careers</a></li>
            <li><a href="https://global.foodhub.com/terms-of-use.html">Terms of Use</a></li>
          </ul>
        </div>
        <div className="sec1">
          <ul>
            <li><a href="https://global.foodhub.com/terms-and-condition.html">Terms and Conditions</a></li>
            <li><a href="https://global.foodhub.com/privacy-policy.html">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="sec1">
          <ul>
            <li>Mail : <span>hello@foodhub.com</span></li>
            <li>Tel : <span>+91 9567834568</span></li>
          </ul>
        </div>
        <div className="sec1">
          <ul>
            <li>Follow us</li>
            <li><div className="platform-sec">
              <div className="platform">
               <i className="fa-brands fa-facebook-f"></i>
              </div>
              <div className="platform">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="platform">
               <i className="fa-brands fa-youtube"></i>
              </div>
              </div></li>
          </ul>
        </div>
      </div>
      <div className="copy-rightsec">
        <img src="https://global.foodhub.com/img/logo-foodhub-white.png"></img>
        <p>{`© ${date.getFullYear()} Foodhub. All rights reserved.`}</p>
      </div>
    </div>
  );
};

export default Foote;
