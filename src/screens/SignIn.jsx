import React, { useState, useContext } from "react";
import BlueRectangle from "../assets/blueRectengle.png";
import Logo from "../assets/logo.png";
import InputBox from "../components/InputBox/InputBox";
import CheckBox from "../components/CheckBox/CheckBox";
import Email from "../assets/Email.png";
import Lock from "../assets/Lock.png";
import SignInRightImg from "../assets/Signin.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";
import Swal from "sweetalert2";

function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isChecked, setIschecked] = useState(false);
  const [inputData, setinputData] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setinputData({ ...inputData, [name]: value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    const { email, password } = inputData;
    if (email === "") {
      alert("Please enter Email");
    } else if (password === "") {
      alert("Please enter Password");
    } else {
      axios
        .post(`${import.meta.env.VITE_REACT_APP_API_URL}/user/login`, {
          email,
          password,
        })
        .then(function (response) {
          console.log(response.data);
          Swal.fire({
            title: "Success!",
            text: "Logged In Successfully",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: " #ffb579",
          });
          setUser(response.data);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch(function (error) {
          console.log(error.response.data);
          Swal.fire({
            title: "Error!",
            text: error.response.data,
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: " #ffb579",
          });
        });
    }
  };

  return (
    <div className="signin__main__container">
      <div className="signin__main__container__content">
        <div className="signin__main__left">
          <div className="signin__main__left__img">
            <img src={BlueRectangle} alt="Blue Rectangle" />
          </div>
          <div className="signin__main__left__content">
            <div className="signin__main__left__content__logo__container">
              <div className="signin__main__left__content__logo">
                <img src={Logo} alt="Logo" />
              </div>
            </div>
            <form
              onSubmit={loginUser}
              className="signin__main__left__content__form"
            >
              <div className="signin__main__left__content__form__title">
                Sign In
              </div>
              <div className="signin__main__left__content__form__input__container">
                <InputBox
                  placeholder="Email"
                  type="email"
                  icon={Email}
                  onChange={handleChange}
                  valueOnChange={inputData.email}
                />
                <InputBox
                  placeholder="Password"
                  type="password"
                  icon={Lock}
                  onChange={handleChange}
                  valueOnChange={inputData.password}
                />
                <div className="signin__main__left__content__form__checkbox__container">
                  <div className="signin__main__left__content__form__checkbox">
                    <CheckBox
                      value={isChecked}
                      label="Remember Me"
                      labelColor="#ffffff"
                      checkedColor=" #ffb579"
                      unCheckedColor="transparent"
                      iconColor="#ffffff"
                      onChange={() => {
                        isChecked ? setIschecked(false) : setIschecked(true);
                      }}
                    />
                  </div>
                  <div className="signin__main__left__content__form__checkbox__forget">
                    <Link to="/forgot_pass">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <div className="signin__main__left__content__form__button__container">
                <button>Sign In</button>
              </div>
              <div className="signin__main__left__content__form__signup">
                Don't Have An Account ? <Link to="/sign_up">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="signin__main__right">
          <div className="signin__main__right__img">
            <img src={SignInRightImg} alt="SignIn Right Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
