




import "../SCSS/Slide3/AtGlance.scss";
export const AtGlance = () => {
  return (
    <div className="container AtGlanceContainer">
      <div className="header row col-12">BOONGG AT A GLANCE</div>
      <div className="row col-12 glanceValue">
        <div className="col-4 GlanceContent">
          <div className="GlanceNumver">36000+</div>
          <div className="GlanceText">Happy Customers</div>
        </div>
        <div className="col-4 GlanceContent">
          <div className="GlanceNumver">500+</div>
          <div className="GlanceText">Top Notch Bikes</div>
        </div>
        <div className="col-4 GlanceContent">
          <div className="GlanceNumver">300+</div>
          <div className="GlanceText">Number Of Rides</div>
        </div>
      </div>
    </div>
  );
};
