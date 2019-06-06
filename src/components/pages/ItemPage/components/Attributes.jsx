import React from "react";

function Attributes(props) {
  return (
    <table className="infoTable">
      <tr>
        <td id="widthSet1">
          <h5>Dietary Info</h5>
        </td>
        <td id="widthSet2" />
      </tr>

      {props.data.vegan != null && (
        <tr>
          <td>Vegan: </td>
          {props.data.vegan === true ? (
            <td className="yes">Yes</td>
          ) : (
            <td className="no">No</td>
          )}
        </tr>
      )}
      {props.data.paleo != null && (
        <tr>
          <td>Paleo: </td>
          {props.data.paleo === true ? (
            <td className="yes">Yes</td>
          ) : (
            <td className="no">No</td>
          )}
        </tr>
      )}
      {props.data.keto != null && (
        <tr>
          <td>Keto: </td>
          {props.data.keto === true ? (
            <td className="yes">Yes</td>
          ) : (
            <td className="no">No</td>
          )}
        </tr>
      )}
    </table>
  );
}

export default Attributes;
