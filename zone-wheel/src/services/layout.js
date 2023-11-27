const layout = (wheelState) => {
  // Ensure wheelState is an array and has at least one element
  const wheel = Array.isArray(wheelState?.wheelState) ? wheelState.wheelState[0] : null;

  if (!wheel || typeof wheel !== "object" || !Array.isArray(wheel.levels) || !Array.isArray(wheel.datapoints)) {
    console.error("Undefined or invalid wheelState object");
    return null;
  }

  // Destructure properties from the wheel object
  const { userId, userName, wheelId, title } = wheel;

  return {
    userId,
    userName,
    wheelId,
    title,
    levels: wheel.levels.map((level) => {
      const { key, title } = level;

      // Map datapoints to the desired format
      const datapoints = wheel.datapoints
        .filter((d) => d.levelKey === level.key)
        .map((d) => {
          const { aspectKey, levelKey, title, status, desc } = d;
          return {
            aspectKey,
            levelKey,
            title,
            status,
            desc,
            primaryKey: `${aspectKey} ${levelKey}`,
          };
        });

      return { key, title, datapoints };
    }),
  };
};

export default layout;
