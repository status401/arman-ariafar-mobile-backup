// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

//? components
import Sefid from "./Sefid";

//? component
export default function SliderPortfolio() {
    return (
        <Swiper
            speed={1000}
            style={{
                "--swiper-theme-color": "#FF870F",
            }}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
        >
            <SwiperSlide>
                <Sefid />
            </SwiperSlide>
            <SwiperSlide>
                <Sefid />
            </SwiperSlide>
            <SwiperSlide>
                <Sefid />
            </SwiperSlide>
        </Swiper>
    );
}
