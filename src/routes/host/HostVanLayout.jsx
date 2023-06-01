import { Suspense } from "react";
import { Await, Link, Outlet, useLoaderData } from "react-router-dom";

import Tag from "../../components/generic/Tag";
import HostVanNav from "../../components/HostVanNav";

import { BackArrow } from "../../assets";

const HostVanLayout = () => {
  const hostVansPromise = useLoaderData();

  const capitalizeWord = (string) => {
    if (!string) {
      return "";
    }

    return string[0].toUpperCase() + string.slice(1);
  };

  const renderHostVans = (van) => {
    const vanType = van && capitalizeWord(van.type);

    return (
      <div className="w-[700px] py-4 px-4 rounded fs-5 bg-white">
        <div className="w-full mx-auto" style={{ maxWidth: 700 }}>
          <div>
            <div className="flex flex-wrap gap-8">
              <div style={{ flex: "1 1 200px" }}>
                <img
                  style={{ objectFit: "cover", height: "100%" }}
                  className="mr-2 rounded-1"
                  src={van.imageUrl}
                  alt={van.description}
                />
              </div>

              <div
                style={{
                  flex: "2 0 auto"
                }}>
                <Tag className={`van-type van-type--${van.type} mb-4 fw-semibold`}>
                  {vanType}
                </Tag>
                <h1 className="heading-xl mb-2 fw-700">{van.name}</h1>
                <p className="text-3xl mb-6">
                  <span className="fw-bold">${van.price}</span>/day
                </p>
              </div>
            </div>

            <HostVanNav />
          </div>
        </div>

        <Outlet context={{ van }} />
      </div>
    );
  };

  return (
    <div className="w-[700px] mx-auto">
      <Link relative="path" to=".." className="backarrowlink mb-10">
        <img src={BackArrow} alt="Back Arrow" />
        Back to all vans
      </Link>

      <Suspense
        fallback={<h1 className="text-3xl text-gray-800">Loading van...</h1>}>
        <Await resolve={hostVansPromise.van}>{renderHostVans}</Await>
      </Suspense>
    </div>
  );
};

export default HostVanLayout;
