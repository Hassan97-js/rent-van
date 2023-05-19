import BsSpinner from "react-bootstrap/Spinner";

const Spinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%"
      }}>
      <BsSpinner animation="border" role="status" />
    </div>
  );
};

export default Spinner;
