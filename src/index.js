import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import Instamart from "./Instamart";
import AppLayout from "./App";
import Cart from "./Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: <Instamart />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
