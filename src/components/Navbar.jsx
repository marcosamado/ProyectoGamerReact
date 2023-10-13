import { useState } from "react";
import BurguerIcon from "../icons/BurguerIcon";
import CrossIcon from "../icons/CrossIcon";
import logoGamer from "../images/logoGamer.png";
import { Link } from "react-router-dom";
import CartIcon from "../icons/CartIcon";

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    const handleOpenNavbar = () => {
        setOpenNavbar(true);
    };
    const handleClosenavbar = () => {
        setOpenNavbar(false);
    };

    return (
        <div className=" flex flex-row justify-between">
            <div className="ml-4 md:flex-grow">
                <Link to="/">
                    <img src={logoGamer} alt="Logo Gamer" />
                </Link>
            </div>
            <button className="mr-4 md:hidden" onClick={handleOpenNavbar}>
                <BurguerIcon />
            </button>

            <div
                className={`${
                    !openNavbar && "hidden"
                } bg-gray-600/30 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm md:hidden`}
                onClick={handleClosenavbar}
            ></div>

            <div
                className={`${
                    openNavbar ? "w-56 p-2" : "w-0 p-0"
                } bg-brownMain/95 min-h-screen fixed top-0 right-0 transition-all duration-150 md:hidden`}
            >
                <button
                    className={`${!openNavbar && "hidden"} `}
                    onClick={handleClosenavbar}
                >
                    <CrossIcon />
                </button>
                <button
                    className={`${
                        !openNavbar && "hidden"
                    } absolute right-5 top-10 text-white hover:bg-orangeMain hover:scale-110 rounded-md p-1`}
                >
                    <Link to="/carrito" onClick={handleClosenavbar}>
                        <CartIcon />
                    </Link>
                </button>

                <div
                    className={`${
                        !openNavbar && "hidden"
                    } flex flex-col gap-2 mt-20`}
                >
                    <Link to="/login" onClick={handleClosenavbar}>
                        <button className="text-white border w-full rounded-md text-xl py-1 bg-orangeMain border-orangeMain">
                            Iniciar sesion
                        </button>
                    </Link>
                    <Link to="/registro" onClick={handleClosenavbar}>
                        <button className="text-white border w-full rounded-md text-xl py-1">
                            Registrarse
                        </button>
                    </Link>
                </div>
                <ul
                    className={`${
                        !openNavbar && "hidden"
                    } flex flex-col text-left gap-5 text-xl text-white mt-5`}
                >
                    <Link to="/" onClick={handleClosenavbar}>
                        <li className="hover:bg-orangeMain hover:pl-3 rounded-sm py-2">
                            HOME
                        </li>
                    </Link>
                    <Link to="/productos" onClick={handleClosenavbar}>
                        <li className="hover:bg-orangeMain hover:pl-3 rounded-sm py-2">
                            Productos
                        </li>
                    </Link>
                    <Link to="/ofertas" onClick={handleClosenavbar}>
                        <li className="hover:bg-orangeMain hover:pl-3 rounded-sm py-2">
                            Ofertas
                        </li>
                    </Link>
                </ul>
            </div>

            {/* NAvbar desktop **************/}

            <div
                className={`hidden bg-brownMain md:flex flex-row-reverse flex-auto justify-around items-center`}
            >
                <button className={`text-white hover:bg-orangeMain rounded-md`}>
                    <Link to="/carrito">
                        <CartIcon />
                    </Link>
                </button>

                <div className={` flex flex-row gap-5`}>
                    <Link to="/login">
                        <button className="text-white border w-auto rounded-md text-sm p-2 bg-orangeMain border-orangeMain">
                            Iniciar sesion
                        </button>
                    </Link>
                    <Link to="/registro">
                        <button className="text-white border w-auto rounded-md text-sm p-2">
                            Registrarse
                        </button>
                    </Link>
                </div>
                <ul
                    className={`flex flex-row text-left gap-3  text-lg text-white`}
                >
                    <Link to="/">
                        <li className="hover:bg-orangeMain rounded-sm p-2">
                            HOME
                        </li>
                    </Link>
                    <Link to="/productos">
                        <li className="hover:bg-orangeMain rounded-sm p-2">
                            Productos
                        </li>
                    </Link>
                    <Link to="/ofertas">
                        <li className="hover:bg-orangeMain rounded-sm p-2">
                            Ofertas
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
