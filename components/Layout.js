//? required
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

//? ui
import NavIcon from "./ui/NavIcon";
import { IoMdClose } from "react-icons/io";

//? components
import Navigation from "./ui/Navigation";

//? component
export default function Layout({ children }) {
    const [isShown, setIsShown] = useState(false);
    return (
        <>
            <nav className="fixed top-0 z-[100] w-full bg-white shadow-lg">
                <div className="m-auto flex w-full max-w-sm items-center justify-between px-4 py-4">
                    <button onClick={() => setIsShown((e) => !e)} className="z-[120]">
                        {isShown ? <IoMdClose className="text-3xl text-orange-500" /> : <NavIcon />}
                    </button>
                    <AnimatePresence>{isShown && <Navigation setIsShown={setIsShown} />}</AnimatePresence>
                    <h6 dir="ltr" className="translate-y-[2px] text-2xl font-thin text-orange-500">
                        <a href="#homeSection">
                            A<span className="text-xl">A</span>.
                        </a>
                    </h6>
                </div>
            </nav>
            {children}
            <footer className="flex w-full flex-col items-center justify-center bg-zinc-200 py-4 text-xs font-bold leading-5 text-zinc-400">
                <p>تمامی حقوق این سایت توسط هیچکی محفوظ نیست،</p>
                <p>با خیال راحـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــت کپی کن</p>
            </footer>
        </>
    );
}
