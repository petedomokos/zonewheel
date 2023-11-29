import React, { useContext, useRef, useState, useEffect } from "react";
import { WheelContext } from "../../context/Context.js";
import layout from "../../services/layout.js";

function Wheel() {
  const { wheelState } = useContext(WheelContext);

  function Levels() {
    return (
      <>
        <svg>
          <text>render wheel in an svg</text>
        </svg>
      </>
    );
  }

  return <Levels />;
}

export default Wheel;
