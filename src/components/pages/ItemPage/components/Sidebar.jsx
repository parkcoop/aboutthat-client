import React from "react";
import Attributes from "./Attributes";
import Badge from "./Badge";

function Sidebar() {
  return (
    <div className="infoBar">
      <Badge />
      <Attributes />
    </div>
  );
}

export default Sidebar;
