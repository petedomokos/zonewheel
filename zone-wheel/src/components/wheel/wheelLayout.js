import { calcArcPos } from "../../util/geometryHelpers.js";

const createArcPathD = (innerIndex, nrOfAspects, x, y, innerRadius) => {
  const aspectAngle = 360 / nrOfAspects;

  const startAngle = innerIndex * aspectAngle;
  const endAngle = (innerIndex + 1) * aspectAngle;
  const startPos = calcArcPos(x, y, innerRadius, startAngle);
  const endPos = calcArcPos(x, y, innerRadius, endAngle);

  const angleDiff = endAngle - startAngle;

  // Determine the direction of the arc (clockwise or counterclockwise)
  const largeArcFlag = angleDiff <= 180 ? "0" : "1";

  const d = `M ${startPos.x} ${startPos.y} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${endPos.x} ${endPos.y}`;

  return d ;
};

const wheelLayout = (wheelState = {}) => {
  const { datapoints = [], levels = [] } = wheelState;

  return {
    ...wheelState,
    levels: levels.map((level) => {
      const { key, title } = level;

      // Map datapoints to the desired format
      const segmentData = datapoints
        .filter((d) => d.levelKey === level.key)
        .map((d) => {
          const { aspectKey, levelKey, title, status, desc } = d;
          return {
            aspectKey,
            levelKey,
            title,
            status,
            desc,
            primaryKey: `${aspectKey}-${levelKey}`,
            createArcPathD,
          };
        });

      return { key: `layer-${key}`, title, segmentData };
    }),
  };
};

export default wheelLayout;
