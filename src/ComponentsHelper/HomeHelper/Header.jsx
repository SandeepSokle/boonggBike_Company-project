import { useState } from "react";
import "../../SCSS/HomeScss/Header.scss";
import React from "react";

export const Header = () => {
  var [location, setLocation] = useState("pune");

  var onSuccess = (position) => {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    setLocation("" + lat + lng);
  };

  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide slideWindow headerContainer"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner slides">
        <div class="carousel-item active  slide1">
          <div className="contantContainer">
            <div className="slide3HeaderIcon"></div>
            <span className="headerHead">START YOUR DREAM ADVENTURE</span>
            <span className="headerExperience">Own Experiences not Bikes</span>
            <span className="rentBikeText">Rent A bike in Pune</span>
            <ul class="navbar-nav me-auto navbar-nav-scroll headerInputFrame">
              <div class="input-group headerInput">
                <div className="headerLocationInner">
                  <input
                    type="text"
                    class="form-control co-10"
                    placeholder="Location..."
                    value={location}
                  />
                  <label
                    class="input-group-text col-2"
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(onSuccess);
                      } else {
                        alert("Geolocation is not supported by this browser.");
                      }
                    }}
                  >
                    <span class="material-icons">my_location</span>
                  </label>
                </div>
                <input
                  type="datetime-local"
                  class="form-control"
                  placeholder="starting Date"
                />
                <input
                  type="datetime-local"
                  class="form-control"
                  placeholder="ending Date"
                />
                <button type="button" class="btn btn-secondary">
                  Rent Now
                </button>
              </div>
            </ul>
          </div>
        </div>
        {/* <div class="carousel-item slide2">
          <div className="contantContainer">
            <div className="slide3HeaderIcon"></div>
            <span className="headerHead">START YOUR DREAM ADVENTURE</span>
            <span className="headerExperience">Own Experiences not Bikes</span>
            <span className="rentBikeText">Rent A bike in Pune</span>
            <ul class="navbar-nav me-auto my-2 navbar-nav-scroll headerInputFrame">
              <li class="headerInputFrame">
                <div class="input-group headerInput">
                  <input
                    type="text"
                    class="form-control1"
                    placeholder="Location..."
                    value={location}
                  />
                  <label
                    class="input-group-text"
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
                    placeholder="starting Date"
                  />
                  <input
                    type="datetime-local"
                    class="form-control"
                    placeholder="ending Date"
                  />
                  <button type="button" class="btn btn-secondary">
                    Rent Now
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="carousel-item slide3">
          <div className="contantContainer">
            <div className="slide3HeaderIcon"></div>
            <span className="headerHead">START YOUR DREAM ADVENTURE</span>
            <span className="headerExperience">Own Experiences not Bikes</span>
            <span className="rentBikeText">Rent A bike in Pune</span>
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll headerInputFrame">
              <li class="headerInputFrame">
                <div class="input-group headerInput col-md-2">
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
            </ul>
          </div>
        </div> */}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
