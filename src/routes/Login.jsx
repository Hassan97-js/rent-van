import { useNavigation, useActionData, useLoaderData, Form } from "react-router-dom";

const Login = () => {
  const navigationStatus = useNavigation();
  const { message } = useLoaderData();
  const loginActionError = useActionData();

  const loginMessage = message ?? "";
  const isSubmitting = navigationStatus.state === "submitting";

  return (
    <div className="login-container">
      {loginMessage !== null && (
        <span className="text-4xl font-bold text-red-500 mb-10">{loginMessage}</span>
      )}

      <h1 className="text-2xl font-bold text-gray-800 mb-10">
        Sign in to your account
      </h1>

      <Form replace method="post" className="login-form">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="true"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="true"
        />

        {loginActionError !== undefined && (
          <span className="text-sm font-bold text-red-500 my-3 ml-1">
            {loginActionError.message}
          </span>
        )}

        <button className="disabled:opacity-40" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
};

export default Login;
