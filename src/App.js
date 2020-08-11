import React from "react";
import RechartPieChart from "./components/rechart/RechartPieChart";
import RechartLineChart from "./components/rechart/RechartLineChart";
import RechartAreaChart from "./components/rechart/RechartAreaChart";
import RechartBarChart from "./components/rechart/RechartBarChart";
import RechartGaugeChart from "./components/rechart/RechartGaugeChart";
import MaterialTable from "./components/material/MaterialTable";
import { connect } from "react-redux";
import { doGetChartData } from "./redux/GraphDataActions";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const App = ({ graphData, dispatch }) => {
  const HeaderTitle = withStyles({
    root: {
      backgroundColor: "#E7E7E7",
      padding: "2px",
      paddingLeft: "4px",
      borderLeft: "6px outset #8A8FA4",
    },
  })(Typography);

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
          return (
            <RechartBarChart
              data={props.data}
              height={props.height}
              stacked={props.stacked}
            />
          );
        }
        case "PIECHART": {
          return <RechartPieChart data={props.data} height={props.height} />;
        }
        case "GAUGECHART": {
          return <RechartGaugeChart data={props.data} height={props.height} />;
        }
        case "TABLE": {
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
    if (graphData && graphData.data) {
      graphData.data.forEach((elem, index) => {
        items.push(
          <Grid item xs={12} lg={elem.columns ? elem.columns : 6} key={index}>
            <Box paddingRight={2}>
              <Box mb="1rem">
                <HeaderTitle variant="h6">{elem.title}</HeaderTitle>
              </Box>
              <Box mb="1rem">
                <Chart
                  type={elem.type}
                  data={!elem.json ? elem.items : JSON.parse(elem.json)}
                  width={elem.width}
                  height={elem.height}
                  stacked={elem.stacked}
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
