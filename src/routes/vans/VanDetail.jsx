import { Link, useLoaderData } from "react-router-dom";

import { Button, Tag } from "../../components";

import { BackArrow } from "../../assets";

const VanDetail = () => {
  // const location = useLocation();
  const { vans: van } = useLoaderData();

  // const search = location.state?.search || "";
  // const vanType = location.state?.type || "all";

  // console.log(search, vanType);

  // const vanType = new URLSearchParams(location.state?.search).get("type");

  return (
    <div className="container flex flex-column items-center">
      <div className="van-detail">
        <Link
          // to={`..${location.state?.search}`}
          to={".."}
          relative="path"
          className="backarrowlink mb-10">
          <img src={BackArrow} alt="Back Arrow" />
          Back to all vans
        </Link>

        <div>
          <img src={van.imageUrl} className="mb-8" alt={van.description} />

          <div>
            <Tag className={`van-type van-type--${van.type} mb-4`}>{van.type}</Tag>

            <h1 className="heading-xl mb-2 fw-700">{van.name}</h1>
            <p className="text-3xl mb-6">
              <span className="fw-600">${van.price}</span>/day
            </p>
            <p className="mb-8">{van.description}</p>

            <Button
              type="button"
              className="fw-700 bg-orange clr-white w-100 radius-md p-y-4 text-xl">
              Rent this van
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanDetail;
