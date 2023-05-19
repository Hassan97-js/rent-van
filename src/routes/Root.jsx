import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components";

const Root = () => {
  return (
    <>
      <Header />
      <main className="sticky-footer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
