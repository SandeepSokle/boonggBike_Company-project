import "../../SCSS/HomeScss/BikeSlider.scss";

export const BikeSlider = () => {
  return (
    <div className="BikeSliderOuter row">
      <div className="firstSpace col-3"></div>
      <div className="bikeSliderContanier col-6">
        <div className="bikeSliderText">
          EXCLUSIVE DEALS ONLY IN <r>PUNE</r>
        </div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide bikeSliderImage"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner sliderWindow">
            <div class="carousel-item active innerItems">
              <div className="firstImage Img"></div>
              <div class="carousel-caption d-none d-md-block">
                <div className="textitems">
                  <h4>Cruiser</h4>
                  <p>Rent starting from 50/- per Hour</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="secondImage Img"></div>
              <div class="carousel-caption d-none d-md-block">
                <div className="textitems">
                  <h4>Scooters</h4>
                  <p>Rent starting from 30/- per Hour</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="thirdImage Img"></div>
              <div class="carousel-caption d-none d-md-block">
                <div className="textitems">
                  <h4>Standard Bike</h4>
                  <p>Rent starting from 40/- per Hour</p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
