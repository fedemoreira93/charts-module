import React from "react";
import {
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
    <BarChart
      data={parseData(props.data)}
      width={props.width}
      height={props.height}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend formatter={renderLegendText} />
      {getData(props.data)}
    </BarChart>
  );
};

const getData = (data) => {
  let arr = [];

  if (data && data[0].values) {
    data[0].values.map((elem, index) => {
      arr.push(<Bar key={index} dataKey={elem.name} fill={elem.color} />);

      return false;
    });
  }

  return arr;
};

const parseData = (data) => {
  let arr = [];

  data.map((value) => {
    let obj = {};

    obj.name = value.name;

    value.values.map((val) => {
      obj[val.name] = val.value;

      return false;
    });

    arr.push(obj);

    return false;
  });

  return arr;
};

export default RechartBarChart;
