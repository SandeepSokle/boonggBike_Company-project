



import lbb from "../Img/Slide3/lbb.png";
import vccircle from "../Img/Slide3/vccircle.png";
import bex from "../Img/Slide3/businessex.jpg";
import what from "../Img/Slide3/whatshot.jpg";
import "../SCSS/Slide3/Feature.scss";
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