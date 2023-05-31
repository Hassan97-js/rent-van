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
  hostVanLoader,
  submitLoginFormAction
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
        loader: vansLoader
      },
      {
        path: "vans/:id",
        element: <VanDetail />,
        loader: vansLoader
      },
      {
        path: "host",
        element: <HostLayout />,
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
            loader: hostVanLoader
          },
          {
            path: "vans/:id",
            element: <HostVanLayout />,
            loader: hostVanLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
                loader: hostVanLoader
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
                loader: hostVanLoader
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
                loader: hostVanLoader
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
