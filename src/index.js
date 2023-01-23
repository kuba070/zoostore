import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContexProvider from "./contexts/CartContexProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContexProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProductContextProvider>
    </CartContexProvider>
  </BrowserRouter>
);
