import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from "../../assets/tick.png";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>140+ expert guides to help reduce screen time</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Smarter, faster routines for a balanced life</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new members</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Trusted, reliable partners for your wellness journey</span>
          </div>
        </div>
        <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>
{/*         <div className="partners">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
