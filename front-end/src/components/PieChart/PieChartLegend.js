import React from "react";

export const PieChartLegend = data => {
  const { style, x, y } = data;
  return (
    <svg>
      <g>
        <ellipse cx={x} cy={y} rx="14" ry="7" fill={style.fill} />
      </g>
      <text fontSize="25" x={x + 300} y={y + 7}>
        {data.datum.number}
      </text>

      <text x={x + 27} y={y + 30} fontSize={25}>
        {data.datum.number / 100} %
      </text>
    </svg>
  );
};
