



import lbb from "../../Img/HomeImg/lbb.png";
import vccircle from "../../Img/HomeImg/vccircle.png";
import bex from "../../Img/HomeImg/businessex.jpg";
import what from "../../Img/HomeImg/whatshot.jpg";
import "../../SCSS/HomeScss/Feature.scss";

export const Feature = ()=>{
    return (
        <div className = "featureContainer container">
            <h1 className="featureHeader">FEATURED IN</h1>
            <div className="featureData row">
                <img src={lbb} alt="" className="col-2" />
                <img src={vccircle} alt="" className="col-2" />
                <img src={bex} alt="" className="col-2" />
                <img src={what} alt="" className="col-2" />
            </div>
        </div>
    )
}