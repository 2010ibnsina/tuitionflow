import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await axios.post(
    "https://tuitionflow-backend.onrender.com/api/token/",
            {
              username,
              password
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

        alert("Login Successful");

        navigate("/dashboard");

      } catch (error) {

        console.log(error.response?.data);

        alert("Invalid Credentials");

      }
    };

  return (

    <div className="container mt-5">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          className="form-control mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          type="submit"
        >
          Login
        </button>

      </form>

    </div>

  );
}

export default Login;