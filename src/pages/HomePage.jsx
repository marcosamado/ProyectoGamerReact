const HomePage = () => {
    return (
        <div className="">
            <section
                className={
                    "bg-[url('./images/backgroundMain.png')] h-[512px] flex flex-col justify-center items-center gap-9"
                }
            >
                <h1 className="text-white text-4xl font-bold text-center p-5 ">
                    <span className="text-orangeMain">25% </span>de descuento en
                    juegos de playstation 4
                </h1>
                <button className="text-2xl text-white bg-orangeMain h-16 w-56 rounded-md text-center">
                    Comprar
                </button>
            </section>
            <section>
                <h2>Productos destacados</h2>
            </section>
            <section>
                <h2>Productos estrellas</h2>
            </section>
        </div>
    );
};

export default HomePage;
