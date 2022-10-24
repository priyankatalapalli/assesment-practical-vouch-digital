import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import LeftPanel from "./Components/LeftPanel";
import RightPanel from "./Components/RightPanel";

function App() {
  return (
    <div className="main-appliction">
      <Row>
        <LeftPanel />
        <RightPanel />
      </Row>
    </div>
  );
}

export default App;
