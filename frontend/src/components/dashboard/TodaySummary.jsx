import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaMoneyBillWave,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";

function TodaySummary({
  presentCount,
  absentCount,
  lateCount,
  collectedIncome,
  totalStudents,
  paymentPercentage,
}) {
  const cards = [
    {
      title: "Present",
      value: presentCount,
      color: "#198754",
      icon: <FaCheckCircle size={30} />,
    },
    {
      title: "Absent",
      value: absentCount,
      color: "#dc3545",
      icon: <FaTimesCircle size={30} />,
    },
    {
      title: "Late",
      value: lateCount,
      color: "#ffc107",
      icon: <FaClock size={30} />,
    },
    {
      title: "Collected",
      value: `৳${collectedIncome}`,
      color: "#0d6efd",
      icon: <FaMoneyBillWave size={30} />,
    },
    {
      title: "Students",
      value: totalStudents,
      color: "#6f42c1",
      icon: <FaUserGraduate size={30} />,
    },
    {
      title: "Collection %",
      value: `${paymentPercentage}%`,
      color: "#20c997",
      icon: <FaChartLine size={30} />,
    },
  ];

  return (
    <div className="row mb-4">

      {cards.map((card, index) => (

        <div
          className="col-lg-2 col-md-4 col-6 mb-3"
          key={index}
        >

          <div
            className="card shadow border-0 h-100"
            style={{
              borderRadius: 20,
              transition: ".3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >

            <div className="card-body text-center">

              <div
                style={{
                  color: card.color,
                  marginBottom: 12,
                }}
              >
                {card.icon}
              </div>

              <h3>{card.value}</h3>

              <small className="text-muted">
                {card.title}
              </small>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default TodaySummary;