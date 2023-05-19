import { Link, useSearchParams } from "react-router-dom";

import Tag from "../generic/Tag";

const VanCard = ({ id, imageUrl, name, price, type }) => {
  const [searchParams] = useSearchParams();

  return (
    <Link to={id} state={{ search: `?${searchParams.toString()}` }}>
      <figure>
        <img className="w-100 mb-4 radius-md" src={imageUrl} alt={name} />

        <figcaption className="flex justify-between">
          <div>
            <h2 className="fw-600 mb-3">{name}</h2>
            <Tag className={`van-type van-type--${type}`}>{type}</Tag>
          </div>

          <p>
            <span className="text-xl fw-600">${price}</span>/day
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default VanCard;
