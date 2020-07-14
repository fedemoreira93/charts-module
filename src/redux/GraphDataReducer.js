import { CHART_DATA } from "./GraphDataActions";
// import cloneDeep from "lodash/cloneDeep";

const initialState = {
  data: [],
  outlined: false,
  columns: 2,
};

const GraphDataReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case CHART_DATA:
      newState = {
        ...state,
        data: action.data.data,
        outlined: action.data.outlined,
        columns: action.data.columns,
      };

      return newState;
    default:
      return state;
  }
};

export default GraphDataReducer;
