import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  // Store form data
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Handle form submission
  const handleSubmit = async (e) => {

    // Prevent page refresh
    e.preventDefault();

    try {

  const response = await axios.post(
  "https://tuitionflow-backend.onrender.com/api/accounts/register/",
  form
);

  alert("Registration Successful");

  navigate("/login");

} catch (error) {

  console.log("Status:", error.response?.status);

  console.log(
    "Data:",
    JSON.stringify(error.response?.data, null, 2)
  );

  console.log("Full Error:", error.response);

}
  };

  return (
    <div className="container mt-5">

      <div
        className="card shadow p-4"
        style={{ maxWidth: "500px", margin: "auto" }}
      >

        <h2 className="text-center mb-4">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Username */}

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value
              })
            }
            required
          />

          {/* Email */}

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
            required
          />

          {/* Password */}

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
            required
          />

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;