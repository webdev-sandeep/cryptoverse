import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CryptoDetails from "./Pages/CryptoDetails";
import Cryptocurrencies from "./Pages/Cryptocurrencies";
import HomePage from "./Pages/HomePage";
import News from "./Pages/News";
import { Provider } from "react-redux";
import store from "./app/store";
import "antd/dist/antd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "crypto/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
