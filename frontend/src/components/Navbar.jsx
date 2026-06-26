import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaGraduationCap,
  FaSignInAlt,
  FaUserPlus,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const token = localStorage.getItem("access");

  useEffect(() => {

    if (!token) return;

    axios.get(
      "http://127.0.0.1:8000/api/accounts/profile/",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => {
      console.log("Profile Error:", error.response?.data);
    });

  }, [token]);

  const handleLogout = () => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    navigate("/");

  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-lg"
        style={{
          background: "linear-gradient(90deg,#0f172a,#1e3a8a,#2563eb)",
          padding: "14px 0",
        }}
      >
        <div className="container">

          {/* Brand */}

          <Link
            className="navbar-brand d-flex align-items-center fw-bold text-white"
            to="/"
            style={{
              fontSize: "28px",
              letterSpacing: "1px",
            }}
          >
            <FaGraduationCap
              className="me-2"
              size={32}
              color="#FFD700"
            />

            TuitionFlow
          </Link>

          {/* Mobile Toggle */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >

            {!token ? (

              <div className="d-flex gap-2">

                <Link
                  to="/login"
                  className="btn btn-outline-light rounded-pill px-4"
                >
                  <FaSignInAlt className="me-2" />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn rounded-pill px-4"
                  style={{
                    background: "#FFD700",
                    color: "#000",
                    fontWeight: "bold",
                    border: "none",
                  }}
                >
                  <FaUserPlus className="me-2" />
                  Sign Up
                </Link>

              </div>

            ) : (

              <div className="d-flex align-items-center gap-3">

                {user && (
                  <span
                    className="text-white fw-bold"
                    style={{
                      fontSize: "16px",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Welcome, {user.username} 👋
                  </span>
                )}

                

                <button
                  className="btn btn-danger rounded-pill px-4"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="me-2" />
                  Logout
                </button>

              </div>

            )}

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;