import React from "react";

const WaterConsumption = () => {
  const sampleData = {
    ponds: [
      {
        id: 1,
        name: "Pond 1",
        capacity: 2000,
        totalConsumed: 750,
      },
      {
        id: 2,
        name: "Pond 2",
        capacity: 2500,
        totalConsumed: 1100,
      },
      {
        id: 3,
        name: "Pond 3",
        capacity: 1800,
        totalConsumed: 600,
      },
    ],
  };

  const maxCapacity = Math.max(
    ...sampleData.ponds.map((pond) => pond.capacity)
  );

  const scaleFactor = 100 / maxCapacity;

  const createBarChart = (data) => (
    <div className="w-full h-full bg-transparent rounded-sm overflow-hidden ">
      <h1 className="text-lg font-bold mb-3 text-black">
        Water Level Monitoring
      </h1>
      <div className="w-full h-full p-10 overflow-hidden border border-gray-200">
        <svg className="w-full h-full">
          {/* Vertical grid lines */}
          {data.map((_, index) => {
            const xPosition = index * (100 / data.length);
            return (
              <line
                key={index}
                x1={`${xPosition}%`}
                y1="0%"
                x2={`${xPosition}%`}
                y2="100%"
                stroke="gray"
              />
            );
          })}

          {/* Bars */}
          {data.map((pond, index) => {
            const barWidth = 100 / data.length - 14;
            const xPosition = index * (100 / data.length);

            const capacityBarHeight = pond.capacity * scaleFactor; // Apply scale factor
            const consumedBarHeight = pond.totalConsumed * scaleFactor; // Apply scale factor
            const consumedYPosition = 100 - consumedBarHeight;

            return (
              <React.Fragment key={index}>
                <rect
                  x={`${xPosition}%`}
                  y={`${consumedYPosition}%`}
                  width={`${barWidth}%`}
                  height={`${consumedBarHeight}%`}
                  fill="rgba(75, 145, 255, 1)"
                />
                <rect
                  x={`${xPosition}%`}
                  y={`${100 - capacityBarHeight}%`}
                  width={`${barWidth}%`}
                  height={`${capacityBarHeight}%`}
                  fill="rgba(54, 162, 235, 0.5)"
                />
                <text
                  x={`${xPosition + barWidth / 2}%`}
                  y="95%"
                  fontSize="12px"
                  textAnchor="middle"
                >
                  Pond ID: {pond.id}
                </text>
                <text
                  x={`${xPosition + barWidth / 2}%`}
                  y={`${100 - capacityBarHeight - 1}%`}
                  fontSize="12px"
                  dy="1em"
                  textAnchor="middle"
                >
                  Total Volume: {pond.capacity}
                </text>
                <text
                  x={`${xPosition + barWidth / 2}%`}
                  y={`${consumedYPosition - 5}%`}
                  fontSize="12px"
                  dy="1em"
                  textAnchor="middle"
                >
                  Total Consumed: {pond.totalConsumed}
                </text>
              </React.Fragment>
            );
          })}
        </svg>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex items-center justify-center">
      {createBarChart(sampleData.ponds)}
    </div>
  );
};
export default WaterConsumption;
