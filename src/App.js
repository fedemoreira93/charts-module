import React from "react";
import RechartPieChart from "./components/rechart/RechartPieChart";
import RechartLineChart from "./components/rechart/RechartLineChart";
import RechartAreaChart from "./components/rechart/RechartAreaChart";
import RechartBarChart from "./components/rechart/RechartBarChart";
import { connect } from "react-redux";
import { doGetChartData } from "./redux/GraphDataActions";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import styled from "styled-components";

const StyledHeader = styled(CardHeader)`
  padding: 5px;
  margin: 0;
`;

const Chart = (props) => {
  if (
    props.type !== "undefined" &&
    props.type !== null &&
    props.data !== "undefined" &&
    props.data !== null
  ) {
    switch (props.type) {
      case "LINECHART": {
        return (
          <RechartLineChart
            data={props.data}
            width={props.width}
            height={props.height}
          />
        );
      }
      case "AREACHART": {
        return (
          <RechartAreaChart
            data={props.data}
            width={props.width}
            height={props.height}
          />
        );
      }
      case "BARCHART": {
        return (
          <RechartBarChart
            data={props.data}
            width={props.width}
            height={props.height}
          />
        );
      }
      case "PIECHART": {
        return (
          <RechartPieChart
            data={props.data}
            width={props.width}
            height={props.height}
          />
        );
      }
      default: {
        return null;
      }
    }
  }
};

const renderItems = (graphData) => {
  let items = [];
  if (
    graphData !== "undefined" &&
    graphData.chartData !== "undefined" &&
    graphData.chartData.length > 0
  ) {
    graphData.chartData.map((elem, index) => {
      return items.push(
        <Grid item xs={12} lg={6} key={index}>
          <Grid container justify="center">
            <Grid key={index} item>
              <Card
                variant="outlined"
                style={{ backgroundColor: graphData.backgroundColor }}
              >
                <StyledHeader
                  title={elem.title}
                  titleTypographyProps={{ variant: "subtitle1" }}
                  style={{ backgroundColor: graphData.titleBackgroundColor }}
                ></StyledHeader>
                <CardContent>
                  <Chart
                    type={elem.type}
                    data={elem.items}
                    width={elem.width}
                    height={elem.height}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      );
    });
  }

  return items;
};

const App = ({ graphData, dispatch }) => {
  React.useEffect(() => {
    dispatch(doGetChartData());
  }, [dispatch]);

  return <Grid container>{renderItems(graphData)}</Grid>;
};

const mapStateToProps = (state) => {
  const { graphData } = state;

  return {
    graphData,
  };
};

export default connect(mapStateToProps)(App);
