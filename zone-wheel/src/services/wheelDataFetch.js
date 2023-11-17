import React, { useContext, useEffect} from "react";
import { WheelContext } from "../context/Context.js";
const WheelDataFetch = () => {
  const { mockData, user, setUser, layers, setLayers } = useContext(WheelContext);

  //fetch function

  const fetchData = () => {
    if (mockData !== undefined && mockData.wheelData && mockData.wheelData.length > 0) {
      setUser({
        userId: mockData.wheelData[0].userId,
        userName: mockData.wheelData[0].userName,
        wheelId: mockData.wheelData[0].wheelId,
        title: mockData.wheelData[0].title,
      });

      if (mockData.wheelData[0].levels && mockData.wheelData[0].levels.length > 0) {
        setLayers(
          mockData.wheelData[0].levels.map((level) => ({
            key: level.key,
            title: level.title,
            datapoints: mockData.wheelData[0].datapoints
              .filter((datapoint) => datapoint.levelKey === level.key)
              .map((datapoint) => ({
                aspectKey: datapoint.aspectKey,
                levelKey: datapoint.levelKey,
                title: datapoint.title,
                status: datapoint.status,
                desc: datapoint.desc,
                primaryKey: `${datapoint.aspectKey} ${datapoint.levelKey}`
              })),
          }))
        );
      } else {
        console.log("Levels array is empty or undefined");
      }
    } else {
      console.log("undefined or empty mockData.wheelData");
    }
  };

  // useEffect(() => {
  //   console.log({ user: user, layers: layers });
  // }, [user, layers]);

  return (
    <button
      onClick={() => {
        fetchData();
      }}>
      fetch data
    </button>
  );
};

export default WheelDataFetch;
