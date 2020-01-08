import React from "react";

export const BarChartLabel = data => {
  const i = data.index;
  const  valueDay  = data.data.day;
  const  valueNumber  = data.data.number;
  console.log(data);
  const x = data.x;
  const y = data.y;
  return (
    <svg>
      {
        <text x={x + 49} y={y - 10}>
          {valueDay}
        </text>
      }
      {
        <text x={x + 350} y={y - 10}>
          {valueNumber}
        </text>
      }
    </svg>
  );
};
