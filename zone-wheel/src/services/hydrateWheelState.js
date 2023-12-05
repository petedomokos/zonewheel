import { DEFAULT_STATUS } from "../constants/constants.js";
import { isNr } from "../util/dataHelpers.js";

const hydrateWheelData = (wheelState) => {
  // Check for existence of properties
  if (!wheelState?.datapoints) {
    console.warn("datapoints is not an array");
    return Error({ wheelState });
  }

  const { datapoints } = wheelState;
  const hydratedDatapoints = datapoints.map((d) => {
    const hydratedStatus = isNr(Number(d.status)) ? +d.status : DEFAULT_STATUS;
    return {
      ...d,
      status: hydratedStatus,
    };
  });

  const hydratedState = {
    ...wheelState,
    datapoints: hydratedDatapoints,
  };
  return hydratedState;
};

export default hydrateWheelData;
