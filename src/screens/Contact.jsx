import Wrapper from "../assets/Wrapper.png";
// import Logo from "../assets/Logo.png";
import LnIcon from "../assets/LinkInIcon.svg";
import TwIcon from "../assets/TwitterIcon.svg";
import FbIcon from "../assets/FbIcon.svg";
import Header from "../components/Header";
import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grdgsed",
        "template_ntuqzep",
        form.current,
        "user_cwe2BQkIjEFGj3KClhuvs"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: " #ffb579",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: error.text,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: " #ffb579",
          });
        }
      );
  };

  return (
    <div className="user__landing__container__main">
      <div className="user__landing__container__one">
        <div
          className="user__landing__container__one__img"
          id="contact__us__one__img">
          <img src={Wrapper} alt="Wrapper" />
        </div>
        <div className="user__landing__header__wrapper">
          <Header />
        </div>
        <div className="user__landing__container__one__wrapper">
          <div className="user__landing__container__one__wrapper__content">
            <div
              className="user__landing__container__one__preheading"
              id="contact__us__preheading">
              CONTACT US
            </div>
            <div className="user__landing__container__one__heading">
              Let's talk to us for any help
            </div>
          </div>
        </div>
      </div>
      <div
        className="user__landing__container__two"
        id="contact__us__container__two">
        <div className="contact__us__container__two__content">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__us__container__two__content__left">
            <div className="contact__us__container__two__content__left__heading">
              Get in Touch
            </div>
            <div className="header__form__container_data__left__entry">
              <input
                className="header__form__container_data__left__entry__input"
                type="text"
                placeholder="Name"
                required
                name="from_name"
              />
            </div>
            <div className="header__form__container_data__left__entry">
              <input
                className="header__form__container_data__left__entry__input"
                type="email"
                placeholder="Email"
                name="reply_to"
                required
              />
            </div>
            <div className="header__form__container_data__middle__textbox">
              <textarea
                className="header__form__container_data__middle__heading__textarea"
                cols="10"
                rows="10"
                name="message"
                placeholder="Subject"
                required
              />
            </div>
            <button className="header__form__container_data__right__button">
              Send
            </button>
          </form>
          <div className="contact__us__container__two__content__right">
            <div className="contact__us__container__two__content__left__heading">
              Contact Us
            </div>
            <div className="contact__us__container__two__content__left__contentBox">
              <div className="contact__us__container__two__content__left__contentBox__top">
                <div className="contact__us__container__two__content__left__contentBox__heading">
                  Let's talk
                </div>
                <a
                  href="mailto:abcdqwert1234@gmail.com"
                  className="contact__us__container__two__content__left__contentBox__email">
                  crime-reporting@outlook.com
                </a>
                <a
                  href="tel:+919012345678"
                  className="contact__us__container__two__content__left__contentBox__email">
                  0300-12345678
                </a>
              </div>
              <div className="contact__us__container__two__content__left__contentBox__top">
                <div className="contact__us__container__two__content__left__contentBox__heading">
                  Visit Us
                </div>
                <div className="contact__us__container__two__content__left__contentBox__email">
                  UNILAW
                </div>
                <div className="contact__us__container__two__content__left__contentBox__email">
                  Samundri,Dist Faisalabad.
                </div>
              </div>
              <div
                className="footer__container__content__links"
                id="contact__us__links">
                <a href="#" className="contact__us__container__content__link">
                  <img src={FbIcon} alt="" />
                </a>
                <a href="#" className="contact__us__container__content__link">
                  <img src={TwIcon} alt="" />
                </a>
                <a href="#" className="contact__us__container__content__link">
                  <img src={LnIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
