const ProductCard = ({ precio, id, title, url, tipo }) => {
    return (
        <div className="container w-64 h-auto mx-auto p-5 my-8 rounded-sm shadow-lg border-2 border-gray-700 shadow-gray-700 ">
            <div className="flex flex-col items-center gap-10 ">
                <div className="w-32 h-40 text-center ">
                    <img className="w-full h-full " src={url} alt={title} />
                </div>
                {/* <hr className="border border-black w-11/12" /> */}
                <div className=" w-full h-full p-2">
                    <p className="text-xl font-semibold ">
                        <span className="line-through">$ {precio}</span>{" "}
                        <span className="text-green-700">
                            $ {precio - (precio * 20) / 100}
                        </span>
                    </p>
                    <p className="text-base font-semibold">
                        12 x ${parseInt(precio / 12)} sin interes
                    </p>
                    <p className="text-base font-semibold text-green-700">
                        Envio gratis
                    </p>
                    <button className="bg-orangeMain rounded-md text-white p-2 w-28 text-sm shadow-md shadow-gray-700 mt-3">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
