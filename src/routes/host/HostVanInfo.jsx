import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { van } = useOutletContext();

  return (
    <div className="fs-5">
      <p className="mb-3">
        <span className="fw-bold">Name:</span> {van.name}
      </p>

      <p className="mb-3">
        <span className="fw-bold">Category:</span> {van.type}
      </p>

      <p className="mb-3">
        <span className="fw-bold">Description:</span> {van.description}
      </p>

      <p className="mb-0">
        <span className="fw-bold">Visibility:</span> Public
      </p>
    </div>
  );
};

export default HostVanInfo;
