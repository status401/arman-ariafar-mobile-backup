//? required
import Image from "next/image";

//? icons
import { BiWorld } from "react-icons/bi";

//? component
export default function Sefid() {
    return (
        <>
            <article
                className="
                flex w-full flex-col items-start justify-center gap-y-4 overflow-hidden
                rounded-3xl border-[1px] border-orange-500 bg-white pb-4 shadow-xl"
            >
                <div className="w-full">
                    <Image alt="Sefid" src="/images/Sefid.jpg" layout="responsive" width={500} height={500} />
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-y-4 px-4">
                    <h1 className="self-center text-xl font-thin text-orange-500">
                        سفید <span className="text-base font-bold">(فروش آنلاین قهوه سرو شده)</span>
                    </h1>
                    <h2 className="mt-2 text-base font-extrabold text-zinc-500">تکنولوژی‌های استفاده شده:</h2>
                    <ol className="mr-4 list-disc text-right text-base font-normal leading-9 text-zinc-400">
                        <li>React.js</li>
                        <li>Styled-Components</li>
                        <li>Axios</li>
                        <li>Framer-Motion</li>
                        <li>React-Router-Dom</li>
                    </ol>
                    <a
                        href="https://google.com"
                        className="flex items-center justify-center gap-x-1 self-center text-xs font-extrabold text-orange-500"
                    >
                        <BiWorld className="text-base" />
                        مشاهده آنلاین پروژه
                    </a>
                </div>
            </article>
        </>
    );
}
