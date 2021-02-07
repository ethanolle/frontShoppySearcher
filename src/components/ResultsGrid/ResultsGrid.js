import React from 'react';
import Card from '../sharedComponent/Card';

import './ResultsGrid.css';
const ResultGrid = ({ resultGrid = [] }) => {
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleOpenAll = async () => {
    for (const result of resultGrid) {
      await timer(500);
      window.open(result, '_blank');
    }
  };
  return (
    <div className='result'>
      <div class='btn'>
        <button className='openAllButton' onClick={handleOpenAll}>
          Open All
        </button>
      </div>
      <Card>
        <table>
          <tr>
            <th>links</th>
          </tr>
          {resultGrid.map((result) => (
            // <div className='result'>
            <tr>
              <td>
                <a href={result} target='_blank' rel='noreferrer'>
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
