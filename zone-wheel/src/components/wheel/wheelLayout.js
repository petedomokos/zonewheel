const calcTextPos = (x, y, innerRadius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: x + innerRadius * Math.cos(angleInRadians),
    y: y + innerRadius * Math.sin(angleInRadians),
  };
};

const calcAngles = (innerIndex, totalDatapoints, x, y, innerRadius) => {
  //calc angles
  const startAngle = innerIndex * (360 / totalDatapoints);
  const endAngle = (innerIndex + 1) * (360 / totalDatapoints);
  const midAngle = (startAngle + endAngle) / 2;

  //calc d
  const start = calcTextPos(x, y, innerRadius, endAngle);
  const end = calcTextPos(x, y, innerRadius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = ["M", start.x, start.y, "A", innerRadius, innerRadius, 0, largeArcFlag, 0, end.x, end.y].join(" ");

  return { startAngle, endAngle, midAngle, d };
};

const wheelLayout = (wheelState = {}) => {
  const { datapoints = [], levels = [] } = wheelState;
  const getTextPos = (x, y, innerRadius, angleInDegrees) => calcTextPos(x, y, innerRadius, angleInDegrees);
  const getAngles = (innerIndex, totalDatapoints, x, y, innerRadius) => calcAngles(innerIndex, totalDatapoints, x, y, innerRadius);
  return {
    ...wheelState,
    levels: levels.map((level) => {
      const { key, title } = level;
      const segmentData = datapoints
        .filter((d) => d.levelKey === level.key)
        .map((d) => {
          const { aspectKey, levelKey, title, status, desc } = d;
          return {
            sectorKey: aspectKey,
            levelKey,
            title,
            status,
            desc,
            primaryKey: `segment-${aspectKey}-${levelKey}`,
            getTextPos,
            getAngles,
          };
        });
      return { key: `layer-${key}`, title, segmentData };
    }),
  };
};
export default wheelLayout;
