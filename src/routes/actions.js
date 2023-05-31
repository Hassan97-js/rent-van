import { redirect } from "react-router-dom";
import { loginUser } from "../utils";

const submitLoginFormAction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    await loginUser({ email, password });

    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === null) {
      localStorage.setItem("loggedIn", "true");
    }

    const path = new URL(request.url).searchParams.get("redirectTo") || "/host";

    return redirect(path);
  } catch (error) {
    return error;
  }
};

export { submitLoginFormAction };
