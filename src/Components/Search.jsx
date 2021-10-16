import { useState } from "react/cjs/react.development";
import { Card } from "../ComponentsHelper/SearchHelper/Card";
import "../SCSS/Search.scss";

export const Search = () => {
  var [isModal, setIsModal] = useState(false);
  var [isLocation, setIsLocation] = useState(false);

  return (
    <div className="searchContainer">
      <div className="topContainer">
        <div className="topContainerItems">
          <div>
            <input type="datetime-local" className="searchStartingDateInput" />
          </div>
          <div>
            <input type="datetime-local" className="searchEndingDateInput" />
          </div>
          <div>
            <button className="sarchModifyBtn">Modify Search</button>
          </div>
          <div>
            <button type="button" className="searchMapView">
              Map View <span class="material-icons">place</span>
            </button>
          </div>
          <div>
            <button className="searchCurrency">
              <span class="material-icons-outlined">currency_rupee</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bottomContainer row">
        <div className="searchLeftNav col-2 me-2 ms-3">
          <div className="searchByModel row">
            <div className="searchByModelContainer mb-4">
              <span className="leftNavHead">Search By Model</span>
              <div className="listOfModel">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
              </div>
              <div
                className="remainingItemModalBtn"
                onClick={() => {
                  setIsLocation(false);
                  setIsModal(true);
                }}
              >
                +42 more Model{" "}
                <span class="material-icons remainingItemModalBtnArrow">
                  arrow_drop_down
                </span>
                {isModal ? <ModalData /> : ""}
              </div>
            </div>
          </div>
          <div className="searchByLocation row">
            <div className="searchByLocationContainer mb-4">
              <span className="leftNavHead">Search By Location</span>
              <div className="listOfModel">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
              </div>
              <div
                className="remainingItemModalBtn"
                onClick={() => {
                  setIsLocation(true);
                  setIsModal(false);
                }}
              >
                +8 more Location{" "}
                <span class="material-icons remainingItemModalBtnArrow">
                  arrow_drop_down
                </span>
                {isLocation ? <LocationData /> : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="searchGrid col-9 ms-3 row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export const ModalData = () => {
  return (
    <div className="modalDataContainer">
      <div className="modalDataSearchbar mb-4">
        <input type="text" className="modalSearchInput "  placeholder = "Model..."/>
        <Filters />
      </div>
      <div className="BikeListContainer">
        {Array.apply(0, Array(20)).map(() => {
          return <BikesOnSearch />;
        })}
      </div>
    </div>
  );
};

export const LocationData = () => {
  return (
    <div className="locationDataContainer">
      <div className="locationDataSearchbar mb-4">
        <input type="text" className="locationSearchInput " placeholder = "Location..." />
        <Filters />
      </div>
      <div className="BikeListContainer">
        {Array.apply(0, Array(15)).map(() => {
          return <BikesOnSearch />;
        })}
      </div>
    </div>
  );
};

export const BikesOnSearch = () => {
  return (
    <div class="form-check ms-5 ">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label" for="flexCheckDefault">
        Default checkbox
      </label>
    </div>
  );
};

export const Filters = () => {
  return (
    <div className="modalDataSearchFilter">
      <div className="filterInner">A</div>
      <div className="filterInner">B</div>
      <div className="filterInner">C</div>
      <div className="filterInner">D</div>
      <div className="filterInner">E</div>
      <div className="filterInner">F</div>
      <div className="filterInner">G</div>
      <div className="filterInner">H</div>
      <div className="filterInner">I</div>
      <div className="filterInner">J</div>
      <div className="filterInner">K</div>
      <div className="filterInner">L</div>
      <div className="filterInner">M</div>
      <div className="filterInner">N</div>
      <div className="filterInner">O</div>
      <div className="filterInner">P</div>
      <div className="filterInner">Q</div>
      <div className="filterInner">R</div>
      <div className="filterInner">S</div>
      <div className="filterInner">T</div>
      <div className="filterInner">U</div>
      <div className="filterInner">V</div>
      <div className="filterInner">W</div>
      <div className="filterInner">X</div>
      <div className="filterInner">Y</div>
      <div className="filterInner">Z</div>
    </div>
  );
};
