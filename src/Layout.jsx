import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Input from "./Input";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import MainContext from "./context/MainContext";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";

const Layout = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Input />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product/:slug?",
          element: <Product />,
        },
        {
          path: "/productDetails/:id?",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <Signup/>,
        }
      ],
    },
  ]);
  return (
    <>
      <MainContext>
        <RouterProvider router={router} />
      </MainContext>
    </>
  );
};

export default Layout;
