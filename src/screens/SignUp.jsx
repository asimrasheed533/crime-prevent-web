import React, { useEffect, useState } from "react";
import BlueRectangle from "../assets/blueRectengle.png";
import Logo from "../assets/logo.png";
import InputBox from "../components/InputBox/InputBox";
import User from "../assets/User.png";
import Lock from "../assets/Lock.png";
import SignUpRightImg from "../assets/Signup.png";
import Email from "../assets/Email.png";
import Gender from "../assets/Gender.png";
import Phone from "../assets/Phone.svg";
import Address from "../assets/Address.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Widget } from "react-cloudinary-upload-widget";
import LogoBlack from "../assets/LogoBlack.png";

function SignUp() {
  const navigate = useNavigate();
  const [inputData, setinputData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    address: "",
    gender: "",
    role: "",
    image: "",
  });
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [next, setNext] = useState(false);
  const [image, setImage] = useState("");
  console.log(image);
  const genderData = [
    { id: 0, value: "male" },
    { id: 1, value: "female" },
  ];
  const roleData = [
    { id: 0, value: "civilian" },
    { id: 1, value: "officer" },
  ];
  let name, value;
  const handleChange = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setinputData({ ...inputData, [name]: value });
  };
  const regiterUserData = () => {
    setIsLoading(true);
    const { name, email, phone, password, address, gender, role, image } =
      inputData;
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_URL}/user/register`, {
        name,
        email,
        phone,
        password,
        address,
        gender,
        role,
        image,
      })
      .then(function (response) {
        console.log(response);
        alert("User created Successfully");
        navigate("/");
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data);
        setIsLoading(false);
      });
  };
  const registerUser = (e) => {
    e.preventDefault();
    setError(handleError(inputData));
    setIsSubmit(true);
  };
  const handleError = (values) => {
    const errors = {};
    const nameRegex = "^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$";
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = "^((\\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$";
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!values.name.match(nameRegex)) {
      errors.name = "Name is invalid";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!values.email.match(regex)) {
      errors.email = "Invalid Email";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!values.phone.match(phoneRegex)) {
      errors.phone = "Invalid Phone Number";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.address) {
      errors.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      errors.cpassword = "Password does not match";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    if (!values.role) {
      errors.role = "Role is required";
    }

    return errors;
  };
  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      setNext(true);
      console.log(inputData);
    }
  }, [error]);

  return !next ? (
    <div className="signin__main__container">
      <div className="signin__main__container__content">
        <div className="signin__main__left">
          <div className="signup__main__left__img">
            <img src={BlueRectangle} alt="Blue Rectangle" />
          </div>
          <div className="signin__main__left__content">
            <div className="signin__main__left__content__logo__container">
              <div className="signin__main__left__content__logo">
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <form method="POST" className="signup__main__left__content__form">
              <div className="signin__main__left__content__form__title">
                Register
              </div>
              <div className="signup__main__left__content__form__input__container">
                <InputBox
                  placeholder="Name"
                  type="text"
                  icon={User}
                  onChange={handleChange}
                  valueOnChange={inputData.name}
                  error={error.name}
                />

                <InputBox
                  placeholder="Email"
                  type="email"
                  icon={Email}
                  onChange={handleChange}
                  valueOnChange={inputData.email}
                  error={error.email}
                />

                <InputBox
                  placeholder="Phone"
                  type="text"
                  icon={Phone}
                  onChange={handleChange}
                  valueOnChange={inputData.phone}
                  error={error.phone}
                />

                <InputBox
                  placeholder="Password"
                  type="password"
                  icon={Lock}
                  onChange={handleChange}
                  valueOnChange={inputData.password}
                  error={error.password}
                />

                <InputBox
                  placeholder="Confirm Password"
                  name="cpassword"
                  type="password"
                  icon={Lock}
                  onChange={handleChange}
                  valueOnChange={inputData.cpassword}
                  error={error.cpassword}
                />

                <div className="BAR__content__form__input__container">
                  <div className="BAR__content__form__input__icon">
                    <img src={Gender} alt="User Icon" />
                  </div>
                  <div className="BAR__content__form__input__box">
                    <input
                      list="genderList"
                      name="gender"
                      placeholder="Gender"
                      onChange={handleChange}
                    />
                    <datalist id="genderList">
                      {genderData.map((item) => {
                        return (
                          <option key={item.id} value={item.value}>
                            {item.value}
                          </option>
                        );
                      })}
                    </datalist>
                    <p className="error_styling">{error.gender}</p>
                  </div>
                </div>

                <div className="BAR__content__form__input__container">
                  <div className="BAR__content__form__input__icon">
                    <img src={Gender} alt="User Icon" />
                  </div>
                  <div className="BAR__content__form__input__box">
                    <input
                      list="roleList"
                      name="role"
                      placeholder="Role"
                      onChange={handleChange}
                    />
                    <datalist id="roleList">
                      {roleData.map((item) => {
                        return (
                          <option key={item.id} value={item.value}>
                            {item.value}
                          </option>
                        );
                      })}
                    </datalist>
                  </div>
                  <p className="error_styling">{error.role}</p>
                </div>

                <InputBox
                  placeholder="Address"
                  type="text"
                  icon={Address}
                  onChange={handleChange}
                  valueOnChange={inputData.address}
                  error={error.address}
                />
              </div>
              <div className="signin__main__left__content__form__button__container">
                <a to="/upload_pic" onClick={registerUser}>
                  Sign Up
                </a>
              </div>
              <div className="signin__main__left__content__form__signup">
                Already have an account ? <Link to="/sign_in">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="signin__main__right">
          <div className="signup__main__right__img">
            <img src={SignUpRightImg} alt="SignUp Right Image" />
          </div>
        </div>
      </div>
    </div>
  ) : (
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
                style={{ justifyContent: "center", flexDirection: "row" }}
              >
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
                    overflow: "hidden",
                    fontSize: 50,
                    height: "200px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  onSuccess={(e) => {
                    setImage(e.info.path);
                    console.log(e);
                    setinputData({ ...inputData, image: e.info.path });
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
              <a
                href="#"
                onClick={regiterUserData}
                className={isLoading ? "disabled-link" : ""}
              >
                Save
              </a>
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

export default SignUp;
