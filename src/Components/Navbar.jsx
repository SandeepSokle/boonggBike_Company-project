import "../SCSS/Navbar.scss";
import "material-icons/iconfont/material-icons.css";
import { useEffect } from "react";
import { useState } from "react";
import imageIcon from "../Img/boongg-white-logo.jpg";
import imageIconMobile from "../Img/mobileLogo.png";
import { Login } from "./Login";

let Navbar = (props) => {
  var [location, setLocation] = useState("pune");
  var [scrollVal, setScrollVal] = useState(0);
  var [windowWidth, setWindowWidth] = useState();
  var [showSearch, setShowSearch] = useState(false);
  var [showMenuItems, setShowMenuItems] = useState(false);

  var onSuccess = (position) => {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    setLocation("" + lat + lng);
  };

  useEffect(() => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", (e) => {
      setScrollVal(window.scrollY);
      setShowMenuItems(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("remove Event");
      });
    };
  }, []);

  return (
    <nav
      class={`navbarContainer fixed-top ${
        scrollVal == 0
          ? "opacity-0"
          : scrollVal < 120
          ? "opacity-50"
          : "opacity-100"
      }`}
    >
      <div class="container-fluid inner_nav d-flex justify-content-between row">
        {windowWidth < 1024 ? <div className=" col-sm-1"></div> : ""}

        <div className="col-3 ms-5 ms-sm-0 iconContainer">
          {windowWidth < 470 ? (
            <img src={imageIconMobile} alt="" srcset="" className="icon" />
          ) : (
            <img src={imageIcon} alt="" srcset="" className="icon" />
          )}

        </div>

        {windowWidth < 1024 ? (

          
          <div className="col-1 col-sm-5"></div>

        ) : (
          <div
            className={`col-7 navbarInputContainer row navbarLocation  ${
              scrollVal < 400
                ? "opacity-0"
                : scrollVal < 500
                ? "opacity-50"
                : "opacity-100"
            }`}
          >
            <div className="col-4 row">
              <input
                type="text"
                name="Location"
                class="col-10 navbarLocation"
                placeholder="Location....."
              />
              <div className="col-2">
                <span class="material-icons">my_location</span>
              </div>
            </div>
            <div className="col-3">
              <input
                type="datetime-local"
                name="Starting Date"
                class="navbarStarting_date"
              />
            </div>
            <div className="col-3">
              <input
                type="datetime-local"
                name="Starting Date"
                class="navbarEndingDate"
              />
            </div>
            <div className="col-2">
              <button type="button" className="navbarRentBtn">
                Rent Now
              </button>
            </div>
          </div>
        )}

        <div className="col-2 navbarLoginBtn">
          {windowWidth <= 425 ||
          (windowWidth > 425 && windowWidth < 1024 && scrollVal >= 500) ? (
            <span
              class="material-icons btn navbarMenuBtn col-4"
              onClick={(e) => {
                if (showMenuItems) {
                  setShowMenuItems(false);
                  e.target.parentNode.removeChild(
                    e.target.parentNode.querySelector(".menuListItem")
                  );
                  return;
                }
                setShowMenuItems(true);
                let menuList = document.createElement("div");
                menuList.classList.add("menuListItem");
                menuList.innerHTML = `<div className="menuLoginBtn">Login</div>
              <div className="menuSearchBtn">Search</div>`;
                console.log(e.target.parentNode);
                e.target.parentNode.appendChild(menuList);
              }}
            >
              menu
            </span>
          ) : (
            <button type="button" class="btn btn-success loginBtn1 opacity-100" onClick = {()=>{
              if(props.showLoginModal){
                props.setShowLoginModal(false)
              }else{
                props.setShowLoginModal(true)
              }  
            }} >
              Login
            </button>
          )}
        </div>
        <div className="col-1"></div>
      </div>
    </nav>
  );
};

export default Navbar;
