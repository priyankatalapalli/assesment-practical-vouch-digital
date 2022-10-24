import React, { Component } from "react";
import Form from "./Form";
import Footer from "./Footer";
import { Col } from "react-bootstrap";

class LeftPanel extends Component {
  render() {
    return (
      <Col className="left-panel" sm={5}>
        <div className="active">
          <h1>Welcome </h1>
          <p>Enter your Username and Passoword.</p>
          <Form />
          <Footer />
        </div>
      </Col>
    );
  }
}

export default LeftPanel;
