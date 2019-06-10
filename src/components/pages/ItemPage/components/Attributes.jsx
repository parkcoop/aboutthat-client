import React from "react";

function Attributes(props) {
  return (
    <table className="infoTable">
      <tbody>
        <tr id="widthSet1">
          <h5>Dietary Info</h5>
        </tr>
        <tr id="widthSet2" />
      </tbody>

      {props.data.vegan != null && (
        <tbody>
          <tr>Vegan: </tr>
          {props.data.vegan === true ? (
            <tr className="yes">Yes</tr>
          ) : (
            <tr className="no">No</tr>
          )}
        </tbody>
      )}
      {props.data.paleo != null && (
        <tbody>
          <tr>Paleo: </tr>
          {props.data.paleo === true ? (
            <tr className="yes">Yes</tr>
          ) : (
            <tr className="no">No</tr>
          )}
        </tbody>
      )}
      {props.data.keto != null && (
        <tbody>
          <tr>Keto: </tr>
          {props.data.keto === true ? (
            <tr className="yes">Yes</tr>
          ) : (
            <tr className="no">No</tr>
          )}
        </tbody>
      )}
    </table>
  );
}

export default Attributes;
