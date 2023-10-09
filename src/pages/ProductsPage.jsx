import ProductCard from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductsPage = () => {
    const { data, loading, error } = useFetchProducts(
        "../src/fakeApiProduct/apiProductos.json"
    );
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{Error.message}</p>;

    return (
        <>
            <h2 className="text-black text-3xl font-bold text-center mt-4">
                Productos
            </h2>
            <div className="flex flex-row flex-wrap max-w-6xl mx-auto">
                {data.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </>
    );
};

export default ProductsPage;
