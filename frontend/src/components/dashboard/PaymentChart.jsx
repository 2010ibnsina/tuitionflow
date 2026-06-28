import { Pie } from "react-chartjs-2";

function PaymentChart({ pieData }) {
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
          💰 Payment Status
        </h4>

        <Pie
          data={pieData}
          options={{
            responsive: true,
            maintainAspectRatio: false,

            plugins: {

              legend: {

                position: "bottom",

                labels: {
                  color: "white",
                  padding: 20,
                  font: {
                    size: 14,
                  },
                },

              },

            },

          }}
          height={300}
        />

      </div>
    </div>
  );
}

export default PaymentChart;