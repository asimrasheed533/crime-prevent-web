import React, { useState } from "react";
import Wrapper from "../assets/Wrapper.png";
import Header from "../components/Header";
import HistoryCard from "../components/HistoryCard";
// import UserLandingimg from "../assets/UserLanding.png";
// import { HeaderContext } from "../Contexts/HeaderContext";

export default function HistoryNSI() {
  // const { showHeader, setShowHeader } = useContext(HeaderContext);

  const [showTabs, SetShowTabs] = useState(1);
  function toggeleTab(i) {
    SetShowTabs(i);
  }
  return (
    <div className="user__landing__container__main">
      <div className="user__landing__container__one">
        <div
          className="user__landing__container__one__img"
          id="history__container__one__img">
          <img src={Wrapper} alt="Wrapper" />
        </div>
        <div className="user__landing__header__wrapper">
          <Header />
        </div>
        <div
          className="user__landing__container__one__wrapper"
          id="history__container__one__wrapper">
          <div className="history__container__one__heading">
            <div className="header__content__text">History</div>
          </div>
          <div className="history__contaier__one__tabs__container">
            <div
              onClick={() => toggeleTab(1)}
              className={
                showTabs == 1
                  ? "history__contaier__one__tabs__container__tabs history__contaier__one__tabs__container__tabs__active"
                  : "history__contaier__one__tabs__container__tabs"
              }>
              All Reports
            </div>
            <div
              onClick={() => toggeleTab(2)}
              className={
                showTabs == 2
                  ? "history__contaier__one__tabs__container__tabs history__contaier__one__tabs__container__tabs__active"
                  : "history__contaier__one__tabs__container__tabs"
              }>
              Solved
            </div>
            <div
              onClick={() => toggeleTab(3)}
              className={
                showTabs == 3
                  ? "history__contaier__one__tabs__container__tabs history__contaier__one__tabs__container__tabs__active"
                  : "history__contaier__one__tabs__container__tabs"
              }>
              Pending
            </div>
          </div>
        </div>
      </div>
      <div
        className="user__landing__container__two"
        id="history__contianer__two">
        <div className="user__landing__container__two__content">
          <div className="history__contaier__one__tabs__content__container">
            <div
              className={
                showTabs == 1
                  ? "history__contaier__one__tabs__content__container__content__active history__contaier__one__tabs__content__container__content"
                  : "history__contaier__one__tabs__content__container__content"
              }>
              <div className="history__contaier__one__tabs__content__container__content__cards history__nsi">
                No Data
              </div>
            </div>
            <div
              className={
                showTabs == 2
                  ? "history__contaier__one__tabs__content__container__content__active history__contaier__one__tabs__content__container__content"
                  : "history__contaier__one__tabs__content__container__content"
              }>
              <div className="history__contaier__one__tabs__content__container__content__cards history__nsi">
                No Data
              </div>
            </div>
            <div
              className={
                showTabs == 3
                  ? "history__contaier__one__tabs__content__container__content__active history__contaier__one__tabs__content__container__content"
                  : "history__contaier__one__tabs__content__container__content"
              }>
              <div className="history__contaier__one__tabs__content__container__content__cards history__nsi">
                No Data
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
