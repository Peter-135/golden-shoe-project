import React from "react";
import "./Footer.css";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="golden-shoe-footer">
      <div className="keep-in-contact white-text">
        <h5 className="gold">KEEP IN CONTACT</h5>
        <p className="smaller-text">
          Be the first to know about our new releases and updates!
        </p>
        <div className="social-media-icons white-text">
          <FiTwitter />
          <AiOutlineFacebook />
          <BsInstagram />
          <AiOutlineLinkedin />
        </div>
      </div>
      <div className="about-us white-text ">
        <h5 className="gold">About Us</h5>
        <p className="smaller-text">Golden Shoe's Story</p>
        <p className="smaller-text">Career</p>
      </div>
      <div className="customer-service white-text">
        <h5 className="gold">CUSTOMER SERVICE</h5>
        <p className="smaller-text">Contact Us</p>
        <p className="smaller-text">Track Your Order</p>
        <p className="smaller-text">Returns & Exchanges</p>
        <p className="smaller-text">FAQs</p>
        <p className="smaller-text">Repairs</p>
      </div>
    </div>
  );
};

export default Footer;
