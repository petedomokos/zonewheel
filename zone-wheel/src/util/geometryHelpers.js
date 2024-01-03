export const toRads = (arcAngle) => arcAngle * (Math.PI / 180);

export const calcArcCoord = (x, y, innerRadius, arcAngle) => {
  const { cos, sin } = Math;
  const radians = toRads(arcAngle - 90);

  return {
    x: x + innerRadius * cos(radians),
    y: y + innerRadius * sin(radians),
  };
};

  // calc the circumference of a fraction of a circle (C = 2 * π * r)
export const calcArcLength = (aspectAngle, radius) => toRads(aspectAngle) * radius;

export const calcWheelSectorAngles = (nrOfAspects, innerIndex) => {
  const aspectAngleSize = 360 / nrOfAspects;
  const startAngle = innerIndex * aspectAngleSize;
  const endAngle = (innerIndex + 1) * aspectAngleSize;
  const midAngle = startAngle + aspectAngleSize / 2;

  return { aspectAngleSize, startAngle, endAngle, midAngle };
};