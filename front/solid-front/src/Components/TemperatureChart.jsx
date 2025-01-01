// TemperatureChart.jsx
import axios from "axios";
import Chart from "chart.js/auto";
import { createSignal, onCleanup, onMount } from "solid-js";

function TemperatureChart() {
  let chartRef;
  let chart;
  const [temp, setTemp] = createSignal([]);
  const [label, setLabel] = createSignal([]);

  onMount(() => {
    chart = new Chart(chartRef, {
      type: "line",
      data: {
        labels: label(),
        datasets: [
          {
            label: "Temperature",
            data: temp(),
            borderColor: "#243642",
            tension: 0.1,
          },
        ],
      },
      options: {
        animation: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const intervalId = setInterval(() => {
      axios
        .get("/api/v1/temp/raw")
        .then((response) => {
          setTemp((prev) => [...prev, response.data.raw]);
          setLabel((prev) => [...prev, String(temp().length - 1)]);

          chart.data.labels = label();
          chart.data.datasets[0].data = temp();
          chart.update();
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 5000);

    onCleanup(() => {
      clearInterval(intervalId);
      chart.destroy();
    });
  });

  return (
    <div className="bg-chartBg rounded-xl m-5">
      <div class="m-3">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}

export default TemperatureChart;
