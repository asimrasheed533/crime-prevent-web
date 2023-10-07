import React, { useEffect, useState } from "react";
import BlueRectangle from "../assets/blueRectengle.png";
import Logo from "../assets/logo.png";
import LogoBlack from "../assets/LogoBlack.png";
import InputBox from "../components/InputBox/InputBox";
import Lock from "../assets/Lock.png";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ChangePassword() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Change Password", location.state.id);
  const [inputData, setinputData] = useState({
    password: "",
    cpassword: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const [error, setError] = useState({});
  let name, value;
  const handleChange = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;
    setinputData({ ...inputData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submited");
    setError(handleError(inputData));
    setIsSubmit(true);
  }
  const handleError = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length <= 3) {
      errors.password = "Password should be more than 4 characters";
    }

    if (!values.cpassword) {
      errors.cpassword = "Re Enter Password is required";
    } else if (values.cpassword !== values.password) {
      errors.cpassword = "Password does not match";
    }

    return errors;
  };
  function changePassword() {
    axios
      .put(`${import.meta.env.VITE_REACT_APP_API_URL}/user/update`, {
        _id: location.state.id,
        password: inputData.password,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: " #ffb579",
        });
      })
      .then(() => {
        setTimeout(() => {
          navigate("/sign_in");
        }, 3000);
      });
  }
  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(inputData);
      changePassword();
    }
  }, [error]);

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
                Change Password
              </div>

              <div className="signin__main__left__content__form__input__container">
                <InputBox
                  placeholder="Enter new Password"
                  type="password"
                  name="password"
                  icon={Lock}
                  value={inputData.password}
                  onChange={handleChange}
                  valueOnChange={inputData.password}
                  error={error.password}
                  required
                />
                <InputBox
                  placeholder="Re-Enter Password"
                  type="password"
                  name="cpassword"
                  icon={Lock}
                  value={inputData.cpassword}
                  onChange={handleChange}
                  valueOnChange={inputData.cpassword}
                  error={error.cpassword}
                  required
                />
              </div>
            </div>
            <div className="user__main__left__content__button__container">
              <button>Save</button>
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

export default ChangePassword;
