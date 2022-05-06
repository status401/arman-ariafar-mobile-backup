//? component
export default function ForFun() {
    return (
        <>
            <section className="px-4400 my-8 grid w-fit grid-rows-3 items-center justify-items-center gap-y-4">
                <div className="funShadowBox flex items-center justify-start gap-x-4 rounded-lg bg-white px-8 py-3 shadow-2xl">
                    <img src="/images/Coffee.png" alt="Coffee" title="Coffee" className="mr-3 h-16 translate-x-2" />
                    <div className="gird grid-rows-2 items-center justify-items-center">
                        <h6 className="text-2xl font-thin text-orange-500">۱۰۲۴</h6>
                        <p className="text-sm font-bold text-zinc-400">تعداد قهوه‌های نوشیده شده</p>
                    </div>
                </div>
                <div className="funShadowBox flex w-full items-center justify-start gap-x-4 rounded-lg bg-white px-8 py-3 shadow-2xl">
                    <img src="/images/Bug.png" alt="Coffee" title="Coffee" className="w-16" />
                    <div className="gird grid-rows-2 items-center justify-items-center">
                        <h6 className="text-2xl font-thin text-orange-500">۱۲۸</h6>
                        <p className="text-sm font-bold text-zinc-400">تعداد باگهای رفع شده</p>
                    </div>
                </div>
                <div className="funShadowBox flex w-full items-center justify-start gap-x-4 rounded-lg bg-white px-8 py-3 shadow-2xl">
                    <img src="/images/Smile.png" alt="Coffee" title="Coffee" className="w-16" />
                    <div className="gird grid-rows-2 items-center justify-items-center">
                        <h6 className="text-2xl font-thin text-orange-500">۶۴</h6>
                        <p className="text-sm font-bold text-zinc-400">تعداد لبخندهای روزانه</p>
                    </div>
                </div>
            </section>
        </>
    );
}
