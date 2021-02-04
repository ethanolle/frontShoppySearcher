import React from "react";

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
      <button onClick={handleOpenAll}>Open All</button>
      {resultGrid.map((result) => (
        <div className='result'>
          <a href={result} target='_blank'>
            {result}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResultGrid;
