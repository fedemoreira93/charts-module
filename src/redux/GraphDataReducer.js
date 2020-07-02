import { CHART_DATA } from "./GraphDataActions";
// import cloneDeep from "lodash/cloneDeep";

const initialState = {
  chartData: [],
};

const GraphDataReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case CHART_DATA:
      newState = {
        ...state,
        chartData: action.data.chartData,
      };

      return newState;
    default:
      return state;
  }
};

export default GraphDataReducer;
