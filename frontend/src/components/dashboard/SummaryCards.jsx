import {
  FaUserGraduate,
  FaMoneyBillWave,
  FaWallet,
  FaExclamationTriangle,
  FaClipboardCheck,
} from "react-icons/fa";

function SummaryCards({
  totalStudents,
  expectedIncome,
  collectedIncome,
  dueAmount,
  presentCount,
}) {
  const cardStyle = (background) => ({
    background,
    color: "white",
    border: "none",
    borderRadius: "20px",
    transition: "0.35s",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0,0,0,.25)",
  });

  const iconStyle = {
    fontSize: "42px",
    opacity: 0.9,
  };

  return (
    <div className="row g-4 mb-4">

      {/* Total Students */}

      <div className="col-lg-2 col-md-4 col-6">
        <div
          className="card h-100"
          style={cardStyle(
            "linear-gradient(135deg,#2563eb,#1d4ed8)"
          )}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform =
              "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform =
              "translateY(0)")
          }
        >
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>

              <small>Total Students</small>

              <h2 className="fw-bold mt-2">
                {totalStudents}
              </h2>

            </div>

            <FaUserGraduate style={iconStyle} />

          </div>
        </div>
      </div>

      {/* Expected */}

      <div className="col-lg-2 col-md-4 col-6">
        <div
          className="card h-100"
          style={cardStyle(
            "linear-gradient(135deg,#16a34a,#22c55e)"
          )}
          onMouseEnter={(e)=>
            e.currentTarget.style.transform="translateY(-8px)"
          }
          onMouseLeave={(e)=>
            e.currentTarget.style.transform="translateY(0)"
          }
        >
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>

              <small>Expected</small>

              <h2 className="fw-bold mt-2">
                ৳{expectedIncome}
              </h2>

            </div>

            <FaWallet style={iconStyle}/>

          </div>
        </div>
      </div>

      {/* Collected */}

      <div className="col-lg-2 col-md-4 col-6">
        <div
          className="card h-100"
          style={cardStyle(
            "linear-gradient(135deg,#7c3aed,#9333ea)"
          )}
          onMouseEnter={(e)=>
            e.currentTarget.style.transform="translateY(-8px)"
          }
          onMouseLeave={(e)=>
            e.currentTarget.style.transform="translateY(0)"
          }
        >
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>

              <small>Collected</small>

              <h2 className="fw-bold mt-2">
                ৳{collectedIncome}
              </h2>

            </div>

            <FaMoneyBillWave style={iconStyle}/>

          </div>
        </div>
      </div>

      {/* Due */}

      <div className="col-lg-2 col-md-4 col-6">
        <div
          className="card h-100"
          style={cardStyle(
            "linear-gradient(135deg,#dc2626,#ef4444)"
          )}
          onMouseEnter={(e)=>
            e.currentTarget.style.transform="translateY(-8px)"
          }
          onMouseLeave={(e)=>
            e.currentTarget.style.transform="translateY(0)"
          }
        >
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>

              <small>Due</small>

              <h2 className="fw-bold mt-2">
                ৳{dueAmount}
              </h2>

            </div>

            <FaExclamationTriangle style={iconStyle}/>

          </div>
        </div>
      </div>

      {/* Attendance */}

      <div className="col-lg-2 col-md-4 col-6">
        <div
          className="card h-100"
          style={cardStyle(
            "linear-gradient(135deg,#0891b2,#06b6d4)"
          )}
          onMouseEnter={(e)=>
            e.currentTarget.style.transform="translateY(-8px)"
          }
          onMouseLeave={(e)=>
            e.currentTarget.style.transform="translateY(0)"
          }
        >
          <div className="card-body d-flex justify-content-between align-items-center">

            <div>

              <small>Present Today</small>

              <h2 className="fw-bold mt-2">
                {presentCount}
              </h2>

            </div>

            <FaClipboardCheck style={iconStyle}/>

          </div>
        </div>
      </div>

    </div>
  );
}

export default SummaryCards;