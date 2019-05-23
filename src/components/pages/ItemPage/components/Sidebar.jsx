import React from "react";
import Attributes from "./Attributes";
import Badge from "./Badge";

function Sidebar(props) {
  console.log(props);
  return (
    <div className="infoBar">
      <Badge img={props.data.img} />
      <Attributes data={props.data} />
    </div>
  );
}

export default Sidebar;
