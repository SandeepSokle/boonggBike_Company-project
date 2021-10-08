import { Footer1 } from "./Footer1"
import { Footer2 } from "./Footer2"
import { Footer3 } from "./Footer3"
import { Footer4 } from "./Footer4"

import "../SCSS/Slide3/Footer.scss";


export const Footer = ()=>{
    return (
        <div  className = "footerContainer">
            <Footer1/>
            <Footer2/>
            <Footer3/>
            <Footer4/>
        </div>
    )
}