import React, { Component } from "react";

import help from "../../../help.png";
import howto from "../../../howto.png";
import submithelp from "../../../submithelp.png";

class About extends Component {
  render() {
    return (
      <div className="aboutAboutThat">
        <img src={help} style={{ width: "80%", marginBottom: 100 }} />
        <img src={howto} style={{ width: "70%", marginBottom: 100 }} />
        <img src={submithelp} style={{ width: "70%" }} />
      </div>
    );
  }
}

export default About;
