import {
  FaChartLine,
  FaUserGraduate,
  FaMoneyBillWave,
  FaClipboardCheck,
} from "react-icons/fa";

function QuickAnalytics({
  totalStudents,
  presentCount,
  expectedIncome,
  collectedIncome,
  dueAmount,
}) {

  const attendanceRate =
    totalStudents > 0
      ? ((presentCount / totalStudents) * 100).toFixed(0)
      : 0;

  const collectionRate =
    expectedIncome > 0
      ? ((collectedIncome / expectedIncome) * 100).toFixed(0)
      : 0;

  const dueRate =
    expectedIncome > 0
      ? ((dueAmount / expectedIncome) * 100).toFixed(0)
      : 0;

  const studentGrowth = 100;

  const analytics = [
    {
      title: "Attendance Rate",
      value: attendanceRate,
      color: "#198754",
      icon: <FaClipboardCheck size={22} />,
    },

    {
      title: "Collection Rate",
      value: collectionRate,
      color: "#0d6efd",
      icon: <FaMoneyBillWave size={22} />,
    },

    {
      title: "Student Growth",
      value: studentGrowth,
      color: "#6f42c1",
      icon: <FaUserGraduate size={22} />,
    },

    {
      title: "Due Percentage",
      value: dueRate,
      color: "#dc3545",
      icon: <FaChartLine size={22} />,
    },
  ];

  return (

    <div className="card shadow-lg border-0 rounded-4 mb-4">

      <div className="card-body">

        <h4 className="mb-4">

          📈 Quick Analytics

        </h4>

        {analytics.map((item, index) => (

          <div
            className="mb-4"
            key={index}
          >

            <div className="d-flex justify-content-between">

              <span>

                {item.icon}

                {" "}

                {item.title}

              </span>

              <strong>

                {item.value}%

              </strong>

            </div>

            <div
              className="progress mt-2"
              style={{
                height: 10,
                borderRadius: 50,
              }}
            >

              <div

                className="progress-bar"

                style={{
                  width: `${item.value}%`,
                  background: item.color,
                }}

              />

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default QuickAnalytics;