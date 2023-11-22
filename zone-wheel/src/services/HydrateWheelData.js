import { useContext, useEffect } from "react";
import { WheelContext } from "../context/Context.js";

const HydrateWheelData = () => {
  const { mockData, setUser, setLayers } = useContext(WheelContext);

  const hydrate = () => {
    // Check if mockData is falsy or wheelData is not an array
    if (!mockData?.wheelData || !Array.isArray(mockData.wheelData)) {
      console.error("Undefined or empty mockData.wheelData");
      return;
    }

    const wheel = mockData.wheelData[0];

    // Destructure properties from the wheel object
    const { userId, userName, wheelId, title } = wheel;

    setUser({ userId, userName, wheelId, title });

    if (!wheel.levels?.length) {
      console.error("Levels array is empty or undefined");
      return;
    }

    // Map levels to the desired format and set layers
    setLayers(
      wheel.levels.map((level) => {
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
      })
    );
  };

  // Call the hydrate function when the component mounts
  useEffect(() => {
    hydrate();
  }, []);

  // The component doesn't render anything, so it returns null
  return null;
};

export default HydrateWheelData;
