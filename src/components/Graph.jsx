import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Graph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return;

    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((_, index) => `Session ${index + 1}`),
        datasets: [{
          label: "Session Count",
          data: data,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Graph;
