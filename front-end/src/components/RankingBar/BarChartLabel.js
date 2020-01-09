import React from "react";

export const BarChartLabel = data => {
  const i = data.index;
  const  valueDay  = data.data.map(e=>e.day);
  const  valueNumber  = data.data.map(e=>e.number);
  const x = data.x;
  const y = data.y;
  return (
    <svg>
      {
        <text x={x + 70} y={y + 5}>
          {valueDay[i]}
        </text>
      }
      {
        <text x={x + 400} y={y + 5}>
          {valueNumber[i]}
        </text>
      }
    </svg>
  );
};
