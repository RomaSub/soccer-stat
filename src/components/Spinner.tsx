import Spinner from "react-bootstrap/Spinner";

const CustomSpinner = () => (
  <Spinner
    className="position-absolute top-50 start-50"
    animation="border"
    role="status"
  >
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);

export default CustomSpinner;
