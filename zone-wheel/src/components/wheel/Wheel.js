import React from "react";
import { WheelProvider } from "../../context/Context.js";

import WheelDataFetch from "../../services/wheelDataFetch.js";

function Wheel() {
  return (
    <WheelProvider>
      <WheelDataFetch />
    </WheelProvider>
  );
}

export default Wheel;
