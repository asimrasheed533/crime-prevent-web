import React, { useContext } from "react";
import Logo from "../assets/Logo.png";
import LogoBlack from "../assets/LogoBlack.png";
import { NavLink } from "react-router-dom";
import { HeaderContext } from "../Contexts/HeaderContext";
import UserProfile from "../assets/UserProfilePic.png";
import { UserContext } from "../Contexts/UserContext";
function Header() {
  const { showHeader, setShowHeader } = useContext(HeaderContext);
  const { user } = useContext(UserContext);
  const userImage = `https://res.cloudinary.com/arslan0143/image/upload/${user.image}`;

  // console.log(user);
  window.onscroll = function () {
    if (window.scrollY > 80) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };
  return (
    <div
      className={
        showHeader
          ? "header__comp__wrappper header__comp__wrappper__active"
          : "header__comp__wrappper"
      }>
      <div
        className={
          showHeader
            ? "user__landing__header__wrapper__logo header__logo "
            : "user__landing__header__wrapper__logo"
        }>
        <img src={showHeader ? LogoBlack : Logo} alt="Logo" />
      </div>
      <div className="user__landing__header__wrapper__links">
        <NavLink
          to="/"
          activeclassname="active"
          className={
            showHeader
              ? "user__landing__header__wrapper__link header__wrapper__link__active "
              : "user__landing__header__wrapper__link"
          }>
          Home
        </NavLink>
        <NavLink
          to={user.length == 0 ? "/fir_not_signed" : "/fir"}
          className={
            showHeader
              ? "user__landing__header__wrapper__link header__wrapper__link__active "
              : "user__landing__header__wrapper__link"
          }>
          Report
        </NavLink>
        <NavLink
          to={user.length == 0 ? "/history_not_signed" : "/history"}
          className={
            showHeader
              ? "user__landing__header__wrapper__link header__wrapper__link__active "
              : "user__landing__header__wrapper__link"
          }>
          History
        </NavLink>
        <NavLink
          to="/contact"
          className={
            showHeader
              ? "user__landing__header__wrapper__link header__wrapper__link__active "
              : "user__landing__header__wrapper__link"
          }>
          Contact
        </NavLink>
      </div>
      <div className="user__landing__header__wrapper__signin">
        {user.length !== 0 ? (
          <NavLink
            to="/profile"
            className="user__landing__header__wrapper__profile__link ">
            <img src={userImage || UserProfile} alt="User Profile" />
          </NavLink>
        ) : null}
        {user.length !== 0 ? (
          <NavLink
            to="/"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}
            className="user__landing__header__wrapper__signin__link ">
            Log out
          </NavLink>
        ) : (
          <NavLink
            to="/sign_in"
            className="user__landing__header__wrapper__signin__link ">
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
