import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css"; // Import Animate.css

const MovieSlider = () => {
  const [moviedata, setmoviedata] = useState([]);

  useEffect(() => {
    fetch("/Data/banner.json") 
      .then((res) => res.json())
      .then((data) => {
        setmoviedata(data);
      });
  }, []);

  return (
    <div className="movie-slider animate__animated animate__fadeIn">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay:2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {moviedata.map((movie, index) => (
          <SwiperSlide key={index} className="animate__animated animate__fadeIn">
            <div className="movie-card py-10 z-10">
              <img 
                // src={movie.posterImage}
                src={`${movie.posterImage}`}

                alt={movie.posterName}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{movie.posterName} </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;