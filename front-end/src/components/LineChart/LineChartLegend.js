import React from "react";
import _ from 'lodash';

export const LineChartLegend = data => {
  const { style, x, y } = data;
  console.log(data.datum, _.sumBy(data.datum.data, 'y'))
  return (
    <svg>
      <g>
        <ellipse cx={x} cy={y} rx="14" ry="7" fill={style.fill} />
      </g>
      <text fontSize="25" x={x + 500} y={y + 7}>
        {_.sumBy(data.datum.data, 'y')}
      </text>
    </svg>
  );
};