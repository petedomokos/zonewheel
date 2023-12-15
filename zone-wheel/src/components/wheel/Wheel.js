import React, { useContext } from "react";
import { WheelContext } from "../../context/Context.js";

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
