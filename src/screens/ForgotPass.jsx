import { useState } from "react";
import LogoBlack from "../assets/LogoBlack.png";
import Email from "../assets/Email.png";
import BlueRectangle from "../assets/blueRectengle.png";
import Logo from "../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("Sending");
    setLoading(true);
    setEmail("");
    e.preventDefault();
    axios
      .post("http://crime-reporting-api.herokuapp.com/mail", {
        mail: email,
      })
      .then((res) => {
        console.log("Response", res.data);
        setLoading(false);
        navigate("/verify", { state: { otp: res.data } });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: " #ffb579",
        });
        console.log(err.response);
        setLoading(false);
      });
  };

  return (
    <div className="user__main__container">
      <div className="user__main__container__content">
        <div className="user__main__left">
          <form onSubmit={handleSubmit} className="user__main__left__content">
            <div className="user__main__left__content__logo">
              <img src={LogoBlack} alt="Logo" />
            </div>
            <div className="user__main__left__content__form">
              <div className="user__main__left__content__form__title">
                Forgot Password
              </div>

              <div className="signin__main__left__content__form__input__container">
                <div className="BAR__content__form__input__container">
                  <div className="BAR__content__form__input__icon">
                    <img src={Email} alt="User Icon" />
                  </div>
                  <div className="BAR__content__form__input__box">
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="user__main__left__content__button__container">
              <button className={loading ? "disabled-link" : ""}>Verify</button>
            </div>
          </form>
        </div>
        <div className="user__main__right">
          <div className="user__main__right__content">
            <div className="user__main__right__content__img">
              <img src={BlueRectangle} alt="Blue Rectangel Background" />
            </div>
            <div className="user__main__right__content__logo">
              <img src={Logo} alt="Logo on image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
