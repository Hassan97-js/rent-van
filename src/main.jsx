import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routerConfig } from "./data";

import "./data/server";

import "./styles/reset.css";
import "./styles/main.css";
import "./styles/utils.css";

const router = createBrowserRouter(routerConfig);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
  </StrictMode>
);
