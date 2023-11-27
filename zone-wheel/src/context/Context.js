import React, { createContext, useState, useEffect } from "react";
import fetchWheelState from "../services/fetchWheelState";
import hydrateWheelState from "../services/hydrateWheelState";

export const WheelContext = createContext();

export const WheelProvider = ({ children }) => {
  const [wheelState, setWheelState] = useState(() => hydrateWheelState(fetchWheelState()));
  const [currentDatapointId, setCurrentDatapointId] = useState(undefined);
  return (
    <WheelContext.Provider
      value={{
        wheelState,
        setWheelState,
        currentDatapointId, setCurrentDatapointId
      }}>
      {children}
    </WheelContext.Provider>
  );
};
