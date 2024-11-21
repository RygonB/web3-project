import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperIndex = ({ articles }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={30}
      slidesPerView={1}
    >
      {articles.map((article) => (
        <SwiperSlide key={article.id}>
          <div className="slide-container">
            <a href={`/article/${article.id}`}>
            <img
              src={article.image}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperIndex;
