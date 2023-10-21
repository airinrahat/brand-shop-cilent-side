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
import Blog from "./Components/Pages/Blogs/Blog";
import PrivateRoute from "./Routes/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addtocart"),
      },

      {
        path: "/login",
        element: <SingIn></SingIn>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
        element: (
          <PrivateRoute>
            <UpdateCard></UpdateCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
      {
        path: "/detailsCard/:id",
        element: <ShowCardDetails></ShowCardDetails>,
        loader: () => fetch("http://localhost:5000/allbrand"),
      },
      {
        path: "/btnDtails/:id",
        element: (
          <PrivateRoute>
            <BtnDetails></BtnDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
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
