import ProductDescription from "../components/ProductDescription";

const ProductDetailPage = () => {
    return (
        <div className="container w-3/4 border-2 border-gray-900 shadow-xl shadow-slate-700 rounded-lg my-10 mx-auto flex flex-col justify-between p-2 gap-2">
            <ProductDescription />
        </div>
    );
};

export default ProductDetailPage;
