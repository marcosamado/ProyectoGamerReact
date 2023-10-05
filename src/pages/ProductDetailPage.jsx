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

    console.log(data[idProduct]);
    return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
