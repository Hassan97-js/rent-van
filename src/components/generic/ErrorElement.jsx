import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex-col-center">
      <h1 className="text-5xl mb-5">Sorry, something went wrong.</h1>
      <p className="text-2xl text-gray-500">
        Please try again later or contact customer support.
      </p>
    </div>
  );
};

export default ErrorElement;
