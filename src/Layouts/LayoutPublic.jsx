import { Link, Outlet } from "react-router-dom";
import BurguerIcon from "../icons/BurguerIcon";
import CrossIcon from "../icons/CrossIcon";

const LayoutPublic = () => {
    return (
        <>
            <header>
                <div className="bg-gray-400 py-3 top-0 left-0 fixed right-0 shadow-sm">
                    <button className="ml-4">
                        <BurguerIcon />
                    </button>

                    <div className="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"></div>
                    <div className="bg-cyan-500 min-h-screen w-56 fixed top-0 left-0 p-2">
                        <button className="ml-1">
                            <CrossIcon />
                        </button>
                    </div>
                    {/* <nav className="p-7 flex-grow ">
                        <ul className="flex flex-row gap-3 items-center">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/productos">Productos</Link>
                            </li>
                            <li>
                                <Link to="/ofertas">Ofertas</Link>
                            </li>
                            <li>
                                <Link to="/carrito">Carrito</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-col gap-2 p-4">
                        <Link to="/registro">Crear Cuenta</Link>
                        <Link to="/login">Iniciar sesion</Link>
                    </div> */}
                </div>
            </header>

            <Outlet />

            <footer>ESTE ES EL FOOTER</footer>
        </>
    );
};

export default LayoutPublic;
