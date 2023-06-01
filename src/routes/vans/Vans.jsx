import { Suspense } from "react";
import { useSearchParams, useLoaderData, Await } from "react-router-dom";

import { VanList, Button } from "../../components";

function Vans() {
  /* Constants */
  const CLASSES = {
    VAN: {
      VAN_TYPE: {
        BASE: "van-type",
        DEFAULT: "van-type--default",
        SIMPLE: "van-type--simple",
        LUXURY: "van-type--luxury",
        RUGGED: "van-type--rugged"
      }
    }
  };

  const vansPromise = useLoaderData();

  // console.log(vansPromise);

  const [searchParams, setSearchParams] = useSearchParams();

  /* Utilities */
  const applyActiveVanTypeClass = (currentType) => {
    if (!currentType) {
      return "";
    }

    const {
      VAN: { VAN_TYPE }
    } = CLASSES;

    const className = VAN_TYPE[currentType.toUpperCase()];

    if (!className) {
      return "";
    }

    return typeFilter === currentType ? className : "";
  };

  /* Handlers */
  const handleFilterChange = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  };

  /* Render */
  const typeFilter = searchParams.get("type");

  const {
    VAN: {
      VAN_TYPE: { BASE, DEFAULT }
    }
  } = CLASSES;

  const clearFilterLink = typeFilter !== null && (
    <Button onClick={() => handleFilterChange("type", null)}>Clear filters</Button>
  );

  const renderVanElements = (loadedVans) => {
    const vans = typeFilter
      ? loadedVans.filter((van) => {
          const vanType = van.type.trim().toLowerCase();
          const type = typeFilter.trim().toLowerCase();

          return vanType === type;
        })
      : loadedVans;

    return (
      <>
        <header className="mb-8">
          <div className="flex items-center gap-8">
            <div className="flex gap-3 fw-semibold">
              <Button
                className={`${BASE} ${DEFAULT} ${applyActiveVanTypeClass("simple")}`}
                onClick={() => handleFilterChange("type", "simple")}>
                Simple
              </Button>

              <Button
                className={`${BASE} ${DEFAULT} ${applyActiveVanTypeClass("luxury")}`}
                onClick={() => handleFilterChange("type", "luxury")}>
                Luxury
              </Button>

              <Button
                className={`${BASE} ${DEFAULT} ${applyActiveVanTypeClass("rugged")}`}
                to="?type=rugged"
                onClick={() => handleFilterChange("type", "rugged")}>
                Rugged
              </Button>
            </div>
            {clearFilterLink}
          </div>
        </header>

        <VanList vans={vans} />
      </>
    );
  };

  return (
    <div className="container flex flex-column p-y-16">
      <h1 className="heading-xl mb-6 fw-700">Explore our van options</h1>
      <Suspense
        fallback={<h1 className="text-3xl text-gray-800">Loading vans...</h1>}>
        <Await resolve={vansPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
}

export default Vans;
