import { defer } from "react-router-dom";

import { getVans, getVan, getHostVans, requireAuth } from "../utils";

const hostVansLoader = async ({ request }) => {
  await requireAuth(request);

  // fetch logic here after auth
  const hostVanPromise = getHostVans();
  return defer({ hostVans: hostVanPromise });
};

const vansLoader = () => {
  const vansPromise = getVans();
  return defer({ vans: vansPromise });
};

const vanLoader = ({ params }) => {
  const vanPromise = getVan(params.id);
  return defer({ van: vanPromise });
};

export { vansLoader, vanLoader, hostVansLoader };
