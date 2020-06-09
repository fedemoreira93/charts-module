import React from "react";

import GridContainer from "./components/grid/GridContainer.js";
import GridItem from "./components/grid/GridItem.js";
import ChartContainer from "./components/grid/ChartContainer.js";

import RechartPieChart from "./components/rechart/RechartPieChart";
import RechartLineChart from "./components/rechart/RechartLineChart";
import RechartAreaChart from "./components/rechart/RechartAreaChart";
import RechartBarChart from "./components/rechart/RechartBarChart";

import dataAreaChart from "./data/RechartAreaData.json";
import dataBarChart from "./data/RechartBarData.json";
import dataLineChart from "./data/RechartLineData.json";
import dataPieChart1 from "./data/RechartPieData1.json";
import dataPieChart2 from "./data/RechartPieData2.json";

const renderItem = (columnStart, columnEnd, rowStart, rowEnd, chartType) => {
  return (
    <GridItem
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
    >
      <ChartContainer>
        <Chart type={chartType} />
      </ChartContainer>
    </GridItem>
  );
};

const Chart = (props) => {
  switch (props.type) {
    case "LINECHART": {
      return <RechartLineChart data={dataLineChart} />;
    }
    case "AREACHART": {
      return <RechartAreaChart data={dataAreaChart} />;
    }
    case "BARCHART": {
      return <RechartBarChart data={dataBarChart} />;
    }
    case "PIECHART": {
      return <RechartPieChart data1={dataPieChart1} data2={dataPieChart2} />;
    }
    default: {
      return "";
    }
  }
};

const App = (props) => {
  return (
    <GridContainer>
      {renderItem(1, 2, 1, 2, "LINECHART")}
      {renderItem(2, 3, 1, 2, "AREACHART")}
      {renderItem(1, 2, 2, 3, "BARCHART")}
      {renderItem(2, 3, 2, 3, "PIECHART")}
    </GridContainer>
  );
};

export default App;
