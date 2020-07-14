import React from "react";
import RechartPieChart from "./components/rechart/RechartPieChart";
import RechartLineChart from "./components/rechart/RechartLineChart";
import RechartAreaChart from "./components/rechart/RechartAreaChart";
import RechartBarChart from "./components/rechart/RechartBarChart";
import MaterialTable from "./components/material/MaterialTable";
import { connect } from "react-redux";
import { doGetChartData } from "./redux/GraphDataActions";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const App = ({ graphData, dispatch }) => {
  const Chart = (props) => {
    if (props.type && props.data) {
      switch (props.type) {
        case "LINECHART": {
          return <RechartLineChart data={props.data} height={props.height} />;
        }
        case "AREACHART": {
          return <RechartAreaChart data={props.data} height={props.height} />;
        }
        case "BARCHART": {
          return <RechartBarChart data={props.data} height={props.height} />;
        }
        case "PIECHART": {
          return <RechartPieChart data={props.data} height={props.height} />;
        }
        case "MATERIAL_TABLE": {
          return <MaterialTable data={props.data} height={props.height} />;
        }
        default: {
          return null;
        }
      }
    }
  };
  const renderItems = (graphData) => {
    let items = [];
    if (graphData && graphData.chartData) {
      graphData.chartData.forEach((elem, index) => {
        items.push(
          <Grid
            item
            xs={12}
            lg={!graphData.columns ? 6 : Math.trunc(12 / graphData.columns)}
            key={index}
          >
            <Box border={graphData.outlined ? 1 : 0}>
              <Box mb="1rem">
                <Typography variant="subtitle1">{elem.title}</Typography>
              </Box>
              <Box mb="1rem">
                <Chart
                  type={elem.type}
                  data={elem.items}
                  width={elem.width}
                  height={elem.height}
                />
              </Box>
            </Box>
          </Grid>
        );
      });

      return <Grid container>{items}</Grid>;
    }

    return items;
  };

  React.useEffect(() => {
    dispatch(doGetChartData());
  }, [dispatch]);

  return renderItems(graphData);
};

const mapStateToProps = (state) => {
  const { graphData } = state;

  return {
    graphData,
  };
};

export default connect(mapStateToProps)(App);
