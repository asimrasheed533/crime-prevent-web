import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import Wrapper from "../assets/Wrapper.png";
import Header from "../components/Header";
import { UserContext } from "../Contexts/UserContext";
import Swal from "sweetalert2";

export default function Fir() {
  const { user } = useContext(UserContext);
  const [inputData, setinputData] = useState({
    cnic: "",
    nearPoliceStation: "",
    location: "",
    description: "",
    crimeType: "",
  });
  const [crimeType, setCrimeType] = useState([]);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const crimeTypes = [
    { value: "Abduction", label: "Abduction" },
    { value: "Assault", label: "Assault" },
    { value: "Burglary", label: "Burglary" },
    { value: "Roberry", label: "Roberry" },
    { value: "Kidnapping", label: "Kidnapping" },
  ];
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setinputData({ ...inputData, [name]: value });
  };
  const registerReport = (e) => {
    e.preventDefault();
    setError(handleError(inputData));
    setIsSubmit(true);
  };

  const handleError = (values) => {
    const errors = {};
    const nameRegex = "^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$";
    const location = "^[a-zA-Z ]*$";
    if (!values.cnic) {
      errors.cnic = "Cnic is required";
    } else if (values.cnic.length !== 13) {
      errors.cnic = "Cnic is not valid";
    }
    if (!values.nearPoliceStation) {
      errors.nearPoliceStation = "Police Station is required";
    } else if (!values.nearPoliceStation.match(nameRegex)) {
      errors.nearPoliceStation = "Please enter valid text";
    }
    if (!values.location) {
      errors.location = "Location is required";
    } else if (!values.location.match(location)) {
      errors.location = "Please enter valid text";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    //  else if (!values.description.match(nameRegex)) {
    //   errors.description = "Please enter valid text";
    // }
    if (!crimeType) {
      errors.crimeType = "Crime Type is required";
    }

    return errors;
  };
  console.log(user);
  const registerUserReport = () => {
    setIsLoading(true);
    const { cnic, nearPoliceStation, location, description } = inputData;

    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_URL}/report/create`, {
        user: user._id,
        cnic,
        nearPoliceStation,
        location,
        description,
        crimeType,
      })
      .then(function (response) {
        console.log(response);
        Swal.fire({
          title: "Success!",
          text: "Report has been submitted",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: " #ffb579",
        });
        // navigate("/");
        setIsLoading(false);
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
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);

    console.log(error);

    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(inputData);
      registerUserReport();
    }
  }, [error]);
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
          <form
            onSubmit={registerReport}
            className="header__form__container_data"
          >
            <div className="header__form__container_coloumns">
              <div className="header__form__container_data__left">
                <div className="header__form__container_data__left__entry">
                  <div className="header__form__container_data__left__entry__heading">
                    CNIC
                    <span>{error.cnic}</span>
                  </div>
                  <input
                    className="header__form__container_data__left__entry__input"
                    type="number"
                    name="cnic"
                    onChange={handleChange}
                    value={inputData.cnic}
                  />
                </div>
                <div className="header__form__container_data__left__entry">
                  <div className="header__form__container_data__left__entry__heading">
                    LOCATION OF INCIDENT
                    <span>{error.location}</span>
                  </div>

                  <input
                    className="header__form__container_data__left__entry__input"
                    type="text"
                    name="location"
                    onChange={handleChange}
                    value={inputData.location}
                  />
                </div>
              </div>
              <div className="header__form__container_data__right">
                <div className="header__form__container_data__left__entry">
                  <div className="header__form__container_data__left__entry__heading">
                    NEAR POLICE STATION
                    <span>{error.nearPoliceStation}</span>
                  </div>

                  <input
                    className="header__form__container_data__left__entry__input"
                    type="text"
                    name="nearPoliceStation"
                    onChange={handleChange}
                    value={inputData.nearPoliceStation}
                  />
                </div>
                <div className="header__form__container_data__left__entry">
                  <div className="header__form__container_data__left__entry__heading">
                    CRIME TYPE
                    <span>{error.crimeType}</span>
                  </div>
                  <Select
                    className="header__form__container_data__left__entry__input"
                    options={crimeTypes}
                    placeholder="Crime Type"
                    required
                    value={crimeType}
                    onChange={(e) => {
                      setCrimeType(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="header__form__container_data__middle">
              <div className="header__form__container_data__middle__textbox">
                <div className="header__form__container_data__middle__heading">
                  Description
                  <span>{error.description}</span>
                </div>
                <textarea
                  className="header__form__container_data__middle__heading__textarea"
                  name="description"
                  cols="10"
                  rows="10"
                  onChange={handleChange}
                  value={inputData.description}
                ></textarea>
              </div>
              <div className="form__submit__button">
                <button className="form__submit__button__entry">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
