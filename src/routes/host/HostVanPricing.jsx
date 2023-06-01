import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { van } = useOutletContext();

  return (
    <p className="text-3xl mb-6">
      <span className="fw-bold">${van.price}</span>/day
    </p>
  );
};

export default HostVanPricing;
