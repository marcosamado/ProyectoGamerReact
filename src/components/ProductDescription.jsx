import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductDescription = () => {
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
        <>
            <div className="w-1/2">
                <img className="w-full h-full" src={url} alt="" />
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-xl font-semibold">{descripcion}</p>

            {cantidad === 1 ? (
                <p className="text-lg font-semibold">¡ Ultima unidad !</p>
            ) : (
                <p className="text-lg font-semibold">
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
        </>
    );
};

export default ProductDescription;
