import React, { createContext, useState, useEffect } from "react";
import fetchWheelState from "../services/fetchWheelState";
import hydrateWheelState from "../services/hydrateWheelState";

export const WheelContext = createContext();

export const WheelProvider = ({ children }) => {
  const [wheelState, setWheelState] = useState(() => hydrateWheelState(fetchWheelState()));

  return (
    <WheelContext.Provider
      value={{
        wheelState,
        setWheelState,
      }}>
      {children}
    </WheelContext.Provider>
  );
};
