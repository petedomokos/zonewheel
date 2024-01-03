export const toRads = (arcAngle) => arcAngle * (Math.PI / 180);

export const calcArcCoord = (x, y, innerRadiusOfLevel, arcAngle) => {
  const { cos, sin } = Math;
  const radians = toRads(arcAngle - 90);

  return {
    x: x + innerRadiusOfLevel * cos(radians),
    y: y + innerRadiusOfLevel * sin(radians),
  };
};

export const calcWheelSectorAngles = (nrOfAspects, innerIndex) => {
  const aspectAngleSize = 360 / nrOfAspects;
  const startAngle = innerIndex * aspectAngleSize;
  const endAngle = (innerIndex + 1) * aspectAngleSize;
  const midAngle = startAngle + aspectAngleSize / 2;

  return { aspectAngleSize, startAngle, endAngle, midAngle };
};