import { getVans, getHostVans } from "../utils";

const hostVanLoader = async ({ params }) => {
  // await requireAuth();

  // fetch logic here after auth
  return await getHostVans(params.id);
};

const vansLoader = async ({ params }) => {
  return await getVans(params.id);
};

export { vansLoader, hostVanLoader };
