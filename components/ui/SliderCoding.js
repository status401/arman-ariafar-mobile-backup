// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function SliderCoding() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-theme-color": "#FF870F",
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "30px",
                }}
                speed={1000}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div slot="container-start" className="parallax-bg bg-coding opacity-70" data-swiper-parallax="-20%" />
                <SwiperSlide>
                    <div className="animate-[blurAnimate_1s_ease-in-out_infinite] overflow-hidden rounded-lg bg-white bg-opacity-60 py-2 pl-4">
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
                    <div className="animate-[blurAnimate_1s_ease-in-out_infinite] overflow-hidden rounded-lg bg-white bg-opacity-60 py-2 pl-4">
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
                <SwiperSlide>
                    <div className="animate-[blurAnimate_1s_ease-in-out_infinite] overflow-hidden rounded-lg bg-white bg-opacity-60 py-2 pl-4">
                        <div className="text-2xl font-thin text-orange-500" data-swiper-parallax="-300">
                            Coming Soon...🤓
                        </div>
                        <div className="mt-2 text-base text-zinc-500" data-swiper-parallax="-700">
                            <ul className="leading-9">
                                <li>React-Native</li>
                                <li>NodeJs</li>
                                <li>
                                    WordPress {"("}Maybe🤔{")"}
                                </li>
                                <li>and more more more...</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
