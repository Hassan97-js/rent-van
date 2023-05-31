import { Outlet, useLoaderData } from "react-router-dom";

import { Header, Footer } from "../components";

const Root = () => {
  const { loggedIn } = useLoaderData();

  return (
    <>
      <Header isLoggedIn={loggedIn} />
      <main className="sticky-footer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
