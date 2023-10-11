import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <>
            <header className="bg-brownMain py-8 shadow-sm h-28 font-roboto">
                <Navbar />
            </header>

            <main className="min-h-[550px] font-roboto ">
                <Outlet />
            </main>

            <footer className="bg-brownMain font-roboto">
                <Footer />
            </footer>
        </>
    );
};

export default LayoutPublic;
