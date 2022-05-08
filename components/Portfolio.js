//? required
import { motion } from "framer-motion";

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

//? slider
import SliderPortfolio from "./ui/SliderPortfolio";

//? component
export default function MyPortfolio() {
    return (
        <motion.section
            variants={variants}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full border-t-4 border-orange-500 border-opacity-50 bg-zinc-100 py-4"
            id="portfolioSection"
        >
            <div className="m-auto flex w-full max-w-sm flex-col items-center justify-start">
                <h1 className="text-6xl font-thin text-orange-500 text-opacity-10">نمونه کارها</h1>
                <div className="portfolioSlider -mt-5 w-full">
                    <SliderPortfolio />
                </div>
            </div>
        </motion.section>
    );
}
