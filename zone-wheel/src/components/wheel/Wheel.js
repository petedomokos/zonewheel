import React from "react";
import { WheelProvider } from "../../context/Context.js";
import HydrateWheelData from "../../services/HydrateWheelData.js";

function Wheel() {
  return (
    <WheelProvider>
      <HydrateWheelData />
    </WheelProvider>
  );
}

export default Wheel;
