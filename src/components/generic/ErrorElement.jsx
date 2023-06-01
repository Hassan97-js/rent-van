import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-5xl mb-8">Sorry, something went wrong.</h1>
      <p className="text-2xl text-gray-500 text-center">
        <span className="block mb-4">
          Please try again later or contact customer support.
        </span>
        <span className="block">{error.message}</span>
      </p>
    </div>
  );
};

export default ErrorElement;
