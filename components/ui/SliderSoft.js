// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

//? framer
const variants = {
    hidden: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";

export default function SliderSoft() {
    return (
        <motion.div key="soft" variants={variants} initial="hidden" animate="animate" className="h-full w-full">
            <Swiper
                style={{
                    "--swiper-theme-color": "#FF870F",
                    "--swiper-navigation-size": "30px",
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                speed={1000}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <div slot="container-start" className="parallax-bg bg-soft opacity-70" data-swiper-parallax="-20%" />
                <SwiperSlide>
                    <div className="animate-[blurAnimate_1s_ease-in-out_infinite] overflow-hidden rounded-lg bg-white bg-opacity-80 py-2 pl-4">
                        <div className="text-2xl font-thin text-orange-500" data-swiper-parallax="-100">
                            My Favorite Ones🧡
                        </div>
                        <div className="mt-2 text-base text-zinc-500" data-swiper-parallax="-700">
                            <ul className="leading-9">
                                <li>Next.js</li>
                                <li>JavaScript ES6</li>
                                <li>TailwindCss</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="animate-[blurAnimate_1s_ease-in-out_infinite] overflow-hidden rounded-lg bg-white bg-opacity-80 py-2 pl-4">
                        <div className="text-2xl font-thin text-orange-500" data-swiper-parallax="-300">
                            Other Ones☕
                        </div>
                        <div className="mt-2 text-base text-zinc-500" data-swiper-parallax="-700">
                            <ul className="leading-9">
                                <li>React.js</li>
                                <li>Axios</li>
                                <li>Sass</li>
                                <li>Bootstrap/AntD/MaterialUI</li>
                                <li>Styled-Components</li>
                                <li>Swiper.js</li>
                                <li>React-Select</li>
                                <li>JavaScript</li>
                                <li>Git | GitHub | GitLab</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </motion.div>
    );
}
