import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function AddStudent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class_name: "",
    subject: "",
    monthly_fee: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("students/", formData);
      alert("Student Added Successfully 🚀");
      navigate("/students");
    } catch (error) {
      console.log(JSON.stringify(error.response?.data, null, 2));
      alert("Something went wrong!");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginTop: "8px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    outline: "none",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "30px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          color: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          🎓 Add New Student
        </h2>

        {[
          { name: "name", placeholder: "Student Name" },
          { name: "phone", placeholder: "Phone" },
          { name: "class_name", placeholder: "Class" },
          { name: "subject", placeholder: "Subject" },
          { name: "monthly_fee", placeholder: "Monthly Fee", type: "number" },
        ].map((field, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "13px", opacity: 0.8 }}>
              {field.placeholder}
            </label>
            <input
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) =>
                (e.target.style.border = "1px solid #38bdf8")
              }
              onBlur={(e) =>
                (e.target.style.border = "1px solid rgba(255,255,255,0.2)")
              }
            />
          </div>
        ))}

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontSize: "13px", opacity: 0.8 }}>
            Address
          </label>
          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            style={{ ...inputStyle, height: "80px", resize: "none" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(90deg, #38bdf8, #6366f1)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.transform = "scale(1.03)")
          }
          onMouseOut={(e) =>
            (e.target.style.transform = "scale(1)")
          }
        >
          Save Student ✨
        </button>
      </form>
    </div>
  );
}

export default AddStudent;