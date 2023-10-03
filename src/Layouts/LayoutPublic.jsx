import { Link, Outlet } from "react-router-dom";
import BurguerIcon from "../icons/BurguerIcon";
import CrossIcon from "../icons/CrossIcon";
import logoGamer from "../images/logoGamer.png";
import { useState } from "react";

const LayoutPublic = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    return (
        <>
            <header className="bg-brownMain py-8 top-0 left-0 fixed right-0 shadow-sm h-28">
                <div className=" flex flex-row justify-between">
                    <button
                        className="ml-4"
                        onClick={() => setOpenNavbar(true)}
                    >
                        <BurguerIcon />
                    </button>
                    <div className="mr-4">
                        <img src={logoGamer} alt="" />
                    </div>

                    <div
                        className={`${
                            !openNavbar && "hidden"
                        } bg-gray-600/30 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
                        onClick={() => setOpenNavbar(false)}
                    ></div>
                    <div
                        className={`${
                            openNavbar ? "w-56 p-2" : "w-0 p-0"
                        } bg-brownMain/95 min-h-screen fixed top-0 left-0 transition-all duration-300`}
                    >
                        <button
                            className={`${!openNavbar && "hidden"} ml-3 mt-7`}
                            onClick={() => setOpenNavbar(false)}
                        >
                            <CrossIcon />
                        </button>

                        <ul
                            className={`${
                                !openNavbar && "hidden"
                            } flex flex-col text-left ml-3 gap-5 text-xl text-white mt-10`}
                        >
                            <Link to="/">
                                <li className="hover:bg-yellow-400 rounded-sm p-2">
                                    HOME
                                </li>
                            </Link>
                            <Link to="/productos">
                                <li className="hover:bg-yellow-400 rounded-sm p-2">
                                    Productos
                                </li>
                            </Link>
                            <Link to="/ofertas">
                                <li className="hover:bg-yellow-400 rounded-sm p-2">
                                    Ofertas
                                </li>
                            </Link>
                            <Link to="/carrito">
                                <li className="hover:bg-yellow-400 rounded-sm p-2">
                                    Carrito
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </header>

            <Outlet />

            <footer>ESTE ES EL FOOTER</footer>
        </>
    );
};

export default LayoutPublic;
