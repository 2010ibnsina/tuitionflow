import { useEffect, useState } from "react";

import {
  FaBell,
  FaPlus,
  FaMoneyBillWave,
  FaClipboardCheck,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function DashboardHeader() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {

      setTime(new Date());

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const hour = time.getHours();

  let greeting = "Good Evening";

  if (hour < 12)
    greeting = "Good Morning";

  else if (hour < 18)
    greeting = "Good Afternoon";

  return (

    <div
      className="card border-0 shadow-lg mb-4"
      style={{
        background:
          "linear-gradient(135deg,#1d4ed8,#3b82f6,#60a5fa)",
        borderRadius: "24px",
        color: "white",
      }}
    >

      <div className="card-body">

        <div className="row align-items-center">

          {/* Left */}

          <div className="col-lg-8">

            <h2
              style={{
                fontWeight: 700,
              }}
            >

              👋 {greeting}

            </h2>

            <h5
              style={{
                opacity: .95,
              }}
            >

              Welcome back to

              <strong>

                {" "}TuitionFlow

              </strong>

            </h5>

            <p
              style={{
                opacity: .85,
              }}
            >

              Manage Students • Payments • Attendance

            </p>

          </div>

          {/* Right */}

          <div
            className="col-lg-4 text-lg-end mt-3 mt-lg-0"
          >

            <h4>

              {time.toLocaleDateString()}

            </h4>

            <h2>

              {time.toLocaleTimeString()}

            </h2>

          </div>

        </div>

        <hr
          style={{
            opacity: .3,
          }}
        />

        {/* Quick Actions */}

        <div
          className="d-flex flex-wrap gap-3"
        >

          <Link
            to="/add"
            className="btn btn-light rounded-pill"
          >

            <FaPlus className="me-2" />

            Add Student

          </Link>

          <Link
            to="/payments"
            className="btn btn-warning rounded-pill"
          >

            <FaMoneyBillWave className="me-2" />

            Payment

          </Link>

          <Link
            to="/attendance"
            className="btn btn-success rounded-pill"
          >

            <FaClipboardCheck className="me-2" />

            Attendance

          </Link>

          <button
            className="btn btn-dark rounded-circle"
          >

            <FaBell />

          </button>

        </div>

      </div>

    </div>

  );

}

export default DashboardHeader;