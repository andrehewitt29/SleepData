import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryScatter } from 'victory';

function LineGraph({ Data, inputDates }) {
 // Check if Data is an array before using map
 if (!Array.isArray(Data)) {
  // Handle the case where Data is not an array
  return <div>Error: Data is not an array.</div>;
}
      
  return (
    <div style={{ width: `${100}%`, height: `${500}px`}}>
      <h2>Line Graph</h2>
      <VictoryChart theme={VictoryTheme.material}
      
        width={1000} // Set the width to make it wider
        height={400} // Set the height to make it taller
        >
        
        
        <VictoryAxis
          // Add your configuration for the x-axis here
          style={{
            grid: { stroke: '#FFFF88', strokeWidth: 2, strokeDasharray: 'none'  }, // Set the grid color here
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            grid: { stroke: '#FFFF88', strokeWidth: 2, strokeDasharray: 'none'  }, // Set the grid color here
          }}
          // Add your configuration for the y-axis here
        />
         <VictoryLine
          data={Data.map((value, index) => ({
            x: inputDates[index], // Map sleep data to x and y values
            y: value,
          }))}
          //interpolation="natural" // Adjust the interpolation type as needed
          style={{
            data: { stroke: 'blue' }, // Adjust the line color
          }}
        />
        

      </VictoryChart>
    </div>
  );
};

export default LineGraph;
