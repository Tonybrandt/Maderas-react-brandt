import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";
function VariantsExample() {
  return (
    <div className="loader-background">
      <Spinner className="spinner" animation="grow" variant="danger" />
    </div>
  );
}

export default VariantsExample;
