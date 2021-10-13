

import { Header } from "../ComponentsHelper/HomeHelper/Header"
import {WhyChoose} from "../ComponentsHelper/HomeHelper/WhyChoose"
import {BikeSlider} from "../ComponentsHelper/HomeHelper/BikeSlider"
import { HowItWorks } from "../ComponentsHelper/HomeHelper/HowItWorks"
import { AtGlance } from "../ComponentsHelper/HomeHelper/AtGlance"
import { GrowBusiness } from "../ComponentsHelper/HomeHelper/GrowBusiness"
import { AnyQuery } from "../ComponentsHelper/HomeHelper/AnyQuery"
import { FeedBack } from "../ComponentsHelper/HomeHelper/FeedBacks"
import { Feature } from "../ComponentsHelper/HomeHelper/Feature"
import { Footer } from "../ComponentsHelper/HomeHelper/Footer"
import { Login } from "./Login"


let Home = (props)=>{
    return <div className = "homeContainer">

        {props.showLoginModal ? <Login/> : ""}

        <Header/>
        <WhyChoose/>
        <BikeSlider/>
        <HowItWorks/>
        <AtGlance/>
        <GrowBusiness/>
        <AnyQuery/>
        <FeedBack/>
        <Feature/>
        <Footer/>
    </div>
}

export default Home