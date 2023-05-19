import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Sorry, something went wrong.
      </h1>
      <p style={{ fontSize: "1.5rem" }}>
        Please try again later or contact customer support.
      </p>
    </div>
  );
};

export default ErrorElement;
