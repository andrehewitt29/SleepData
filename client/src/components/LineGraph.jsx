import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryScatter,
} from "victory";

function LineGraph({ Data, inputDates }) {
  // Check if Data is an array before using map

  if (!Array.isArray(Data) || !Array.isArray(inputDates)) {
    return <div>No Valid Data To Display</div>;
  }

  var newData = Data.map((value, index) => ({
    x: inputDates[index], // Assuming inputDates is an array
    y: parseFloat(value),
  }));

  return (
    <div style={{ width: `${100}%`, height: `${100}%` }}>
      <h2>Line Graph</h2>
      <VictoryChart
        theme={VictoryTheme.material}
        width={800} // Set the width to make it wider
        height={400} // Set the height to make it taller
      >
        <VictoryAxis
          dependentAxis
          // Add your configuration for the x-axis here
          style={{
            grid: {
              stroke: "#FFFF88",
              strokeWidth: 2,
              strokeDasharray: "none",
            }, // Set the grid color here
          }}
        />
        <VictoryAxis
          style={{
            grid: {
              stroke: "#FFFF88",
              strokeWidth: 2,
              strokeDasharray: "none",
            }, // Set the grid color here
          }}
          // Add your configuration for the y-axis here
        />
        <VictoryLine
          x="x"
          y="y"
          data={newData}
          sortKey="x"
          //newData.sort((a, b) => new Date(a.x) - new Date(b.x));

          //interpolation="natural" // Adjust the interpolation type as needed
          style={{
            data: { stroke: "orange", strokeWidth: 5 }, // Adjust the line color
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default LineGraph;
