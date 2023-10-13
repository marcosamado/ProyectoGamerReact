import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductDetailPage = () => {
    const { data, loading, error } = useFetchProducts(
        "../src/fakeApiProduct/apiProductos.json"
    );
    const { id } = useParams();
    const idProduct = id - 1;

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error de Fetching</p>;

    const { precio, title, url, descripcion, tipo, cantidad, off } =
        data[idProduct];

    return (
        <div className="my-24">
            <div className=" w-3/4 border-2 border-gray-900 shadow-xl shadow-slate-700 rounded-lg mx-auto flex flex-col justify-between p-2 gap-2 md:w-[650px] md:flex-row">
                <div className="w-32 h-40 md:w-64 md:h-96">
                    <img className="w-full h-full" src={url} alt="" />
                </div>
                <div className="flex flex-col gap-1 md:grow md:py-5 md:px-10 md:justify-evenly">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-lg font-semibold">{descripcion}</p>

                    {cantidad === 1 ? (
                        <p className="text-base font-semibold">
                            ¡ Ultima unidad !
                        </p>
                    ) : (
                        <p className="text-base font-semibold">
                            Cantidad disponible: {cantidad}
                        </p>
                    )}
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
                            <span className=" text-2xl">
                                $ {precio - (precio * 20) / 100}
                            </span>
                        </div>
                    ) : (
                        <span className="text-2xl font-bold">$ {precio}</span>
                    )}
                    <p className="text-sm font-semibold">
                        12 x ${parseInt(precio / 12)} sin interes
                    </p>
                    <p className="text-base font-semibold text-green-600">
                        Envio gratis
                    </p>
                    <button className="bg-gradient-to-tr from-orangeMain to-orange-600 rounded-md text-white p-3 w-auto text-sm shadow-md shadow-gray-700 ">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
