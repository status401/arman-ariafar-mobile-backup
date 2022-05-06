//? ui
import NavIcon from "./ui/NavIcon";

//? component
export default function Layout({ children }) {
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white shadow-lg">
                <div className="m-auto flex w-full max-w-sm items-center justify-between px-4 py-4">
                    <button>
                        <NavIcon />
                    </button>
                    <h6 dir="ltr" className="translate-y-[2px] text-2xl font-thin text-orange-500">
                        <a href="#homeSection">A<span className="text-xl">A</span>.</a>
                    </h6>
                </div>
            </nav>
            {children}
            <footer></footer>
        </>
    );
}
