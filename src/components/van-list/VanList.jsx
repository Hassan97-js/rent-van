import VanCard from "./VanCard";

import "./VanList.css";

const VanList = ({ vans }) => {
  console.log(vans);
  return (
    <section className="vanlist flex flex-wrap">
      {vans.map((van) => {
        // eslint-disable-next-line no-unused-vars
        const { description, ...vanProps } = van;

        return <VanCard key={van.id} {...vanProps} />;
      })}
    </section>
  );
};

export default VanList;
