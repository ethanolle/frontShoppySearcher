import React from "react";

const ResultGrid = ({ resultGrid = [] }) => {
  return (
    <div className='result'>
      {resultGrid.map((result) => (
        <div className='result'>{result}</div>
      ))}
    </div>
  );
};

export default ResultGrid;
