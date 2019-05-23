import React from "react";

function Attributes(props) {
  console.log(props.data);
  return (
    <table className="infoTable">
      <tr>
        <td id="widthSet1">
          <h5>Dietary</h5>
        </td>
        <td id="widthSet2" />
      </tr>
      {props.data.vegan != null && (
        <tr>
          <td>Plant-based: </td>
          <td className="yes">Yes</td>
        </tr>
      )}
      {props.data.paleo != null && (
        <tr>
          <td>Paleo: </td>
          {props.data.paleo == true ? (
            <td className="yes">Yes</td>
          ) : (
            <td className="no">No</td>
          )}
        </tr>
      )}
      {props.data.keto != null && (
        <tr>
          <td>Keto: </td>
          <td className="yes">Yes</td>
        </tr>
      )}

      <hr />
      <tr>
        <td>
          <h5>Safety</h5>
        </td>
      </tr>
    </table>
  );
}

export default Attributes;
