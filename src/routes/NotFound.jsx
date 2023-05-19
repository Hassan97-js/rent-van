import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex-col-center">
      <h1 className="mb-4 text-6xl fw-700">404 Not Found</h1>
      <p className="mb-0 text-4xl fw-500 text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="bg-slate-500 fw-700 text-white mt-8 text-xl rounded-sm px-4 py-2">
        Return to Home
      </Link>
    </section>
  );
};

export default NotFound;
