import { useLoaderData } from "react-router-dom";

const HostVanPhotos = () => {
  const { vans: van } = useLoaderData();

  return (
    van && (
      <img
        className="rounded"
        src={van.imageUrl}
        alt={van.description}
        width="150"
        height="150"
      />
    )
  );
};

export default HostVanPhotos;
