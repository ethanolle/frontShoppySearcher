import React from "react";
import Card from "../sharedComponent/Card";

import "./ResultsGrid.css";
const ResultGrid = ({ resultGrid = [] }) => {
  const openInNewTab = (url) => {
    console.log("inFunction");
    var win = window.open(url, "_blank");
  };
  const handleOpenAll = () => {
    resultGrid.forEach((result) => {
      openInNewTab(result);
    });
  };
  return (
    <div className='result'>
      <button className='openAllButton' onClick={handleOpenAll}>
        Open All
      </button>
      <Card>
        <table>
          <tr>
            <th>links</th>
          </tr>
          {resultGrid.map((result) => (
            // <div className='result'>
            <tr>
              <td>
                <a href={result} target='_blank'>
                  {result}
                </a>
              </td>
            </tr>
          ))}
        </table>
      </Card>
    </div>
  );
};

export default ResultGrid;
