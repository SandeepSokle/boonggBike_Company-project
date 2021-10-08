import "./CSS/Navbar.scss";
import "material-icons/iconfont/material-icons.css";
import { useState } from "react";
let Navbar = () => {


  var [location,setLocation] = useState("pune");


  var onSuccess = (position) => {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    setLocation("" + lat + lng);
}


  return (
    <nav class="navbar navbar-expand-lg navbarContainer">
      <div class="container-fluid inner_nav">
        <a class="navbar-brand icon" href="#">
          {" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class = "row">
              <div class="input-group navInput col-md-2">
                <input type="text" class="form-control" id="inputGroupFile01" placeholder = "Location..." value = {location}/>
                <label class="input-group-text" for="inputGroupFile01" onClick = {()=>{
                   if (navigator.geolocation) {
                     navigator.geolocation.getCurrentPosition(onSuccess);
                  } else {
                    alert("Geolocation is not supported by this browser.");
                  }
                }}>
                  Location
                </label>
                <input type="datetime-local" class="form-control" id="inputGroupFile01" placeholder = "starting Date"/>
                <input type="datetime-local" class="form-control" id="inputGroupFile01" placeholder = "ending Date" />
                <button type="button" class="btn btn-secondary">Rent Now</button>
              </div>
            </li>
          </ul>
          <form class="d-flex">
          <button type="button" class="btn btn-success loginBtn">Login</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
