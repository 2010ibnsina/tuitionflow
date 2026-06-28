
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import "bootstrap-icons/font/bootstrap-icons.css";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
const getStudents = async () => {
  try {
    const response = await api.get("students/");

    console.log("Students Response:", response.data);
    console.log("Is Array:", Array.isArray(response.data));

    setStudents(response.data);

  } catch (error) {
    console.log(error);
  }
};  }, []);

  const getStudents = async () => {
    try {
      const response = await api.get("students/");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    await api.delete(`students/${id}/`);
const getStudents = async () => {
  try {
    const response = await api.get("students/");

    console.log("Students Response:", response.data);
    console.log("Is Array:", Array.isArray(response.data));

    setStudents(response.data);

  } catch (error) {
    console.log(error);
  }
};  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalIncome = students.reduce(
    (sum, student) => sum + Number(student.monthly_fee),
    0
  );

  return (
    <div
      className="container-fluid py-4"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #eef2ff, #f8fbff)",
      }}
    >
      {/* Header */}
      <div
        className="text-white rounded-4 shadow-lg p-5 mb-4"
        style={{
          background:
            "linear-gradient(135deg,#0d6efd,#4f46e5)",
        }}
      >
        <h1 className="fw-bold mb-2">
          <i className="bi bi-mortarboard-fill me-2"></i>
          TuitionFlow Dashboard
        </h1>

        <p className="mb-0 fs-5">
          Manage all your tuition students in one place.
        </p>
      </div>

      {/* Statistics */}
      <div className="row mb-4">

        <div className="col-md-6 mb-3">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">
              <i
                className="bi bi-people-fill text-primary"
                style={{ fontSize: "45px" }}
              ></i>

              <h3 className="mt-3">
                {students.length}
              </h3>

              <p className="text-muted mb-0">
                Total Students
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">

              <i
                className="bi bi-cash-stack text-success"
                style={{ fontSize: "45px" }}
              ></i>

              <h3 className="mt-3">
                ৳ {totalIncome}
              </h3>

              <p className="text-muted mb-0">
                Monthly Income
              </p>

            </div>
          </div>
        </div>

      </div>

      {/* Search & Add */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">

        <div
          className="input-group"
          style={{ maxWidth: "400px" }}
        >
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search Student..."
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <Link to="/add">
          <button className="btn btn-primary btn-lg shadow">
            <i className="bi bi-plus-circle me-2"></i>
            Add Student
          </button>
        </Link>

      </div>

      {/* Student Cards */}
      <div className="row">

        {filteredStudents.length === 0 ? (

          <div className="text-center mt-5">

            <i
              className="bi bi-emoji-frown"
              style={{
                fontSize: "70px",
                color: "#6c757d",
              }}
            ></i>

            <h3 className="mt-3">
              No Student Found
            </h3>

            <p className="text-muted">
              Add your first student to start
              managing tuition.
            </p>

          </div>

        ) : (

          filteredStudents.map((student) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={student.id}
            >
              <div
                className="card border-0 shadow h-100"
                style={{
                  transition: "0.3s",
                  borderRadius: "20px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(0px)")
                }
              >
                <div className="card-body">

                  <div className="text-center mb-3">

                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg,#0d6efd,#6610f2)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "auto",
                        fontSize: "30px",
                        fontWeight: "bold",
                      }}
                    >
                      {student.name.charAt(0).toUpperCase()}
                    </div>

                    <h4 className="mt-3">
                      {student.name}
                    </h4>

                    <span className="badge bg-primary">
                      {student.subject}
                    </span>

                  </div>

                  <hr />

                  <p>
                    <i className="bi bi-telephone-fill text-success me-2"></i>

                    {student.phone || "No phone"}
                  </p>

                  <p>

                    <i className="bi bi-cash text-warning me-2"></i>

                    <strong>
                      ৳ {student.monthly_fee}
                    </strong>

                  </p>

                  <div className="d-grid gap-2">

                    <Link
                      to={`/edit/${student.id}`}
                    >
                      <button className="btn btn-warning w-100">
                        <i className="bi bi-pencil-square me-2"></i>

                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        deleteStudent(student.id)
                      }
                    >
                      <i className="bi bi-trash me-2"></i>

                      Delete
                    </button>

                  </div>

                </div>
              </div>
            </div>

          ))

        )}

      </div>
    </div>
  );
}

export default StudentList;

