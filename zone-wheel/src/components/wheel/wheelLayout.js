import { calcArcCoord, calcWheelSectorAngles } from "../../util/geometryHelpers.js";

const createSectorPathD = (index, nrOfAspects, x, y) => {
  const { startAngle, endAngle, aspectAngleSize } = calcWheelSectorAngles(nrOfAspects, index);
  const startPoint = calcArcCoord(x, y, radiusOfLevel, startAngle);
  const endPoint = calcArcCoord(x, y, radiusOfLevel, endAngle);

  const angleIsGreaterThan180 = aspectAngleSize <= 180 ? false : true; //Determine the direction of the arc (clockwise or counterclockwise)

  const arc = `${radiusOfLevel} ${radiusOfLevel} 0 ${angleIsGreaterThan180 ? 1 : 0} 1 ${endPoint.x} ${endPoint.y}`;
  const centerPoint = `${x} ${y}`;

  const d = `M ${startPoint.x} ${startPoint.y} A ${arc} L ${centerPoint} L ${startPoint.x} ${startPoint.y}`;

  return d;
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
            createSectorPathD,
          };
        });

      return { key: `layer-${key}`, title, segmentData };
    }),
  };
};

export default wheelLayout;
