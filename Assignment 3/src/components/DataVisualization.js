import React from 'react';
import { Line } from 'react-chartjs-2';

const DataVisualization = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Property Prices',
        data: [120000, 150000, 100000, 200000, 250000],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      }
    ]
  };

  return <Line data={data} />;
};

export default DataVisualization;
