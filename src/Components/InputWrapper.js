import React, { Component } from "react";


class InputWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, name, placeholder, image, onChange, value } = this.props;
    return (
      <div className="input-wrapper">
        <div className="input-icon-1">
          <img src={image} />
        </div>
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
      </div>
    );
  }
}

export default InputWrapper;
