import { useLoaderData } from "react-router-dom";

import HostVanDetail from "./HostVanDetail";

const HostVans = () => {
  const { vans } = useLoaderData();

  return (
    <>
      <h1 className="heading-xl fw-700 mb-8">Your listed vans</h1>

      <div className="host-vans">
        {vans.map((van) => {
          return <HostVanDetail key={van.id} {...van} />;
        })}
      </div>
    </>
  );
};

export default HostVans;
