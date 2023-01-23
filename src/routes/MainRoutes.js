import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
import AboutUsPage from "../pages/AboutUsPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import OurPartnersPage from "../pages/OurPartnersPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { Link: "/products", element: <ProductsPage />, id: 1 },
    { Link: "/", element: <HomePage />, id: 2 },
    { Link: "/auth", element: <AuthPage />, id: 3 },
    { Link: "/cart", element: <CartPage />, id: 4 },
    { Link: "/*", element: <NotFoundPage />, id: 5 },
    { Link: "/products/:id", element: <ProductDetailsPage />, id: 6 },
    { Link: "/partners", element: <OurPartnersPage />, id: 7 },
    { Link: "/about", element: <AboutUsPage />, id: 8 },
  ];

  const PRIVATE_ROUTES = [
    { Link: "/admin", element: <AdminPage />, id: 9 },
    { Link: "/edit/:id", element: <EditProductPage />, id: 10 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.Link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.Link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={item.id}
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
