import React from "react";
import {
  BarChart,
  Bar,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RechartBarChart = (props) => {
  return (
    <ResponsiveContainer width="99%" height={props.height}>
      <BarChart data={parseData(props.data)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {getData(props.data)}
      </BarChart>
    </ResponsiveContainer>
  );
};

const getData = (data) => {
  let arr = [];

  if (data && data[0].values) {
    data[0].values.map((elem, index) => {
      arr.push(
        <Bar stackId="a" key={index} dataKey={elem.name} fill={elem.color} />
      );

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
