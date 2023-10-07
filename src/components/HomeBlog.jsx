import React from "react";
import { replacePngWithWebp } from "../utils/replacePngWithWebp";
import { useNavigate } from "react-router-dom";
import { fetcher } from "../utils/fetcher";
import { Fade } from "react-reveal";
import useSWR from "swr";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function HomeBlog() {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}/blog/get_all`,
    fetcher
  );
  const navigate = useNavigate();
  return (
    <div className="home__blog">
      <Fade bottom distance="30%">
        <div className="home__blog__heading heading">
          Want to get latest crime news? Check out our blog!
        </div>
      </Fade>
      <div className="home__blog__content">
        <Swiper
          navigation
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop
          modules={[Autoplay, Navigation, Pagination]}>
          {data?.map((item) => (
            <SwiperSlide key={item._id}>
              <button
                className="home__blog__content__entry"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 300);
                  navigate("/blog-details");
                  window.localStorage.setItem(
                    "blogsData",
                    JSON.stringify(item)
                  );
                }}
                title={item.title}>
                <img
                  loading="lazy"
                  src={
                    import.meta.env.VITE_CLOUDNAIRY_API_URL +
                    replacePngWithWebp(item.image)
                  }
                  alt={item.title}
                  className="home__blog__content__entry__img"
                />
                <div className="home__blog__content__entry__content">
                  <div className="home__blog__content__entry__content__heading">
                    {item.title}
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

<Swiper
  slidesPerView={4}
  navigation
  spaceBetween={20}
  autoplay={{
    delay: 2500,
    disableOnInteraction: true,
  }}
  loop
  modules={[Autoplay, Navigation, Pagination]}></Swiper>;
