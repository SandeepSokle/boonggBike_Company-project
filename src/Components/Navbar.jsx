import "../SCSS/Navbar.scss";
import "material-icons/iconfont/material-icons.css";
import { useState } from "react";
let Navbar = () => {
  var [location, setLocation] = useState("pune");

  var onSuccess = (position) => {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    setLocation("" + lat + lng);
  };

  return (
    <nav class="navbar navbarContainer fixed-top">
      <div class="container-fluid inner_nav d-flex justify-content-between row">
        <a class="navbar-brand icon col-3" href="#">
          {" "}
        </a>
        
        <div class="collapse navbar-collapse col-8" id="navbarScroll">
          <li class="row">
            <div class="input-group navInput col-md-2">
              <input
                type="text"
                class="form-control"
                id="inputGroupFile01"
                placeholder="Location..."
                value={location}
              />
              <label
                class="input-group-text"
                for="inputGroupFile01"
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(onSuccess);
                  } else {
                    alert("Geolocation is not supported by this browser.");
                  }
                }}
              >
                Location
              </label>
              <input
                type="datetime-local"
                class="form-control"
                id="inputGroupFile01"
                placeholder="starting Date"
              />
              <input
                type="datetime-local"
                class="form-control"
                id="inputGroupFile01"
                placeholder="ending Date"
              />
              <button type="button" class="btn btn-secondary">
                Rent Now
              </button>
            </div>
          </li>
        </div>
        <button type="button" class="btn btn-success loginBtn1 col-1">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
