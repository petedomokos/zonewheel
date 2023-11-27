const hydrateWheelData = (wheelState) => {
  const currentWheelState = wheelState?.wheelState;

  // Check for existence of properties using optional chaining
  if (currentWheelState?.[0]?.datapoints) {
    const datapoints = currentWheelState[0].datapoints;

    if (Array.isArray(datapoints)) {
      const updatedDatapoints = datapoints.map((d) => ({ ...d, status: Number.parseInt(d.status) }));

      // object shorthand for better readability
      const hydratedState = {
        ...wheelState,
        wheelState: [
          {
            ...currentWheelState[0],
            datapoints: updatedDatapoints,
          },
        ],
      };

      return hydratedState;
    } else {
      console.warn("datapoints is not an array");
    }
  } else {
    console.warn("Invalid wheelState structure");
  }

  return wheelState; // Return the original wheelState if there are issues
};

export default hydrateWheelData;
