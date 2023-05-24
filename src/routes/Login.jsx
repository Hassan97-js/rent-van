import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { loginUser } from "../utils";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const { message } = useLoaderData();
  const navigate = useNavigate();

  const loginMessage = message ?? "";
  const isSubmitting = status === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError(null);
    setStatus("submitting");

    try {
      await loginUser(loginFormData);
      // { email: "b@b.com", password: "p123" }
      navigate("/host", { replace: true });
    } catch (error) {
      setError(error);
      console.error(error);
      return;
    } finally {
      setStatus("idle");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      {loginMessage !== null && (
        <span className="text-4xl font-bold text-red-500 mb-10">{loginMessage}</span>
      )}

      <h1 className="text-2xl font-bold text-gray-800 mb-10">
        Sign in to your account
      </h1>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
          autoComplete="true"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          autoComplete="true"
        />

        {error !== null && (
          <span className="text-sm font-bold text-red-500 my-3 ml-1">
            {error.message}
          </span>
        )}

        <button className="disabled:opacity-40" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default Login;
