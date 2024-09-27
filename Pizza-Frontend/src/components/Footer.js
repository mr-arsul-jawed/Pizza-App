import React from 'react';
import '../CSS/Footer.css'; 
import appStoreImg from '../assets/app-store.svg';
import googlePlayImg from '../assets/google-play.svg';
import fssaiLogo from '../assets/fssai-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
   <footer className="footer_change">
      <div className="container">
        <div className="col-md-1">
          <h5 id="order_now">Order Now</h5>
          <ul>
            <li><a href="deals">Deals</a></li>
            <li><a href="pizza">Pizza</a></li>
            <li><a href="sides">Sides</a></li>
            <li><a href="drinks">Drinks</a></li>
            <li><a href="desserts">Desserts</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>About</h5>
          <ul>
            <li><a href="about us">About Us</a></li>
            <li><a href="Delivery">Contactless Delivery</a></li>
            <li><a href="nutrition">Nutrition</a></li> 
            <li><a href="career">Career</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Our Policies</h5>
          <ul>
            <li><a href="privacy">Privacy</a></li>
            <li><a href="Terms & Conditions">Terms & Conditions</a></li>
            <li><a href="Responsible Disclosure">Responsible Disclosure</a></li>
            <li><a href="FAQs & Help">FAQs & Help</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Visit Pizza Hut</h5>
          <ul>
            <li><a href="Locate a Store">Locate a Store</a></li>
            <li><a href="Global Blog">Global Blog</a></li>
          </ul>
        </div>
        <div className="app-store-links">
          <a href="https://www.apple.com/in/app-store/"><img src= {appStoreImg} alt="App Store" /></a>
          <a href="https://play.google.com/"><img src={googlePlayImg} alt="Google Play" /></a>
        </div>
        <h5 id="follow-us">Follow us</h5>
        <div className="social-icons">
        <a id="icone" href="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a id="icone" href="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a id="icone" href="youtube"><FontAwesomeIcon icon={faYoutube} /></a>
              <a id="icone" href="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="footer-bottom">
          <p>Help us in serving you better <a href="feedback">Give Feedback</a></p>
          <p>Order delicious pizza on the go anywhere anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes. "T&C apply".</p>
          <p id="copy">&copy; 2024 Pizza Hut India. All rights reserved. License Number: 10017011004220</p>
          <img id="fssai" src={fssaiLogo} alt="FSSAI" />
        </div>
      </div>
    </footer>
 

  );
};

export default Footer;