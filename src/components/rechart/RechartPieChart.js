import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

const RechartPieChart = (props) => {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <PieChart>
        <Pie
          data={props.data1}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={props.data2}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RechartPieChart;
