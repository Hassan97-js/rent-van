import { Link } from "react-router-dom";

const HostVanDetail = ({ id, name, price, description, imageUrl }) => {
  return (
    <Link
      to={id}
      className="host-van-detail bg-white p-4 radius-md block decoration-none">
      <figure className="flex gap-4">
        <img className="radius-base" src={imageUrl} alt={description} />

        <figcaption className="flex flex-column justify-center">
          <h2 className="fw-600 mb-2 clr-black">{name}</h2>

          <p className="clr-gray text-xl">${price}/day</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default HostVanDetail;
