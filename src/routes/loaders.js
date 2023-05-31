import { defer } from "react-router-dom";

import { getVans, getHostVans, requireAuth } from "../utils";

const hostVanLoader = async ({ request, params }) => {
  await requireAuth(request);

  // fetch logic here after auth
  return await getHostVans(params.id);
};

const vansLoader = ({ params }) => {
  const vansPromise = getVans(params.id);
  return defer({ vans: vansPromise });
};

export { vansLoader, hostVanLoader };
