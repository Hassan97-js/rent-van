import { redirect } from "react-router-dom";

import {
  Root,
  HostLayout,
  HostVanLayout,
  Home,
  About,
  Login,
  Vans,
  VanDetail,
  Dashboard,
  Income,
  Reviews,
  HostVans,
  NotFound,
  HostVanInfo,
  HostVanPhotos,
  HostVanPricing,
  vansLoader,
  hostVansLoader,
  submitLoginFormAction,
  vanLoader
} from "../../routes";

import { ErrorElement } from "../../components";

import { requireAuth } from "../../utils";

const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    loader: () => {
      const loggedIn = Boolean(localStorage.getItem("loggedIn"));

      return { loggedIn };
    },
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />,
        loader: ({ request }) => {
          const loggedIn = Boolean(localStorage.getItem("loggedIn"));

          if (loggedIn) {
            return redirect("/host");
          }

          const message = new URL(request.url).searchParams.get("message");
          return { message };
        },
        action: submitLoginFormAction
      },
      {
        path: "vans",
        element: <Vans />,
        errorElement: <ErrorElement />,
        loader: vansLoader
      },
      {
        path: "vans/:id",
        element: <VanDetail />,
        errorElement: <ErrorElement />,
        loader: vanLoader
      },
      {
        path: "host",
        element: <HostLayout />,
        errorElement: <ErrorElement />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async ({ request }) => {
              return await requireAuth(request);
            }
          },
          {
            path: "income",
            element: <Income />,
            loader: async ({ request }) => {
              return await requireAuth(request);
            }
          },
          {
            path: "reviews",
            element: <Reviews />,
            loader: async ({ request }) => {
              return await requireAuth(request);
            }
          },
          {
            path: "vans",
            element: <HostVans />,
            errorElement: <ErrorElement />,
            loader: hostVansLoader
          },
          {
            path: "vans/:id",
            element: <HostVanLayout />,
            errorElement: <ErrorElement />,
            loader: vanLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />
              },
              {
                path: "pricing",
                element: <HostVanPricing />
              },
              {
                path: "photos",
                element: <HostVanPhotos />
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export default routerConfig;
