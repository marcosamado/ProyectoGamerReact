import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
    return (
        <>
            <header className="bg-brownMain py-8 shadow-sm h-28">
                <Navbar />
            </header>

            <main className="">
                <Outlet />
            </main>

            <footer>ESTE ES EL FOOTER</footer>
        </>
    );
};

export default LayoutPublic;
