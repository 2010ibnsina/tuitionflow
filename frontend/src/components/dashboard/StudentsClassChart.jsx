import { Bar } from "react-chartjs-2";

function StudentsClassChart({ classChartData }) {
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
          🎓 Students by Class
        </h4>

        <Bar
          data={classChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
              legend: {
                display: false,
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
                beginAtZero: true,

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

export default StudentsClassChart;