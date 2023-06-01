import Root from "./Root";
import Home from "./Home";
import About from "./About";
import Vans from "./Vans/Vans";
import VanDetail from "./Vans/VanDetail";
import NotFound from "./NotFound";
import Login from "./Login";

import HostLayout from "./host/HostLayout";
import HostVanLayout from "./host/HostVanLayout";
import Dashboard from "./host/Dashboard";
import Income from "./host/Income";
import Reviews from "./host/Reviews";
import HostVans from "./host/HostVans";
import HostVanDetail from "./host/HostVanDetail";
import HostVanInfo from "./host/HostVanInfo";
import HostVanPhotos from "./host/HostVanPhotos";
import HostVanPricing from "./host/HostVanPricing";

import { vansLoader, vanLoader, hostVansLoader } from "./loaders";
import { submitLoginFormAction } from "./actions";

export {
  Root,
  Home,
  About,
  Login,
  Vans,
  VanDetail,
  NotFound,
  HostLayout,
  HostVanLayout,
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanDetail,
  HostVanInfo,
  HostVanPhotos,
  HostVanPricing,
  hostVansLoader,
  vansLoader,
  vanLoader,
  submitLoginFormAction
};
