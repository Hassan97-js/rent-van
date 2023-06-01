import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();

  return (
    <img
      className="rounded"
      src={van.imageUrl}
      alt={van.description}
      width="150"
      height="150"
    />
  );
};

export default HostVanPhotos;
