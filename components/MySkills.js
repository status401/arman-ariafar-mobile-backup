//? required
import { useState } from "react";
import { motion } from "framer-motion";

//? components
import SliderCoding from "./ui/SliderCoding";
import SliderDesigning from "./ui/SliderDesign";
import SliderSoft from "./ui/SliderSoft";

//? framer
const variants = {
    hidden: {
        opacity: 0,
    },
    onScreen: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

//? component
export default function MySkills() {
    const [active, setActive] = useState(2);
    const activeHandler = (id) => {
        setActive(id);
    };
    return (
        <motion.section
            variants={variants}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.9 }}
            id="skills"
            className="m-auto flex w-full max-w-lg flex-col border-b-4 border-orange-500 border-opacity-50"
        >
            <div className="h-24 w-full border-b-[3px] border-orange-500 border-opacity-50">
                <div className="relative m-auto h-full w-full max-w-sm py-4">
                    <h1 className="absolute right-1/2 translate-x-1/2 text-6xl font-thin text-orange-500 text-opacity-10">
                        مهارت‌ها
                    </h1>
                    <div
                        className="
                            absolute bottom-1/2 grid w-full translate-y-1/2 grid-cols-3 
                            items-center justify-items-center  text-zinc-400"
                    >
                        <button
                            onClick={() => activeHandler(1)}
                            className={active === 1 ? "font-thin text-orange-500" : "font-bold "}
                        >
                            طراحی
                        </button>
                        <button
                            onClick={() => activeHandler(2)}
                            className={active === 2 ? "font-thin text-orange-500" : "font-bold "}
                        >
                            برنامه‌نویسی
                        </button>
                        <button
                            onClick={() => activeHandler(3)}
                            className={active === 3 ? "font-thin text-orange-500" : "font-bold "}
                        >
                            محیط کاری
                        </button>
                    </div>
                </div>
            </div>
            {active === 1 && <SliderDesigning />}
            {active === 2 && <SliderCoding />}
            {active === 3 && <SliderSoft />}
        </motion.section>
    );
}
