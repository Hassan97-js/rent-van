import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Spinner } from "./components";

import { routerConfig } from "./data";

import "./data/server";

import "./scss/styles.scss";

const router = createBrowserRouter(routerConfig);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  </StrictMode>
);
