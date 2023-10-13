import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

const SalePage = () => {
    const { data, loading, error } = useFetchProducts(
        "../src/fakeApiProduct/apiProductos.json"
    );
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{Error.message}</p>;

    return (
        <>
            <h2 className="text-black text-3xl font-bold text-center mt-4">
                Productos en oferta
            </h2>
            <div className="flex flex-row flex-wrap max-w-6xl mx-auto">
                {data
                    .filter((item) => item.off)
                    .map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
            </div>
        </>
    );
};

export default SalePage;
