import "../../SCSS/HomeScss/HowItWorks.scss";
import dateLogo from "../../Img/HomeImg/chooseDate.svg";
import bikeLogo from "../../Img/HomeImg/chooseBike.svg";
import locationLogo from "../../Img/HomeImg/chooseLocation.svg";
import tripLogo from "../../Img/HomeImg/chooseTrip.svg";
export const HowItWorks = () => {
  return (
    <div class="howItWorkContainer ">
      <div class="row justify-content-md-center">
        <div class="col-12">
          <h2>HOW IT WORKS?</h2>
          <p>
            We simplified bike rentals, so you can focus on what's important to
            you.
          </p>
        </div>
      </div>

      <div class="row howItWorkRow">
        <div class="col-3">
          <div className="image">
            <img src={dateLogo} class="img-thumbnail" alt="..." />
          </div>
          <div className="workingText">
            Set the date of your ride and then search for the bike that you want
          </div>
        </div>
        <div class="col-3">
          <div className="image">
            <img src={bikeLogo} class="img-thumbnail" alt="..." />
          </div>
          <div className="workingText">
            Choose out of various bikes that best suits the trip you’re about to
            take.
          </div>
        </div>
        <div class="col-3">
          <div className="image">
            <img src={locationLogo} class="img-thumbnail" alt="..." />
          </div>
          <div className="workingText">
            Get suited up and head to the pick- up location to get your ride.
          </div>
        </div>
        <div class="col-3">
          <div className="image">
            <img src={tripLogo} class="img-thumbnail" alt="..." />
          </div>
          <div className="workingText">
            Get ready to roll and have a nice time tripping!
          </div>
        </div>
      </div>
    </div>
  );
};
