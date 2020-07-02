export const CHART_DATA = "CHART_DATA";

export const getChartData = (data) => {
  return {
    type: CHART_DATA,
    data,
  };
};

export const doGetChartData = () => {
  return async (dispatch) => {
    return fetch(`http://127.0.0.1:8888/api/graph/v1/graph-data/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        dispatch(getChartData(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
