import React, { Component } from "react";

import help from "../../../help.png";
import howto from "../../../howto.png";
import submithelp from "../../../submithelp.png";

class About extends Component {
  render() {
    return (
      <div className="aboutAboutThat">
        <img src={help} style={{ marginBottom: 100 }} />
        <img src={howto} style={{ marginBottom: 100 }} />
        <img src={submithelp} />
      </div>
    );
  }
}

export default About;
