import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Fade } from "react-reveal";
import axios from "axios";

export function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.length === 0) {
      setError("Please enter valid email address");
      setSuccess(false);
    } else {
      setError("");
      axios
        .post(
          "crime-reporting-backend-production.up.railway.app/api/v1/newsletter/create",
          {
            email: email,
          }
        )
        .then((res) => {
          setSuccess(true);
          console.log(res.data);
          setEmail("");
        });
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [success]);

  return (
    <div className="home__newsletter">
      <div className="home__newsletter__content">
        <div className="home__newsletter__content__left">
          <Fade bottom distance="30%">
            <div className="home__newsletter__content__left__heading heading">
              Newsletter
            </div>
          </Fade>
          <Fade bottom distance="30%">
            <div className="home__newsletter__content__left__info">
              Subscribe to our newsletter to get the latest updates
            </div>
          </Fade>
        </div>
        <form
          className="home__newsletter__content__right"
          onSubmit={handleSubmit}
        >
          <Fade bottom distance="30%">
            <div className="home__newsletter__content__right__input">
              <input
                type="email"
                placeholder="Please Enter Your Email"
                value={email}
                title="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="home__newsletter__content__right__input__field"
              />
              {error !== "" ? (
                <div className="home__newsletter__content__right__input__error">
                  {error}
                </div>
              ) : null}
              {success ? (
                <div className="home__newsletter__content__right__input__success">
                  Successfully Subscribed
                </div>
              ) : null}
            </div>
          </Fade>
          <Fade bottom distance="30%">
            <button
              title="Subscribe"
              className="home__newsletter__content__right__button"
            >
              Subscribe
            </button>
          </Fade>
        </form>
      </div>
    </div>
  );
}
