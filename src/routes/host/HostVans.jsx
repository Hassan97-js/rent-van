import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import HostVanDetail from "./HostVanDetail";

const HostVans = () => {
  const vansPromise = useLoaderData();

  const renderHostVans = (vans) => {
    return (
      <div className="host-vans">
        {vans.map((van) => {
          return <HostVanDetail key={van.id} {...van} />;
        })}
      </div>
    );
  };
  return (
    <>
      <h1 className="heading-xl fw-700 mb-8">Your listed vans</h1>

      <Suspense
        fallback={<h1 className="text-3xl text-gray-800">Loading vans...</h1>}>
        <Await resolve={vansPromise.hostVans}>{renderHostVans}</Await>
      </Suspense>
    </>
  );
};

export default HostVans;
