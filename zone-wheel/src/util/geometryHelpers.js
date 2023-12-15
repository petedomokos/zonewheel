export const toRads = (arcAngle) => arcAngle * (Math.PI / 180);

export const calcArcPos = (x, y, innerRadius, arcAngle) => {
  const { cos, sin } = Math;
  const radians = toRads(arcAngle - 90);

  return {
    x: x + innerRadius * cos(radians),
    y: y + innerRadius * sin(radians),
  };
};
