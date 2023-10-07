import React from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import { parseDate } from "../utils/parseDate";
import DOMPurify from "dompurify";
import Header from "../components/Header";

export default function BlogDetails() {
  const data = JSON.parse(window.localStorage.getItem("blogsData"));
  return (
    <>
      <div
        style={{ width: "100%", height: "8em", backgroundColor: "#242424" }}
      />
      <div className="user__landing__header__wrapper">
        <Header />
      </div>

      <div className="blog__details__banner">
        <img
          loading="lazy"
          src={
            import.meta.env.VITE_CLOUDNAIRY_API_URL +
            replacePngWithWebp(data.image)
          }
          alt={data.title}
          className="blog__details__banner__img"
        />
        <div className="blog__details__banner__overlay">
          <div className="blog__details__banner__overlay__heading heading">
            {data.title}
          </div>
          <div className="blog__details__banner__overlay__info">
            By {data.author} -{parseDate(data.createdAt)}
          </div>
        </div>
      </div>
      <div
        className="blog__details__content"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.content),
        }}
      />
    </>
  );
}
