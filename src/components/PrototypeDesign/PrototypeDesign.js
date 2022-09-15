import React from "react";
import { useEffect } from "react";
import "./PrototypeDesign.css";
import { BsSearch } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import GoodWorkShoes from "../../images/good-work-shoes.jpeg";
import ShoeImageOne from "../../images/shoe-image-one.jpeg";
import ShoeImageTwo from "../../images/shoe-image-two.jpeg";
import ShoeImageThree from "../../images/shoe-image-three.jpeg";
import ShoeImageFour from "../../images/shoe-image-four.jpeg";
import NiceWorkShoes from "../../images/nice-work-shoes.jpeg";
import Footer from "../Footer/Footer";

const PrototypeDesign = () => {
  useEffect(() => {
    document.title = "Prototype Design";
  }, []);
  return (
    <div>
      <div className="prototype-navbar">
        <div className="golden-shoe">
          <p className="golden-shoe-style navbar-font center-text">
            Golden Shoe
          </p>
        </div>
        <div className="navbar-options">
          <p className="navbar-font">New Arrivals</p>
          <p className="navbar-font">Footwear</p>
          <p className="navbar-font">Shoe Care</p>
          <p className="navbar-font">Custom Shoes</p>
          <p className="navbar-font">Login</p>
        </div>
        <div className="icons">
          <BsSearch />
          <BsPersonFill />
          <AiFillShopping />
        </div>
      </div>
      <div className="shoe-background-div">
        <img
          src={GoodWorkShoes}
          className="shoe-background"
          alt="shoes-background"
        />
      </div>
      <div className="shop-button-div">
        <button className="shop-button">SHOP ALL</button>
      </div>
      <div className="shoe-selection">
        <div className="shoe-div-one shoe-div-size black-border">
          <img src={ShoeImageOne} className="shoe-image" alt="shoe-one" />
          <div className="shoe-text">
            <p>Pembrey</p>
            <p>Bookbinder Fume Penny Loafer Black</p>
            <p>£150</p>
          </div>
        </div>
        <div className="shoe-div-two shoe-div-size black-border">
          <img src={ShoeImageTwo} className="shoe-image" alt="shoe-two" />
          <div className="shoe-text">
            <p>Haverhill</p>
            <p>Rois Calf Derby Burgundy</p>
            <p>£250</p>
          </div>
        </div>
        <div className="shoe-div-three shoe-div-size black-border">
          <img src={ShoeImageThree} className="shoe-image" alt="shoe-three" />
          <div className="shoe-text">
            <p>Haverhill</p>
            <p>Roisi Calf Derby Black</p>
            <p>£300</p>
          </div>
        </div>
        <div className="shoe-div-four shoe-div-size black-border">
          <img src={ShoeImageFour} className="shoe-image" alt="shoe-four" />
          <div className="shoe-text">
            <p>Shannon T</p>
            <p>Soft Grain Calf Leather Derby Burnt</p>
            <p>£200</p>
          </div>
        </div>
      </div>
      <div className="image-and-sign-up">
        <div className="nice-shoes-image-div">
          <img src={NiceWorkShoes} className="nice-shoes-image" alt="shoes" />
        </div>
        <div className="newsletter-info center-text">
          <h3>SIGN UP FOR OUR NEWSLETTER </h3>
          <p className="seventy-percent-width">
            NEVER MISS ANY INFO. Get updates for new arrivals, exclusive
            releases, and more!
          </p>
          <div className="email">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="some-margin email-input"
            />
          </div>

          <div className="submit-button-div">
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrototypeDesign;
