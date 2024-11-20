import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const SwiperIndex = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-container">
            <img
              src={slide.image}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperIndex;
