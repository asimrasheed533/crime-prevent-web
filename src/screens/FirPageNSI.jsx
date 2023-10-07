import React from "react";
import Wrapper from "../assets/Wrapper.png";
import Header from "../components/Header";
import sadIcon from "../assets/sadIcon.png";

export default function FirPageNSI() {
  return (
    <div className="user__landing__container__main">
      <div className="user__landing__container__one">
        <div
          className="user__landing__container__one__img"
          id="fir__container__one__img"
        >
          <img src={Wrapper} alt="Wrapper" />
        </div>
        <div className="user__landing__header__wrapper">
          <Header />
        </div>
        <div className="header__content">
          <div className="header__content__text">FIR Form</div>
        </div>
      </div>
      <div className="user__landing__container__two" id="fir__container__two">
        <div className="user__landing__container__two__content">
          <div className="header__form__container_data">
            <div className="header__form__container_data__heading">
              Sign In to Report
            </div>
            <div className="header__form__container_data__emoji">
              <img src={sadIcon} alt="Sad Face Emoji" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
