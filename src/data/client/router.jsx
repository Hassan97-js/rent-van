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
  hostVanLoader
} from "../../routes";

import { ErrorElement } from "../../components";

import { requireAuth } from "../../utils";

const routerConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
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
          const message = new URL(request.url).searchParams.get("message");
          return { message };
        }
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
            loader: async () => {
              return await requireAuth();
            }
          },
          {
            path: "income",
            element: <Income />,
            loader: async () => {
              return await requireAuth();
            }
          },
          {
            path: "reviews",
            element: <Reviews />,
            loader: async () => {
              return await requireAuth();
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
