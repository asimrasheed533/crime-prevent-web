import React from "react";
import Wrapper from "../assets/Wrapper.png";
import UserLandingimg from "../assets/UserLanding.jpg";
import Header from "../components/Header";
import { HomeStats } from "../components/HomeStats";
import { HomeNewsletter } from "../components/HomeNewsletter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import { HomeBlog } from "../components/HomeBlog";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <div className="user__landing__container__main">
      <div className="user__landing__container__one">
        <div className="user__landing__container__one__img">
          <img src={Wrapper} alt="Wrapper" />
        </div>
        <div className="user__landing__header__wrapper">
          <Header />
        </div>
        <div className="user__landing__container__one__wrapper">
          <div className="user__landing__container__one__wrapper__content">
            <div className="user__landing__container__one__preheading">
              CONSILE LAW FIRM
            </div>
            <div className="user__landing__container__one__heading">
              Unbelievable Solution for Reporting Crime
            </div>
            <div className="user__landing__container__one__para">
              Reporting crime online was never so easy. Just fill the form and
              we will take care of the rest.
            </div>
            <div className="user__landing__container__one__button">
              <a
                href="#"
                className="user__landing__container__one__button__link"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeStats />

      <div className="user__landing__container__two__content__main__card">
        <div className="user__landing__container__two__content__main__card__left">
          <img src={UserLandingimg} alt="User Landing Image" />
          {/* <div className="user__landing__container__two__content__main__card__left__overlay"></div> */}
        </div>

        <div className="user__landing__container__two__content__main__card__right">
          <div className="user__landing__container__two__content__main__card__right__preheading">
            About Us
          </div>
          <div className="user__landing__container__two__content__main__card__right__heading">
            We Want To Earn Your Trust
          </div>
          <div className="user__landing__container__two__content__main__card__right__para">
            Nowadays the crime rate is frequently increasing day by day in our
            society. Problem was that people got tired by going here and there
            for getting justice. From this we get an idea to develop the system.
            <div style={{ marginTop: "1em" }}>
              Our application is capable of registering FIR online, shows
              investigation update, deliver news about crime etc. So it is an
              application which provides solution to the problems faced during
              taking actions against crime.
            </div>
            <div style={{ marginTop: "1em" }}>
              Some of the features of our application are:
            </div>
          </div>
          <ul className="user__landing__container__two__content__main__card__right__list">
            <li> Users can Register and Login.</li>
            <li> Users can change passwords, upload profile Pic</li>
            <li> Allows users to enter a complaint online</li>
            <li> Crime related news slider</li>
          </ul>
        </div>
      </div>

      <HomeBlog />
      {/* <HomeNewsletter /> */}
    </div>
  );
}
