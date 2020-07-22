import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import PropTypes from "prop-types";

const RechartLineChart = (props) => {
  RechartLineChart.propTypes = {
    onSubmit: PropTypes.arrayOf(PropTypes.object),
  };

  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart data={props.data.data}>
        <XAxis dataKey={props.data.xdata} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />

        {props.data.keys.map((key, index) => (
          <Line
            type="monotone"
            dataKey={key}
            key={index}
            stroke={props.data.colors[index]}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RechartLineChart;
