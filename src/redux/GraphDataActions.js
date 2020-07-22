import { graphApi } from "../axios/api";

export const CHART_DATA = "CHART_DATA";

export const getChartData = (data) => {
  return {
    type: CHART_DATA,
    data,
  };
};

export const doGetChartData = () => {
  return async (dispatch) => {
    return graphApi
      .get("/graph-data/")
      .then((response) => {
        dispatch(getChartData(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
