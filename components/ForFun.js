//? required
import { motion } from "framer-motion";

//? framer
const variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    onScreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

//? component
export default function ForFun() {
    return (
        <motion.section
            variants={variants}
            initial="hidden"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.9 }}
            className="px-4400 my-8 grid w-fit grid-rows-3 items-center justify-items-center gap-y-4"
        >
            <div className="funShadowBox flex items-center justify-start gap-x-4 rounded-lg bg-white px-8 py-3 shadow-xl">
                <img src="/images/Coffee.png" alt="Coffee" title="Coffee" className="mr-3 h-16 translate-x-2" />
                <div className="gird grid-rows-2 items-center justify-items-center">
                    <h6 className="text-2xl font-thin text-orange-500">۱۰۲۴</h6>
                    <p className="text-sm font-bold text-zinc-400">تعداد قهوه‌های نوشیده شده</p>
                </div>
            </div>
            <div className="funShadowBox flex w-full items-center justify-start gap-x-4 rounded-lg bg-white px-8 py-3 shadow-xl">
                <img src="/images/Bug.png" alt="Coffee" title="Coffee" className="w-16" />
                <div className="gird grid-rows-2 items-center justify-items-center">
                    <h6 className="text-2xl font-thin text-orange-500">۱۲۸</h6>
                    <p className="text-sm font-bold text-zinc-400">تعداد باگهای رفع شده</p>
                </div>
            </div>
            <div className="funShadowBox flex w-full items-center justify-start gap-x-4 rounded-lg bg-white px-8 py-3 shadow-xl">
                <img src="/images/Smile.png" alt="Coffee" title="Coffee" className="w-16" />
                <div className="gird grid-rows-2 items-center justify-items-center">
                    <h6 className="text-2xl font-thin text-orange-500">۶۴</h6>
                    <p className="text-sm font-bold text-zinc-400">تعداد لبخندهای روزانه</p>
                </div>
            </div>
        </motion.section>
    );
}
