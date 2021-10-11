import Image from "../../Img/HomeImg/contact.png";
import "../../SCSS/HomeScss/AnyQuery.scss";

export const AnyQuery = () => {
  return (
    <div className="anyQueryContainer container">
      
      <div className="queryImage col-xs-10 col-lg-6 col-xl-6">
        <img src={Image} alt="" srcset="" width="400px" class="img-fluid" />
      </div>
      
      <div className="contant  col-xs-10  col-lg-6 col-xl-6">
        <h2>Any Query Any Question</h2>
        <p>If you have any doubts, please visit our FAQ Section.</p>
        <p>
          Have an issue or want to know about how things work? Just ring us up!
          We would love to hear you out at support@boongg.com !
        </p>

        <select class="form-select" aria-label="Default select example">
          <option selected>Select a Store</option>
          <option value="1">Kothud</option>
          <option value="2">Magarpatta City</option>
          <option value="3">Wadgaon Sheri-Tempo Chock</option>
          <option value="4">Viman Nagar</option>
          <option value="5">Katraj</option>
        </select>

        <p className="queryContact">+91 1234567890</p>
        <h6>Whatsapp , Call, Sms (All Days 09:00AM to 09:00PM IST).</h6>
      </div>
    </div>
  );
};
