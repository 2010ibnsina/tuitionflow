import { Line } from "react-chartjs-2";

function IncomeChart({ lineData }) {
  return (
    <div
      className="card shadow-lg border-0 rounded-4 h-100"
      style={{
        background: "#131c31",
        color: "white",
      }}
    >
      <div className="card-body">

        <h4 className="mb-4">
          📈 Income Trend
        </h4>

        <Line
          data={lineData}
          options={{
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
              legend: {
                labels: {
                  color: "white",
                },
              },
            },

            scales: {

              x: {
                ticks: {
                  color: "white",
                },

                grid: {
                  color: "#2d3d63",
                },
              },

              y: {

                ticks: {
                  color: "white",
                },

                grid: {
                  color: "#2d3d63",
                },

              },

            },

          }}
          height={320}
        />

      </div>
    </div>
  );
}

export default IncomeChart;