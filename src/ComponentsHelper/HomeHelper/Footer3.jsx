import Image from "../../Img/boongg-white-logo-full-new.png";

export const Footer3 = () => {
  return (
    <div className="footer3Container">
      <div className="footer3InnerContainer row">
        <div className="footer3inner footerIcon col-12 mb-4 col-md-4">
          <img src={Image} alt="" srcset="" width="150rem" />
            <h4>Get Ahead Of The Road</h4>
        </div>
        <div className="footer3inner col-12 mb-4 col-md-4">
          <h2>Our Company</h2>
          <h5>Blogs</h5>
          <h5>About Us</h5>
          <h5>Contact Us</h5>
          <h5>Partner with Us</h5>
        </div>
        <div className="footer3inner col-12 mb-4 col-md-4 ">
          <h2>Policies</h2>
          <h5>Privacy Policy</h5>
          <h5>Terms and Conditions</h5>
          <h5>FAQs</h5>
        </div>
      </div>
    </div>
  );
};
