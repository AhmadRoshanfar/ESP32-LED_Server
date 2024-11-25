import { Chart, Colors, Interaction, Legend, Title, Tooltip } from "chart.js";
import { Line } from "solid-chartjs";
import { onMount } from "solid-js";

const TemperatureChart = ({ data, labels }) => {
  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        data: data,
        borderColor: "#243642",
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    Interaction: true,
  };

  return (
    <div className="bg-chartBg rounded-xl m-10">
      <div class="m-3">
        <Line
          data={chartData}
          options={chartOptions}
          width={500}
          height={600}
        />
      </div>
    </div>
  );
};

export default TemperatureChart;
