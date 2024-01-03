export const toRads = (arcAngle) => arcAngle * (Math.PI / 180);

export const calcArcCoord = (x, y, radiusOfLevel, arcAngle) => {
  const { cos, sin } = Math;
  const radians = toRads(arcAngle - 90);

  return {
    x: x + radiusOfLevel * cos(radians),
    y: y + radiusOfLevel * sin(radians),
  };
};


export const calcWheelSectorAngles = (nrOfAspects, index) => {
  const aspectAngleSize = 360 / nrOfAspects;
  const startAngle = index * aspectAngleSize;
  const endAngle = (index + 1) * aspectAngleSize;
  const midAngle = startAngle + aspectAngleSize / 2;

  return { aspectAngleSize, startAngle, endAngle, midAngle };
};