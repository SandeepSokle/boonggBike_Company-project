


import React from "react";
import "../../SCSS/HomeScss/WhyChoose.scss";
import Image from "../../Img/HomeImg/companyBikeParking.png";
export const WhyChoose = () => {
  return (
    <div className="whyChooseContainer">
      <div className="whyChooseInstruct">
        <h3 className="whyChooseInstructHead">WHY CHOOSE US?</h3>
        <h6 className="whyChooseInstructinfo">
          We simplified bike rentals, so you can focus on what's important to
          you.
        </h6>
      </div>
      <div className="whyChooseinstructios">
        <div className="whyChooseImage">
          <img
            src={Image}
            alt="image"
            className="whyChooseImageImg"
            srcset=""
            width="400px"
            height="350px"
          />
          <h4 className="whyChooseImageText">
            We Santize Bike After Every Ride..!!
          </h4>
        </div>
        <div className="dataCoontainer">
          <div className="information">
            <div className="informationImg halmentImg"></div>
            <div className="informationTextContaner">
              <h4 className="informationHeading">Complementary Helmet</h4>
              <h6 className="informationInstructions">
                Your Safety is our priority. We Provide complementary helmets
                with every ride
              </h6>
            </div>
          </div>
          <div className="information">
            <div className="informationImg priceImg"></div>
            <div className="informationTextContaner">
              <h4 className="informationHeading">Zero Deposit</h4>
              <h6 className="informationInstructions">
                At Boongg you pay only for what you use. We don't take any
                deposit.
              </h6>
            </div>
          </div>
          <div className="information">
            <div className="informationImg OfferImg"></div>
            <div className="informationTextContaner">
              <h4 className="informationHeading">Lowest Price Guarantee</h4>
              <h6 className="informationInstructions">
                You can count on us for the best bike rental prices in the city!
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
