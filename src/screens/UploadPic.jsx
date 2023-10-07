import axios from "axios";
import React, { useState } from "react";
import BlueRectangle from "../assets/blueRectengle.png";
import Logo from "../assets/logo.png";
import LogoBlack from "../assets/LogoBlack.png";
import { Widget } from "react-cloudinary-upload-widget";
function UploadPicture() {
  const [image, setImage] = useState("");
  console.log(image);
  return (
    <div className="user__main__container">
      <div className="user__main__container__content">
        <div className="user__main__left">
          <div className="user__main__left__content">
            <div className="user__main__left__content__logo">
              <img src={LogoBlack} alt="Logo" />
            </div>
            <div className="user__main__left__content__form">
              <div className="user__main__left__content__form__title">
                Upload Picture
              </div>
              <div
                className="signin__main__left__content__form__input__container"
                style={{ justifyContent: "center", flexDirection: "row" }}>
                <Widget
                  sources={["local"]}
                  resourceType="image"
                  cloudName="arslan0143"
                  uploadPreset="user_pics"
                  buttonText={
                    image !== "" ? (
                      <img
                        src={
                          "https://res.cloudinary.com/arslan0143/image/upload/" +
                          image
                        }
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      "+"
                    )
                  }
                  style={{
                    color: "black",
                    width: "200px",
                    backgroundColor: "white",
                    border: "1px solid #ffb579",
                    borderRadius: "5px",
                    fontSize: 50,
                    height: "200px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onSuccess={(e) => {
                    setImage(e.info.path);
                    console.log(e);
                  }}
                  onFailure={(e) => {
                    console.log(e);
                  }}
                  folder="UserPics"
                  cropping={true}
                  multiple={false}
                  autoClose={false}
                  logging={true}
                  use_filename={true}
                  destroy={true}
                  apiKey={383667288311742}
                />
              </div>
            </div>
            <div className="user__main__left__content__button__container">
              <a href="#">Next</a>
            </div>
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

export default UploadPicture;
