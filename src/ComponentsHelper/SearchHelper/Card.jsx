import Image from "../../Img/HomeImg/cruuiser.png";

export const Card = () => {
  return (
    <div class="card col-3 me-3 ms-3 mb-3">
      <div className="searchCardImage">
        <img src={Image} class="card-img-top" alt="..." />
      </div>
      <div class="card-body searchCardContant">
        <div className="searchCardTitle">
          <h5 class="card-title">Bajaj Avenger Street 150</h5>
          <span className="searchCardLeftBikes">1 Left</span>
        </div>

        <select
          class="form-select searchCardSelectLocation"
          aria-label="Default select example"
        >
          <option selected>Select Your Nearest Location</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <button className="searchCardBookNow">Book Now</button>
        <button className="seachCardContactBtn">
          <span class="material-icons-outlined">call</span>
        </button>
      </div>
    </div>
  );
};
