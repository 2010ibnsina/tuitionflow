import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
  FaGraduationCap
} from "react-icons/fa";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://tuitionflow-backend.onrender.com/api/accounts/register/",
        form
      );

      alert("Registration Successful 🎉");

      navigate("/login");

    } catch (error) {

      console.log(error.response?.data);

      alert("Registration Failed");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a,#3b82f6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
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
          backdropFilter: "blur(15px)"
        }}
      >

        {/* Left Side */}

        <div
          className="col-md-6 d-none d-md-flex"
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#4f46e5)",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            padding: "40px"
          }}
        >

          <FaGraduationCap
            size={120}
            style={{
              marginBottom: "20px",
              animation:
                "float 3s ease-in-out infinite"
            }}
          />

          <h2
            style={{
              fontWeight: "bold"
            }}
          >
            TuitionFlow
          </h2>

          <p
            style={{
              textAlign: "center",
              opacity: ".9"
            }}
          >
            Manage students, payments,
            attendance and grow your tuition business.
          </p>

        </div>

        {/* Right Side */}

        <div
          className="col-md-6"
          style={{
            padding: "45px",
            color: "white"
          }}
        >

          <h2
            style={{
              fontWeight: "bold",
              marginBottom: "10px"
            }}
          >
            Create Account
          </h2>

          <p
            style={{
              opacity: ".8",
              marginBottom: "30px"
            }}
          >
            Join TuitionFlow today 🚀
          </p>

          <form onSubmit={handleSubmit}>

            {/* Username */}

            <div
              className="input-group mb-3"
            >

              <span className="input-group-text">

                <FaUser />

              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={form.username}
                onChange={(e)=>
                  setForm({
                    ...form,
                    username:e.target.value
                  })
                }
                required
              />

            </div>

            {/* Email */}

            <div
              className="input-group mb-3"
            >

              <span className="input-group-text">

                <FaEnvelope />

              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={form.email}
                onChange={(e)=>
                  setForm({
                    ...form,
                    email:e.target.value
                  })
                }
                required
              />

            </div>

            {/* Password */}

            <div
              className="input-group mb-4"
            >

              <span className="input-group-text">

                <FaLock />

              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={form.password}
                onChange={(e)=>
                  setForm({
                    ...form,
                    password:e.target.value
                  })
                }
                required
              />

            </div>

            <button
              className="btn w-100"
              style={{
                background:
                  "linear-gradient(90deg,#2563eb,#4f46e5)",
                color: "white",
                padding: "12px",
                borderRadius: "12px",
                fontWeight: "bold",
                transition: ".3s"
              }}
              onMouseEnter={(e)=>{
                e.target.style.transform="scale(1.03)";
              }}
              onMouseLeave={(e)=>{
                e.target.style.transform="scale(1)";
              }}
            >

              <FaUserPlus className="me-2"/>

              Register

            </button>

          </form>

          <div
            className="text-center mt-4"
          >

            Already have an account?

            <Link
              to="/login"
              style={{
                color:"#60a5fa",
                textDecoration:"none",
                marginLeft:"8px",
                fontWeight:"bold"
              }}
            >

              Login

            </Link>

          </div>

        </div>

      </div>

      <style>{`

      @keyframes float{

      0%{transform:translateY(0px);}

      50%{transform:translateY(-15px);}

      100%{transform:translateY(0px);}

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

export default Register;