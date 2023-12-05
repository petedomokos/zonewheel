const calcTextPosition = (pos, innerRadius, strokeWidth, midAngle) => {
  const radiusFactor = 0.8;
  const radius = innerRadius - strokeWidth * radiusFactor;
  const angleInRadians = ((midAngle - 90) * Math.PI) / 180.0;

  return {
    x: pos.x + radius * Math.cos(angleInRadians),
    y: pos.y + radius * Math.sin(angleInRadians),
  };
};

const calcAngles = (pos, index, totalDatapoints, innerRadius, strokeWidth) => {
  const startAngle = index * (360 / totalDatapoints);
  const endAngle = (index + 1) * (360 / totalDatapoints);
  const midAngle = (startAngle + endAngle) / 2;

  const start = calcTextPosition(pos, innerRadius, strokeWidth, midAngle, startAngle);
  const end = calcTextPosition(pos, innerRadius, strokeWidth, endAngle);
  
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = ["M", start.x, start.y, "A", innerRadius, innerRadius, 0, largeArcFlag, 0, end.x, end.y].join(" ");

  return { startAngle, endAngle, midAngle, innerRadius, start, end, d };
};

const wheelLayout = (wheelState = {}) => {
  const { datapoints = [], levels = [] } = wheelState;

  return {
    ...wheelState,
    layersData: levels.map((level) => {
      const { key, title } = level;

      const segmentData = datapoints
        .filter((d) => d.levelKey === level.key)
        .map((d) => {
          const { aspectKey, levelKey, title, status, desc } = d;
          const getAngles = (index, totalDatapoints, innerRadius, strokeWidth, midAngle) => calcAngles(index, totalDatapoints, innerRadius, strokeWidth, midAngle); 
          const getTextPosition = (pos, innerRadius, strokeWidth, wheelLength, midAngle) => calcTextPosition(pos, innerRadius, strokeWidth, wheelLength, midAngle);

          return {
            sectorKey: aspectKey,
            title,
            status,
            desc,
            primaryKey: `segment-${aspectKey}-${levelKey}`,
            getAngles,
            getTextPosition,
          };
        });

      return { key: `layer-${key}`, title, segmentData };
    }),
  };
};

export default wheelLayout;
