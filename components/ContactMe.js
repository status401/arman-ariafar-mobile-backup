//? required
import { motion } from "framer-motion";

//? framer
const variants = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    onScreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

//? icons
import { IoMdMail } from "react-icons/io";
import { FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

//? component
export default function ContactMe() {
    return (
        <motion.section
            variants={variants}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex w-full max-w-sm flex-col items-center justify-center px-4 pt-4"
            id="contactMeSection"
        >
            <h1 className="text-6xl font-thin text-orange-500 opacity-10">تماس با من</h1>
            <div className="boxShadowHeader z-50 -mt-4 flex aspect-square w-full items-center justify-center rounded-lg bg-white">
                عکس من
            </div>
            <div className="mt-8 flex w-full max-w-sm flex-col justify-center">
                <div className="self-center">
                    <p className="text-base font-black text-zinc-500">ارتباط با</p>
                    <h1 className="mt-4 text-6xl font-thin text-orange-500">آرمان آریافر</h1>
                    <p className="mt-4 text-[13px] font-extrabold text-zinc-500 opacity-40">
                        من کسیم که شب بیدار میمونه تا صبح پروژه رو تحویل بده:{")"}
                    </p>
                </div>
                <div className="mt-10 flex w-full flex-col items-start justify-center self-start leading-8">
                    <a href="#" className="flex items-center justify-center gap-x-1 font-bold text-zinc-400">
                        <IoMdMail className="text-2xl text-orange-500" />
                        Status4x1@Gmail.com
                    </a>
                    <a href="#" dir="ltr" className="flex items-center justify-center gap-x-1 font-bold text-zinc-400">
                        ۰۹۳۰ ۱۲۲۰ ۵۱۰
                        <FaWhatsappSquare className="text-2xl text-orange-500" />
                    </a>
                    <div className="flex w-full items-center gap-x-2">
                        <a href="#" className="flex items-center justify-center gap-x-1 font-bold text-zinc-400">
                            <FaInstagramSquare className="text-2xl text-orange-500" />
                            Rubahe.ig
                        </a>
                        <div className="w-full border-b-2 border-dashed border-zinc-300" />
                    </div>
                </div>
            </div>
            <div className="boxShadowHeader mt-4 mb-10 flex aspect-square w-full items-center justify-center rounded-lg bg-white text-black">
                Instagram
            </div>
        </motion.section>
    );
}
