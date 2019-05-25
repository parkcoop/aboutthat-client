import React from "react";
function Badge(props) {
  return (
    <div id="badge">
      {props.img && props.img.includes("png") ? (
        <img
          className="image"
          style={{ backgroundColor: "white", padding: 5, marginTop: 20 }}
          src={props.img}
        />
      ) : (
        <img className="image" style={{ marginTop: 20 }} src={props.img} />
      )}
    </div>
  );
}

export default Badge;
