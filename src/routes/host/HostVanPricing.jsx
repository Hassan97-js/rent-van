import { useLoaderData } from "react-router-dom";

const HostVanPricing = () => {
  const { vans: van } = useLoaderData();

  return (
    <p className="text-3xl mb-6">
      <span className="fw-bold">${van.price}</span>/day
    </p>
  );
};

export default HostVanPricing;
