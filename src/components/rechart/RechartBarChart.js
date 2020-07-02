import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const renderLegendText = (value, entry) => {
  const { color } = entry;

  return (
    <span style={{ color }}>
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </span>
  );
};

const RechartBarChart = (props) => {
  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <BarChart data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend formatter={renderLegendText} />
        <Bar dataKey="baja" fill="#0088fe" />
        <Bar dataKey="normal" fill="#00c49f" />
        <Bar dataKey="urgente" fill="#e83139" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RechartBarChart;
