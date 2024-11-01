// PriceChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const PriceChart = ({ historicalPrices, predictedPrices }) => { // Renamed props
  const labels = historicalPrices.map((_, index) => `Day ${index + 1}`);
  const data = {
    labels: [...labels, ...predictedPrices.map((_, index) => `Future Day ${index + 1}`)],
    datasets: [
      {
        label: 'Past Prices',
        data: historicalPrices,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Future Price Prediction',
        data: predictedPrices,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Price Trends</h2>
      <Line data={data} />
    </div>
  );
};

export default PriceChart;