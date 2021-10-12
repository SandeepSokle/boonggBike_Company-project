import "../SCSS/Navbar.scss";
import "material-icons/iconfont/material-icons.css";
import { useEffect } from "react";
import { useState } from "react";
import imageIcon from "../Img/boongg-white-logo.jpg"

let Navbar = () => {
  var [location, setLocation] = useState("pune");
  var [scrollVal, setScrollVal] = useState(0);

  var onSuccess = (position) => {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    setLocation("" + lat + lng);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollVal(window.scrollY);
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
        {console.log(scrollVal)}
        <div className="col-3 iconContainer">

       <img src={imageIcon} alt="" srcset="" />
        </div>

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

        <div className="col-2 navbarLoginBtn">
          <button type="button" class="btn btn-success loginBtn1 opacity-100">
            Login
          </button>
        </div>
        <div className="col-1"></div>
      </div>
    </nav>
  );
};

export default Navbar;
