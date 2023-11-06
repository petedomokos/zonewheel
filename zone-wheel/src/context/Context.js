import React, { createContext, useState } from "react";

export const WheelContext = createContext();

export const WheelProvider = ({ children }) => {



  return (
    <WheelContext.Provider
      value={{
 
      }}>
      {children}
    </WheelContext.Provider>
  );
};
