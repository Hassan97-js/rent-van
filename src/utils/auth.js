import { redirect } from "react-router-dom";

const requireAuth = async () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw redirect("/login");
  }
};

export { requireAuth };
