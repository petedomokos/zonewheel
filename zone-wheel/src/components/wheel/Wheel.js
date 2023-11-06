import React from "react";
import { WheelProvider } from "../../context/Context.js";

function Wheel() {
  return (
    <WheelProvider>
      <div>Wheel</div>
    </WheelProvider>
  );
}

export default Wheel;
