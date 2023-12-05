import React, { useContext, useState } from "react";
import { WheelContext } from "../../context/Context.js";
import wheelLayout from "./wheelLayout.js";
function Wheel() {
  const { wheelState } = useContext(WheelContext);

  return (
    <>
      <svg>
        <text>render wheel in an svg</text>
      </svg>
    </>
  );
}

export default Wheel;
