import React from "react";
// import User from "./assets/User.png";
import "./InputBox.scss";

function InputBox({
  icon,
  placeholder,
  type,
  pattern,
  list,
  genderData,
  onChange,
  valueOnChange,
  name,
  error,
}) {
  if (type === "tel") {
    return (
      <div className="BAR__content__form__input__container">
        <div className="BAR__content__form__input__icon">
          <img src={icon} alt="User Icon" />
        </div>
        <div className="BAR__content__form__input__box">
          <input
            type={type}
            name={placeholder}
            placeholder={placeholder}
            pattern={pattern}
          />
        </div>
      </div>
    );
  }
  if (list) {
    return (
      <>
        <div className="BAR__content__form__input__container">
          <div className="BAR__content__form__input__icon">
            <img src={icon} alt="User Icon" />
          </div>
          <div className="BAR__content__form__input__box">
            <input
              list={list}
              name={!name ? placeholder.toLowerCase() : name}
              placeholder={placeholder}
              onChange={onchange}
            />
            <datalist id={list}>
              {genderData.map((item) => {
                // console.log(item);
                return (
                  <option key={item.id} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </datalist>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="BAR__content__form__input__container">
      <div className="BAR__content__form__input__icon">
        <img src={icon} alt="User Icon" />
      </div>
      <div className="BAR__content__form__input__box">
        <input
          type={type}
          name={!name ? placeholder.toLowerCase() : name}
          placeholder={placeholder}
          onChange={onChange}
          value={valueOnChange}
          required
        />
      </div>
      <p>{error}</p>
    </div>
  );
}
InputBox.defaultProps = {
  type: "text",
  icon: "User",
};
export default InputBox;
