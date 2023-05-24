import { redirect } from "react-router-dom";

const requireAuth = async () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    throw redirect("/login?message=Sorry, you must login first");
  }
};

export { requireAuth };
