import { useState } from "react";
import BurguerIcon from "../icons/BurguerIcon";
import CrossIcon from "../icons/CrossIcon";
import logoGamer from "../images/logoGamer.png";
import { Link } from "react-router-dom";

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
            <button className="ml-4" onClick={handleOpenNavbar}>
                <BurguerIcon />
            </button>
            <div className="mr-4">
                <img src={logoGamer} alt="" />
            </div>

            <div
                className={`${
                    !openNavbar && "hidden"
                } bg-gray-600/30 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
                onClick={handleClosenavbar}
            ></div>
            <div
                className={`${
                    openNavbar ? "w-56 p-2" : "w-0 p-0"
                } bg-brownMain/95 min-h-screen fixed top-0 left-0 transition-all duration-300`}
            >
                <button
                    className={`${!openNavbar && "hidden"} ml-3 mt-7`}
                    onClick={handleClosenavbar}
                >
                    <CrossIcon />
                </button>

                <div
                    className={`${!openNavbar && "hidden"} flex flex-col gap-2`}
                >
                    <button className="text-white border w-full mt-6">
                        Iniciar sesion
                    </button>
                    <button className="text-white border w-full">
                        Registrarse
                    </button>
                </div>
                <ul
                    className={`${
                        !openNavbar && "hidden"
                    } flex flex-col text-left ml-3 gap-5 text-xl text-white mt-10`}
                >
                    <Link to="/" onClick={handleClosenavbar}>
                        <li className="hover:bg-yellow-400 rounded-sm p-2">
                            HOME
                        </li>
                    </Link>
                    <Link to="/productos" onClick={handleClosenavbar}>
                        <li className="hover:bg-yellow-400 rounded-sm p-2">
                            Productos
                        </li>
                    </Link>
                    <Link to="/ofertas" onClick={handleClosenavbar}>
                        <li className="hover:bg-yellow-400 rounded-sm p-2">
                            Ofertas
                        </li>
                    </Link>
                    <Link to="/carrito" onClick={handleClosenavbar}>
                        <li className="hover:bg-yellow-400 rounded-sm p-2">
                            Carrito
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
