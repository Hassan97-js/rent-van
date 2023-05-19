import { useSearchParams, useLoaderData } from "react-router-dom";

import { VanList, Button } from "../../components";

const Vans = () => {
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

  const { vans } = useLoaderData();
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

  const displayedVans = typeFilter
    ? vans.filter((van) => {
        const vanType = van.type.trim().toLowerCase();
        const type = typeFilter.trim().toLowerCase();

        return vanType === type;
      })
    : vans;

  const {
    VAN: {
      VAN_TYPE: { BASE, DEFAULT }
    }
  } = CLASSES;

  const clearFilterLink = typeFilter !== null && (
    <Button
      className="clr-gray text-decoration-underline"
      onClick={() => handleFilterChange("type", null)}>
      Clear filters
    </Button>
  );

  return (
    <div className="container flex flex-column p-y-16">
      <header className="mb-8">
        <h1 className="heading-xl mb-6 fw-700">Explore our van options</h1>

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

      {displayedVans && displayedVans.length > 0 && <VanList vans={displayedVans} />}
    </div>
  );
};

export default Vans;
