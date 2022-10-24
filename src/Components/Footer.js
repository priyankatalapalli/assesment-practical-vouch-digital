import React, { Component } from "react";
import FooterButton from "./FooterButton";

class Footer extends Component {
  render() {
    return (
        <footer>
        <FooterButton text={"Terms of Use"}/>
        <FooterButton text={"Privacy Policy"}/>
        <div className="rights">
          <p> © Punctualiti 2022. All rights reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
