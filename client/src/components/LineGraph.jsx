import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryScatter } from 'victory';

const LineGraph = ({ data }) => {
     data = [
        { x: "2/1/2023", y: 1 },
        { x: "2/2/2023", y: 3 },
        { x: "2/3/2023", y: 2 },
        { x: "2/4/2023", y: 5 },
        { x: "2/5/2023", y: 3 },
        { x: "2/6/2023", y: 2 },
        { x: "2/7/2023", y: 2 },
        // Add more data points as needed
      ];
      
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

        style={{   
            
        
            data: { stroke: "orange", },
        
          }}
          
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
         
          
          //interpolation="cardinal"
          data={data}
          x="x" // Replace 'x' with your x-axis data property name
          y="y" // Replace 'y' with your y-axis data property name
        />
        
<VictoryScatter // Use VictoryScatter to render data points
data={data}
          size={10} // Size of data points
        
          style={{ data: { fill: "orange" } }} // Point color
        />
        
      </VictoryChart>
    </div>
  );
};

export default LineGraph;
