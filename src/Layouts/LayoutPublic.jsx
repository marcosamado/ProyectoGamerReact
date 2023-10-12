import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-brownMain py-8 shadow-sm h-28 font-roboto">
                <Navbar />
            </header>

            <main className=" font-roboto ">
                <Outlet />
            </main>

            <footer className="bg-brownMain font-roboto mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default LayoutPublic;
