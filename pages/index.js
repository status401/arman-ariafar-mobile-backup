//? required
import Head from "next/head";

//? components
import Header from "../components/Header";
import MySkills from "../components/MySkills";
import ForFun from "../components/ForFun";
import MyPortfolio from "../components/Portfolio";

//? component
export default function HomePage() {
    return (
        <>
            <Head>
                <title>آرمان آریافر | طراح و توسعه دهنده فرانت اند</title>
                <meta name="description" content="طراح فرانت اند | توسعه دهنده فرانت اند | برنامه نویس فرانت اند" />
            </Head>
            <Header />
            <main className="flex h-fit w-full flex-col items-center justify-center">
                <MySkills />
                <ForFun />
                <MyPortfolio />
            </main>
            <div className="pt-96"></div>
        </>
    );
}
