import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../Layouts/LayoutPublic";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import SalePage from "../pages/SalePage";
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/productos",
                element: <ProductsPage />,
            },
            {
                path: "/productos/:id",
                element: <ProductDetailPage />,
            },
            {
                path: "/registro",
                element: <RegisterPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/ofertas",
                element: <SalePage />,
            },
            {
                path: "/carrito",
                element: <CartPage />,
            },
        ],
    },
]);
