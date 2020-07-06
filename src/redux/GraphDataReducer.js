import { CHART_DATA } from "./GraphDataActions";
// import cloneDeep from "lodash/cloneDeep";

const initialState = {
  chartData: [],
  backgroundColor: "#D7D7D9",
  titleBackgroundColor: "#B4C4D9",
};

const GraphDataReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case CHART_DATA:
      newState = {
        ...state,
        chartData: action.data.chartData,
        backgroundColor: action.data.backgroundColor,
        titleBackgroundColor: action.data.titleBackgroundColor,
      };

      return newState;
    default:
      return state;
  }
};

export default GraphDataReducer;
