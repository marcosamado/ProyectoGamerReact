import { Link } from "react-router-dom";

const ProductCard = ({ precio, title, url, off, id }) => {
    return (
        <div className="container w-64 h-auto mx-auto p-5 my-8 rounded-sm shadow-lg border-2 border-gray-700 shadow-gray-700 ">
            <Link to={`/productos/${id}`}>
                <div className="flex flex-col items-center gap-5">
                    <div className="w-32 h-40 text-center ">
                        <img className="w-full h-full " src={url} alt={title} />
                    </div>

                    <div className=" w-full h-28 p-2">
                        {off ? (
                            <div className="flex flex-col text-xl font-semibold">
                                <div className="flex flex-row gap-1">
                                    <p className="line-through text-sm text-gray-700">
                                        $ {precio}{" "}
                                    </p>{" "}
                                    <span className="text-green-600 no-underline text-xs p-[1px]">
                                        {off}%off
                                    </span>
                                </div>
                                <span className="text-black ">
                                    $ {precio - (precio * 20) / 100}
                                </span>
                            </div>
                        ) : (
                            <span className="font-bold text-xl">
                                $ {precio}
                            </span>
                        )}
                        <p className="text-sm font-semibold">
                            12 x ${parseInt(precio / 12)} sin interes
                        </p>
                        <p className="text-base font-semibold text-green-600">
                            Envio gratis
                        </p>
                    </div>
                </div>
            </Link>
            <button className="bg-gradient-to-tr from-orangeMain to-orange-600 rounded-md text-white p-2 w-28 text-sm shadow-md shadow-gray-700 mx-2 mt-3">
                Agregar
            </button>
        </div>
    );
};

export default ProductCard;
