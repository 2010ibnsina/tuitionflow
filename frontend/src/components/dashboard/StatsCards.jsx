import {
  FaUserGraduate,
  FaMoneyBillWave,
  FaWallet,
  FaExclamationTriangle,
} from "react-icons/fa";

function StatsCards({
  totalStudents,
  expectedIncome,
  collectedIncome,
  dueAmount,
}) {
  const cards = [
    {
      title: "Students",
      value: totalStudents,
      icon: <FaUserGraduate size={34} />,
      color: "#2563eb",
      bg: "linear-gradient(135deg,#2563eb,#60a5fa)",
    },

    {
      title: "Expected",
      value: `৳${expectedIncome}`,
      icon: <FaMoneyBillWave size={34} />,
      color: "#16a34a",
      bg: "linear-gradient(135deg,#16a34a,#4ade80)",
    },

    {
      title: "Collected",
      value: `৳${collectedIncome}`,
      icon: <FaWallet size={34} />,
      color: "#7c3aed",
      bg: "linear-gradient(135deg,#7c3aed,#a78bfa)",
    },

    {
      title: "Due",
      value: `৳${dueAmount}`,
      icon: <FaExclamationTriangle size={34} />,
      color: "#dc2626",
      bg: "linear-gradient(135deg,#dc2626,#fb7185)",
    },
  ];

  return (
    <div className="row mb-4">

      {cards.map((card, index) => (

        <div
          className="col-lg-3 col-md-6 mb-3"
          key={index}
        >

          <div
            className="card border-0 shadow-lg h-100"
            style={{
              background: card.bg,
              color: "white",
              borderRadius: "22px",
              transition: "0.35s",
              cursor: "pointer",
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px) scale(1.02)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
            }}
          >

            <div className="card-body d-flex justify-content-between align-items-center">

              <div>

                <small
                  style={{
                    fontSize: 15,
                    opacity: .9,
                  }}
                >
                  {card.title}
                </small>

                <h2
                  style={{
                    fontWeight: 700,
                    marginTop: 8,
                  }}
                >
                  {card.value}
                </h2>

              </div>

              <div
                style={{
                  background: "rgba(255,255,255,.18)",
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.icon}
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default StatsCards;