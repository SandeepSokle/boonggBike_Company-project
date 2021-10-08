

import "./CSS/Three.css"
import { Header } from "./Slide3/Header"
import {WhyChoose} from "./Slide3/WhyChoose"
import {BikeSlider} from "./Slide3/BikeSlider"
import { HowItWorks } from "./Slide3/HowItWorks"
import { AtGlance } from "./Slide3/AtGlance"
import { GrowBusiness } from "./Slide3/GrowBusiness"
import { AnyQuery } from "./Slide3/AnyQuery"
import { FeedBack } from "./Slide3/FeedBacks"
import { Feature } from "./Slide3/Feature"
import { Footer } from "./Slide3/Footer"


let Three = ()=>{
    return <div className = "threeContainer">
        <Header/>
        <WhyChoose/>
        <BikeSlider/>
        <HowItWorks/>
        <AtGlance/>
        <GrowBusiness/>
        <AnyQuery/>
        <FeedBack/>
        <Feature/>
        {/* <Footer/> */}
    </div>
}

export default Three