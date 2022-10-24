import React, { Component } from "react";

class FooterButton extends Component {
    constructor (props) {
        super(props)
    }
  render() {
    const {text} = this.props
    return (
          <button className="btn">{text}</button>
        
    );
  }
}

export default FooterButton;
