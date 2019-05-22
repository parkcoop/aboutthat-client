import React from "react";

function Attributes() {
  return (
    <table className="infoTable">
      <tr>
        <td id="widthSet1">
          <h5>Dietary</h5>
        </td>
        <td id="widthSet2" />
      </tr>
      <tr>
        <td>Plant-based: </td>
        <td className="yes">Yes</td>
      </tr>
      <tr>
        <td>Paleo: </td>
        <td className="yes">Yes</td>
      </tr>
      <tr>
        <td>Keto: </td>
        <td className="yes">Yes</td>
      </tr>
      <tr>
        <td>Natural: </td>
        <td className="yes">Yes</td>
      </tr>
      <tr>
        <td>Gluten-free: </td>
        <td className="yes">Yes</td>
      </tr>
      <tr>
        <td>Glycemic index: </td>
        <td>0</td>
      </tr>
      <hr />
      <tr>
        <td>
          <h5>Safety</h5>
        </td>
      </tr>
      <tr>
        <td>Kid safe: </td>
        <td className="no">No</td>
      </tr>
      <tr>
        <td>Dog safe: </td>
        <td className="no">No</td>
      </tr>
    </table>
  );
}

export default Attributes;
