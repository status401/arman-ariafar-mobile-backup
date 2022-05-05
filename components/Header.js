//? ui
import Binary from "../components/ui/Binary";
import Instagram from "../components/ui/Instagram";

//? icons
import { HiOutlineTerminal } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";

//? component
export default function Header() {
    return (
        <header className="h-fit min-h-screen w-full border-b-4 border-orange-500 border-opacity-50 px-4 pt-20">
            <div className="relative m-auto flex h-full w-full max-w-sm flex-col items-center">
                <div className="relative aspect-square w-full">
                    <Binary />
                    <div
                        className="
                        boxShadowHeader absolute right-1/2 z-20 aspect-square w-[90%] 
                        translate-x-1/2 rounded-3xl rounded-tr-[12rem] bg-white"
                    ></div>
                    <div className="instagramShadow absolute bottom-3 left-0 z-30 rounded-2xl bg-white p-1.5">
                        <a href="https://instagram.com/rubahe.ig">
                            <Instagram />
                        </a>
                    </div>
                </div>
                <div className="mt-8 grid grid-rows-2 items-center justify-items-center">
                    <h1 className="text-4xl font-thin text-orange-500">
                        <span className="text-zinc-500">من</span> آرمان آریافرم
                    </h1>
                    <p className="text-[.9rem] font-light text-zinc-500">
                        طراح و توسعه دهنده Front-End <span className="text-orange-500">ساکن در تهران</span>
                    </p>
                    <div className="mt-4 w-2/3 justify-self-start border-b-[1.5px] border-dashed border-zinc-300" />
                </div>
                <button className="mt-4 flex w-2/3 items-center justify-center gap-x-1 py-3 text-sm font-black text-orange-500">
                    مشاهده نمونه کارها
                </button>
                <button
                    className="
                    boxShadowHeaderBtn mt-3 mb-4 flex w-2/3 items-center 
                    justify-center gap-x-1 rounded-lg py-3 text-sm font-black text-white"
                >
                    <HiOutlineTerminal className="text-2xl" />
                    مشاهده مهارت‌ها
                </button>
            </div>
            <p className="hiddenIt absolute bottom-10 right-1/2 translate-x-1/2 text-zinc-400">شناخت بهتر</p>
            <BsArrowDown className="hiddenIt absolute bottom-5 right-1/2 mt-2 translate-x-1/2 text-xl text-zinc-400" />
        </header>
    );
}