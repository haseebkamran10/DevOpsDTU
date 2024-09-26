import { RouteObject } from "react-router-dom";
import SupportPage from "../views/support/support-page";
import Home from "../views/home/home";
import { Layout } from "./Layout";
import ProductCatalogPage from "@/views/product-catalogue/product-catalogue-page";
import LoginPage from "@/views/login/login";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, // Use Layout as the root element
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductCatalogPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];
