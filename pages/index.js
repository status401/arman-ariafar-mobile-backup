//? required
import Head from "next/head";
import { useEffect, useState } from "react";

//? components mobile
import Header from "../components/Header";
import MySkills from "../components/MySkills";
import ForFun from "../components/ForFun";
import MyPortfolio from "../components/Portfolio";
import ContactMe from "../components/ContactMe";

//? components desktop
import PortfolioDesktop from "../components/PortfolioDesktop";

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
                <ContactMe />
            </main>
        </>
    );
}
