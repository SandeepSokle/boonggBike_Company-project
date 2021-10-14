import "../SCSS/Search.scss";

export const Search = () => {
  return (
    <div className="searchContainer">
      <div className="topContainer">
        <div className="topContainerItems">
          <div className="searchStartingDate">
            <input type="date" className="searchStartingDateInput" />
            <input type="date" className="searchEndingDateInput" />
            <button className="sarchModifyBtn">Modify Search</button>
            <button type="button" className="searchMapView">
              Map View <span class="material-icons">place</span>
            </button>
            <button className="searchCurrency">
              <span class="material-icons">currency_rupee</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bottomContainer">Bottom Container</div>
    </div>
  );
};
