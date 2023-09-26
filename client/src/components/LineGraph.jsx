import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory';

const LineGraph = ({ data }) => {
     data = [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: 2 },
        { x: 4, y: 5 },
        { x: 5, y: 3 },
        { x: 6, y: 2 },
        // Add more data points as needed
      ];
      
  return (
    <div style={{ width: `${100}%`}}>
      <h2>Line Graph</h2>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          // Add your configuration for the x-axis here
        />
        <VictoryAxis
          dependentAxis
          // Add your configuration for the y-axis here
        />
        <VictoryLine 

        style={{   
            
        
            data: { stroke: "orange", },
        
          }}
          
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
         
          
          //interpolation="natural"
          data={data}
          x="x" // Replace 'x' with your x-axis data property name
          y="y" // Replace 'y' with your y-axis data property name
        />

        
      </VictoryChart>
    </div>
  );
};

export default LineGraph;
