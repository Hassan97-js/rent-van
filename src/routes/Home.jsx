import { Button } from "../components";

import { HomeBackground } from "../assets";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HomeBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="flex flex-column items-center justify-center">
      <header className="container flex flex-column justify-center items-center clr-white">
        <h1 className="heading-2xl mb-4 fw-800">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-xl fw-600 mb-10">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Button
          type="button"
          className="fw-700 bg-orange clr-white w-100 radius-md p-y-4 text-xl">
          Find your van
        </Button>
      </header>
    </div>
  );
};

export default Home;
