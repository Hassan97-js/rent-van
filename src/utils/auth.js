import { redirect } from "react-router-dom";

const requireAuth = async (request) => {
  const isLoggedIn = Boolean(localStorage.getItem("loggedIn"));

  const path = new URL(request.url).pathname;

  if (!isLoggedIn) {
    throw redirect(`/login?message=Sorry, you must login first&redirectTo=${path}`);
  }
};

export { requireAuth };
