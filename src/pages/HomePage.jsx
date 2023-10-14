import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

import bgMain from "../images/fondodesktop.png";
import secImg from "../images/LogoGamer.png";
import thiImg from "../images/banner2.png";
import { useState } from "react";

const HomePage = () => {
    const { data, loading, error } = useFetchProducts(
        "src/fakeApiProduct/apiProductos.json"
    );
    const [firstImg, setFristImg] = useState(true);
    const [secondImg, setSecondImg] = useState(false);
    const [thirdImg, setThirdImg] = useState(false);

    if (loading) return <p>Cargado...</p>;
    if (error) return <p>ERROR DE FETCHING</p>;

    return (
        <div>
            {/* <section
                className={
                    "bg-[url('./images/fondodesktop.png')] h-[512px] flex flex-col justify-center items-center gap-9 bg-no-repeat bg-cover"
                }
            >
                <h1 className="text-white text-4xl font-bold text-center p-5 ">
                    <span className="text-orangeMain">25% </span>de descuento en
                    juegos de playstation 4
                </h1>
                <Link to="/ofertas">
                    <button className="text-2xl text-white bg-orangeMain h-16 w-56 rounded-md text-center">
                        Comprar
                    </button>
                </Link>
            </section> */}
            {/* <!-- component -->
<!-- This is an example component --> */}
            <div className="max-w-2xl mx-auto">
                <div
                    id="default-carousel"
                    className="relative"
                    data-carousel="static"
                >
                    {/* <!-- Carousel wrapper --> */}
                    <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                        {/* <!-- Item 1 --> */}
                        <div
                            className="hidden duration-700 ease-in-out"
                            data-carousel-item
                        >
                            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                                First Slide
                            </span>
                            <img
                                src={bgMain}
                                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                alt="..."
                            />
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div
                            className="hidden duration-700 ease-in-out"
                            data-carousel-item
                        >
                            <img
                                src={secImg}
                                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                alt="..."
                            />
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div
                            className="hidden duration-700 ease-in-out"
                            data-carousel-item
                        >
                            <img
                                src={thiImg}
                                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                                alt="..."
                            />
                        </div>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 1"
                            data-carousel-slide-to="0"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 2"
                            data-carousel-slide-to="1"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 3"
                            data-carousel-slide-to="2"
                        ></button>
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button
                        type="button"
                        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                        data-carousel-prev
                    >
                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                            <span className="hidden">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                        data-carousel-next
                    >
                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                            <span className="hidden">Next</span>
                        </span>
                    </button>
                </div>
            </div>

            {/* ...................... */}

            <section>
                <h2 className="text-black text-3xl font-bold text-center mt-4">
                    Productos destacados
                </h2>
                <ul className="flex flex-row flex-wrap max-w-4xl mx-auto">
                    {data
                        .filter((product) => product.off >= 20)
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
