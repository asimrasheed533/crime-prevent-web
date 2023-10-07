import React from "react";
import BlueRectangle from "../assets/blueRectengle.png";
import Logo from "../assets/logo.png";
import LogoBlack from "../assets/LogoBlack.png";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import Swal from "sweetalert2";

function VerificationCode() {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state.otp.message;
  const id = location.state.otp._id;

  console.log("OTP Screen otp", message);
  console.log("OTP Screen id", id);

  const [otp, setOtp] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp == message) {
      Swal.fire({
        title: "Success!",
        text: "OTP Verified",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: " #ffb579",
      });
      navigate("/change_pass", { state: { id: id } });
    } else {
      Swal.fire({
        title: "Error!",
        text: "You have entered wrong OTP",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: " #ffb579",
      });
    }
  };
  console.log("OTP", otp);

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
                Enter Verification Code
              </div>
              {/* <div className="user__main__left__content__form__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, iste.
              </div> */}
              <div className="user__main__left__content__form__input__container">
                <OtpInput
                  isInputNum
                  containerStyle="otp__container"
                  onChange={(e) => setOtp(e)}
                  value={otp}
                  numInputs={4}
                  separator={<span>&nbsp;</span>}
                />
              </div>
            </div>
            <div className="user__main__left__content__button__container">
              <button>Verify</button>
            </div>
            <div className="user__main__left__content__resend__button__container">
              <a href="#">Resend OTP</a>
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

export default VerificationCode;
