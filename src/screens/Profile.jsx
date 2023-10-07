import React, { useContext } from "react";
import BlueRectangle from "../assets/blueRectengle.png";
import Logo from "../assets/logo.png";

import ProfilePic from "../assets/Profile.png";
import { UserContext } from "../Contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  const userImage = `https://res.cloudinary.com/arslan0143/image/upload/${user.image}`;

  return (
    <div className="user__main__container">
      <div className="user__main__container__content">
        <div className="user__main__left">
          <div
            className="user__main__left__content"
            id="profile__main__left__content">
            <div
              className="user__main__left__content__form__title"
              id="profile__main__left__content__form__title">
              Profile
            </div>
            <div className="userProfile__main__left__content__form">
              <div
                className="user__main__left__content__logo"
                id="user__main__left__content__logo">
                <img src={userImage || ProfilePic} alt="Logo" />
              </div>
              <div className="userProfile__main__left__content__form__input__container">
                <div className="profile__left__container">
                  <div className="profile__left__container__para">
                    {"Name: " + user.name || "Name"}
                  </div>
                  <div className="profile__left__container__para">
                    {"Gender: " + user.gender || "Gender"}
                  </div>
                  <div className="profile__left__container__para">
                    {"Address: " + user.address || "Address"}
                  </div>
                </div>
                <div className="profile__right__container">
                  <div className="profile__left__container__para">
                    {"Email: " + user.email || "Email"}
                  </div>
                  <div className="profile__left__container__para">
                    {"Role: " + user.role || "Role"}
                  </div>
                  <div className="profile__left__container__para">
                    {" "}
                    {"Phone: " + user.phone || "Phone"}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="user__main__left__content__button__container">
              <a href="#">Next</a>
            </div> */}
            {/* <div className="user__main__left__content__resend__button__container">
              <a href="#">Resend OTP</a>
            </div> */}
          </div>
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

export default Profile;
