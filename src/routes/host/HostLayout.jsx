import { Outlet } from "react-router-dom";

import HostNav from "../../components/HostNav";

const HostLayout = () => {
  return (
    <div className="container flex flex-column mt-4">
      <HostNav />
      <Outlet />
    </div>
  );
};

export default HostLayout;
