import bgImg from "../images/backgroundMain.png";

const HomePage = () => {
    return (
        <div>
            {/* <img src={bgImg} alt="" /> */}
            <section className={"bg-[url('./images/backgroundMain.png')]"}>
                <h1>
                    <span>25% </span>de descuento en juegos de playstation 4
                </h1>
                <button>Comprar</button>
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
