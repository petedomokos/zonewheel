import React, { useContext, useState } from "react";
import { WheelContext } from "../../context/Context.js";
import layout from "../../services/layout.js";
import "../../style/wheel.css";

function Wheel() {
  const { wheelState, setCurrentDatapointId} = useContext(WheelContext);
  const [strokeWidth, setStrokeWidth] = useState(50);

  const wheelData = layout(wheelState);
  const wheelCircle = wheelData.levels;

  const CENTER_X = window.innerWidth / wheelCircle.length;
  const CENTER_Y = (window.innerHeight / wheelCircle.length) * 2;

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");

    return d;
  }

  const selectDatapointId = (id) => {
    setCurrentDatapointId(id);
  };

  function Levels() {
    return (
      <>
        <svg className="segment-container">
          {wheelCircle &&
            wheelCircle.map((layer, index) => {
              const innerRadius = 200 - index * strokeWidth;

              return (
                <g key={`group-${layer.key}-${index}`}>
                  {layer.datapoints &&
                    layer.datapoints.map((datapoint, innerIndex) => {
                      const startAngle = innerIndex * (360 / layer.datapoints.length);
                      const endAngle = (innerIndex + 1) * (360 / layer.datapoints.length);
                      const midAngle = (startAngle + endAngle) / 2;
                      const textPosition = polarToCartesian(CENTER_X, CENTER_Y, innerRadius - strokeWidth / wheelCircle.length, midAngle);

                      return (
                        <g key={`inner-${layer.key}-${innerIndex}`}>
                          <path className="datapoint-path" strokeWidth={strokeWidth} d={describeArc(CENTER_X, CENTER_Y, innerRadius, startAngle, endAngle)}></path>
                          <text
                            onClick={() => selectDatapointId(datapoint.primaryKey)}
                            x={textPosition.x}
                            y={textPosition.y}
                            textAnchor="middle"
                            dy="0.35em"
                            fill="#ffffff"
                            transform={`rotate(${midAngle} ${textPosition.x} ${textPosition.y})`}>
                            {datapoint.title}
                          </text>
                        </g>
                      );
                    })}
                </g>
              );
            })}
        </svg>
      </>
    );
  }

  return <Levels />;
}

export default Wheel;
