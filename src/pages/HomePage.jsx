import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

const HomePage = () => {
    const { data, loading, error } = useFetchProducts(
        "src/fakeApiProduct/apiProductos.json"
    );

    if (loading) return <p>Cargado...</p>;
    if (error) return <p>ERROR DE FETCHING</p>;

    return (
        <div className="">
            <section
                className={
                    "bg-[url('./images/fondodesktop.png')] h-[512px] flex flex-col justify-center items-center gap-9 bg-no-repeat bg-cover"
                }
            >
                <h1 className="text-white text-4xl font-bold text-center p-5 ">
                    <span className="text-orangeMain">25% </span>de descuento en
                    juegos de playstation 4
                </h1>
                <Link to="/productos">
                    <button className="text-2xl text-white bg-orangeMain h-16 w-56 rounded-md text-center">
                        Comprar
                    </button>
                </Link>
            </section>

            <section>
                <h2 className="text-black text-3xl font-bold text-center mt-4">
                    Productos destacados
                </h2>
                <ul className="flex flex-row flex-wrap max-w-2xl mx-auto">
                    {data
                        .filter((product) => product.off)
                        .map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                </ul>
            </section>
            <section>
                <h2 className="text-black text-3xl font-bold text-center mt-4">
                    Productos estrellas
                </h2>
                <div className="flex flex-col items-center justify-around gap-10 my-8 sm:flex-row sm:my-20">
                    <Link to="/productos">
                        <div className="h-24 w-72 bg-[url('src/images/banner1.png')] text-white bg-no-repeat flex flex-col items-end justify-center rounded-md shadow-md shadow-gray-700">
                            <p className="mr-10">Sillas Gamer</p>
                        </div>
                    </Link>
                    <Link to="/productos">
                        <div className="h-24 w-72 bg-[url('src/images/banner2.png')] text-white bg-no-repeat flex flex-col items-end justify-center rounded-md shadow-md shadow-gray-700">
                            <p className="mr-7">Computadoras</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
