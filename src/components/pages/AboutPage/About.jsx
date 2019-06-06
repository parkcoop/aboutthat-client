import React, { Component } from "react";

import help from "../../../help.png";
import howto from "../../../howto.png";
import submithelp from "../../../submithelp.png";

class About extends Component {
  render() {
    return (
      <div className="aboutAboutThat">
        <img
          alt="Want to know how to help?"
          src={help}
          style={{ marginBottom: 100 }}
        />
        <img
          alt="Push add button to add facts to articles"
          src={howto}
          style={{ marginBottom: 100 }}
        />
        <img
          alt="Submit an article if you can't find what you're looking for!"
          src={submithelp}
        />
      </div>
    );
  }
}

export default About;
