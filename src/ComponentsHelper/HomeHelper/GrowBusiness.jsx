



import Image from "../../Img/HomeImg/grow.jpg";
import "../../SCSS/HomeScss/GrowBusiness.scss";
export const GrowBusiness = () => {
  return (
    <div className="GrowBusinessContainer">
      <img src={Image} class="d-block w-100 h-30" alt="..." />
      <div class="content ">
          <div className="col-1"></div>
        <div className="textContainer col-6">
          <h2>GROW YOUR BUSINESS WITH BOONGG</h2>
          <p>
            Start earning from the 1st day of business & Get the best ROI in
            business. Highly automated bike rental business | Minimal manual
            internvention | Maximized sales
          </p>
        </div>
        <div className="col-2"></div>
        <div className="btn col-2">
          <button className = "buttonTxt" type="button">Own a Franchise</button>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};
