import React, { Component } from "react";
import { Col } from "react-bootstrap";
import rectangleG from "../Assets/Rectangle-G.png";


class RightPanel extends Component {
  render() {
    return (
      <Col className="right-panel" sm={7}>
        <div className="rectangle-1">
          <img src={rectangleG} alt="Rectangle-G.png" />
        </div>
        <div className="solution">
          <h3>360° Solution for Asset Management</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <br></br> labore et dolore magna
            aliqua.
          </p>
        </div>
      </Col>
    );
  }
}

export default RightPanel;
