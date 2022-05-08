//? required
import { motion } from "framer-motion";

const variants = {
    hidden: {
        y: "-10%",
        opacity: 0,
        scaleY: 0.95,
    },
    shown: {
        y: 0,
        opacity: 1,
        scaleY: 1,
        transition: {
            duration: 0.6,
        },
    },
    exit: {
        y: "-10%",
        opacity: 0,
        scaleY: 0.95,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

//? component
export default function Navigation({ setIsShown }) {
    return (
        <>
            <div
                className="fixed top-0 right-0 z-50 h-screen w-screen"
                onTouchMove={() => setIsShown(false)}
                onClick={() => setIsShown(false)}
            />
            <motion.div
                className="fixed top-0 right-0 z-[110] flex h-1/2 w-full flex-col items-center justify-center bg-white shadow-2xl"
                variants={variants}
                initial="hidden"
                animate="shown"
                exit="exit"
                key="box"
            >
                <ul className="flex h-full w-fit flex-col items-start justify-center font-extrabold leading-10 text-zinc-400">
                    <li>
                        <a href="#homeSection" onClick={() => setIsShown(false)}>
                            خانه
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={() => setIsShown(false)}>
                            مهارت‌ها
                        </a>
                    </li>
                    <li>
                        <a href="#portfolioSection" onClick={() => setIsShown(false)}>
                            نمونه کارها
                        </a>
                    </li>
                    <li>
                        <a href="#contactMeSection" onClick={() => setIsShown(false)}>
                            ارتباط با من
                        </a>
                    </li>
                </ul>
            </motion.div>
        </>
    );
}
