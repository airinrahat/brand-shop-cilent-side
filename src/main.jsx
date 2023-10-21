/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import MyCart from "./Components/Pages/MyCart/MyCart";
import SingIn from "./Components/Pages/SingInSingUP/SingIn";
import SingUp from "./Components/Pages/SingInSingUP/SingUp";
import CardDetails from "./Components/CardDetails/CardDetails";
import ShowCardDetails from "./Components/ShowCardDetails/ShowCardDetails";
import UpdateCard from "./Components/UpdateCard/UpdateCard";
import BtnDetails from "./Components/BtnDetaills/BtnDetails";
import AuthProvider from "./providers/AuthProvider";
// import Blog from "./Components/Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/addtocart"),
      },
      // {
      //   path: "/myCart/:id",
      //   element: <MyCart></MyCart>,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/addtocart/${params.id}`),
      // },
      {
        path: "/login",
        element: <SingIn></SingIn>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },

      {
        path: "/card/:name",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/updateCard/:id",
        element: <UpdateCard></UpdateCard>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
      {
        path: "/detailsCard/:id",
        element: <ShowCardDetails></ShowCardDetails>,
        loader: () => fetch("/public/car.json"),
      },
      {
        path: "/btnDtails/:id",
        element: <BtnDetails></BtnDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
