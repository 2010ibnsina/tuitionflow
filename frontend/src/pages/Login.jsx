import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaGraduationCap,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await axios.post(
          "https://tuitionflow-backend.onrender.com/api/token/",
          {
            username,
            password,
          }
        );

      localStorage.setItem(
        "access",
        response.data.access
      );

      localStorage.setItem(
        "refresh",
        response.data.refresh
      );

      alert("Welcome Back 🎉");

      navigate("/dashboard");

    } catch (error) {

      console.log(error.response?.data);

      alert("Invalid Username or Password");

    }

    setLoading(false);
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#1e3a8a,#2563eb)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >

      <div
        className="row shadow-lg"
        style={{
          maxWidth: "1000px",
          width: "100%",
          borderRadius: "25px",
          overflow: "hidden",
          background: "rgba(255,255,255,.08)",
          backdropFilter: "blur(15px)",
        }}
      >

        {/* LEFT */}

        <div
          className="col-md-6 d-none d-md-flex"
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#4f46e5)",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            padding: "40px",
          }}
        >

          <FaGraduationCap
            size={120}
            style={{
              marginBottom: "25px",
              animation:
                "float 3s ease-in-out infinite",
            }}
          />

          <h2
            style={{
              fontWeight: "bold",
            }}
          >
            Welcome Back
          </h2>

          <p
            style={{
              textAlign: "center",
              opacity: ".9",
              marginTop: "15px",
            }}
          >
            Login to continue managing your
            students, payments and tuition
            business.
          </p>

        </div>

        {/* RIGHT */}

        <div
          className="col-md-6"
          style={{
            padding: "45px",
            color: "white",
          }}
        >

          <h2
            style={{
              fontWeight: "bold",
            }}
          >
            Login
          </h2>

          <p
            style={{
              opacity: ".8",
              marginBottom: "30px",
            }}
          >
            Sign in to TuitionFlow 🚀
          </p>

          <form onSubmit={handleLogin}>

            {/* Username */}

            <div className="input-group mb-3">

              <span className="input-group-text">

                <FaUser />

              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                required
              />

            </div>

            {/* Password */}

            <div className="input-group mb-4">

              <span className="input-group-text">

                <FaLock />

              </span>

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="btn btn-dark"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >

                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}

              </button>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-100"
              style={{
                background:
                  "linear-gradient(90deg,#2563eb,#4f46e5)",
                color: "white",
                borderRadius: "12px",
                padding: "12px",
                fontWeight: "bold",
                transition: ".3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform =
                  "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform =
                  "scale(1)";
              }}
            >

              {loading ? (

                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                  ></span>

                  Logging in...
                </>

              ) : (

                <>
                  <FaSignInAlt className="me-2" />

                  Login
                </>

              )}

            </button>

          </form>

          <div
            className="text-center mt-4"
          >

            Don't have an account?

            <Link
              to="/register"
              style={{
                color: "#60a5fa",
                textDecoration: "none",
                marginLeft: "8px",
                fontWeight: "bold",
              }}
            >

              Register

            </Link>

          </div>

        </div>

      </div>

      <style>{`

      @keyframes float{

      0%{
      transform:translateY(0px);
      }

      50%{
      transform:translateY(-15px);
      }

      100%{
      transform:translateY(0px);
      }

      }

      .form-control{

      height:52px;

      }

      .form-control:focus{

      box-shadow:0 0 15px #3b82f6;

      border-color:#3b82f6;

      }

      .input-group-text{

      background:#1e293b;

      color:white;

      border:none;

      }

      `}</style>

    </div>

  );
}

export default Login;