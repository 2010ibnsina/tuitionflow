import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaUserPlus,
  FaMoneyBillWave,
  FaChalkboardTeacher,
  FaArrowRight,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import api from "../api/axios";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("accounts/profile/")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const menuStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 18px",
    borderRadius: "12px",
    color: "white",
    textDecoration: "none",
    marginBottom: "12px",
    fontSize: "17px",
    fontWeight: "500",
    background: "rgba(255,255,255,0.08)",
    transition: "0.3s",
  };

  return (
    <div
  style={{
    position:
      window.innerWidth < 768
        ? "fixed"
        : "fixed",

    left:
      window.innerWidth < 768
        ? sidebarOpen
          ? "0"
          : "-280px"
        : "0",

    top: 0,

    width: "260px",

    height: "100vh",

    zIndex: 999,

    transition: ".3s",

    background:
      "linear-gradient(180deg,#1e3c72,#2a5298,#4facfe)",

    color: "white",

    padding: "25px 18px",

    display: "flex",

    flexDirection: "column",

    justifyContent: "space-between",

    boxShadow:
      "5px 0 20px rgba(0,0,0,.3)",

    overflowY: "auto",
  }}
>
      {/* Logo */}
      <div>
       <div
  style={{
    textAlign: "center",
    marginBottom: "35px",
  }}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
    alt="Profile"
    style={{
      width: "85px",
      height: "85px",
      borderRadius: "50%",
      background: "white",
      padding: "8px",
      marginBottom: "15px",
    }}
  />

  {user && (
    <>
      <h4
        style={{
          margin: "0",
          color: "white",
          fontWeight: "bold",
        }}
      >
        👋 {user.username}
      </h4>

      <p
        style={{
          marginTop: "6px",
          color: "#dbeafe",
          fontSize: "13px",
        }}
      >
        Welcome back
      </p>
    </>
  )}
</div>

        {/* Navigation */}

        <Link
  to="/dashboard"
  style={menuStyle}
  onClick={() => setSidebarOpen(false)}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.20)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
  }
>
  <FaHome size={20} />
  Dashboard
</Link>

       <Link
  to="/students"
  style={menuStyle}
  onClick={() => setSidebarOpen(false)}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.20)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
  }
>
  <FaUserGraduate size={20} />
  Students
</Link>

        <Link
  to="/add"
  style={menuStyle}
  onClick={() => setSidebarOpen(false)}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.20)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
  }
>
  <FaUserPlus size={20} />
  Add Student
</Link>

       <Link
  to="/payments"
  style={menuStyle}
  onClick={() => setSidebarOpen(false)}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.20)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
  }
>
  <FaMoneyBillWave size={20} />
  Payments
</Link>
      </div>

      {/* Bottom Section */}

      <div>
        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            borderRadius: "18px",
            padding: "18px",
            textAlign: "center",
            marginBottom: "18px",
          }}
        >
          <FaChalkboardTeacher
            size={38}
            style={{ marginBottom: "10px" }}
          />

          <h5 style={{ marginBottom: "10px" }}>
            Keep Growing 🚀
          </h5>

          <p
            style={{
              fontSize: "13px",
              lineHeight: "20px",
              opacity: 0.9,
            }}
          >
            Manage your students, monitor payments,
            and grow your tuition business with ease.
          </p>

          
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            opacity: 0.8,
          }}
        >
          © 2026 TuitionFlow
        </p>
      </div>
    </div>
  );
}

export default Sidebar;