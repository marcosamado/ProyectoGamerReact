import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <>
            <header className="bg-brownMain py-8 shadow-sm h-28 ">
                <Navbar />
            </header>

            <main className="min-h-screen">
                <Outlet />
            </main>

            <footer className=" bg-brownMain">
                <Footer />
            </footer>
        </>
    );
};

export default LayoutPublic;
