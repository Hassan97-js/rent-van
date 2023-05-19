import { Link } from "react-router-dom";

import { AboutHeaderImage } from "../assets";

const About = () => {
  return (
    <div className={`main flex flex-column`}>
      <header>
        <img
          style={{
            width: "100%",
            height: "25rem",
            objectFit: "cover",
            objectPosition: "0 30%"
          }}
          src={AboutHeaderImage}
          alt=""
        />
      </header>

      <article className="container flex flex-column justify-center">
        <section>
          <h1 className="heading-xl mb-4 fw-700">
            Don&apos;t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-xl mb-10">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your travel
            plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="text-xl mb-16">
            Our team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
        </section>

        <section
          className="bg-light-orange-2 p-8 radius-md"
          style={{
            maxWidth: "31.25rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}>
          <h2 className="heading-lg mb-6">
            Your destination is waiting. Your van is ready.
          </h2>
          <Link
            to="/vans"
            className="fw-700 bg-light-black clr-white radius-md p-x-4 p-y-2 text-lg "
            type="button">
            Explore our vans
          </Link>
        </section>
      </article>
    </div>
  );
};

export default About;
