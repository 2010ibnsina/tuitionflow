import { useEffect, useState } from "react";
import api from "../api/axios";

function Payments() {
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);

  const [formData, setFormData] = useState({
    student: "",
    amount: "",
    month: "",
    year: "",
    payment_date: ""
  });

  useEffect(() => {
    getStudents();
    getPayments();
  }, []);

  const getStudents = async () => {
    const response = await api.get("students/");
    setStudents(response.data);
  };

  const getPayments = async () => {
    const response = await api.get("payments/");
    setPayments(response.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  const response = await api.post("payments/", formData);
  console.log(response.data);
} catch (error) {
  console.log(error.response.data);
}

    setFormData({
      student: "",
      amount: "",
      month: "",
      year: "",
      payment_date: ""
    });

    getPayments();
  };

  return (
    <div className="container py-4">

      {/* HEADER */}
      <div className="mb-4 text-center">
        <h2 className="fw-bold text-primary">💰 Payment Dashboard</h2>
        <p className="text-muted">
          Manage student payments efficiently and track history
        </p>
      </div>

      <div className="row g-4">

        {/* FORM SECTION */}
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4 p-4">

            <h5 className="mb-3">➕ Add New Payment</h5>

            <form onSubmit={handleSubmit}>

              <select
                className="form-select mb-3"
                name="student"
                value={formData.student}
                onChange={handleChange}
              >
                <option value="">Select Student</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
              </select>

              <input
                className="form-control mb-3"
                name="amount"
                placeholder="Enter amount (৳)"
                value={formData.amount}
                onChange={handleChange}
              />

              <div className="row">
                <div className="col">
                  <input
                    className="form-control mb-3"
                    name="month"
                    placeholder="Month"
                    value={formData.month}
                    onChange={handleChange}
                  />
                </div>

                <div className="col">
                  <input
                    className="form-control mb-3"
                    name="year"
                    placeholder="Year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <input
                type="date"
                className="form-control mb-3"
                name="payment_date"
                value={formData.payment_date}
                onChange={handleChange}
              />

              <button className="btn btn-primary w-100 fw-semibold">
                Save Payment
              </button>

            </form>
          </div>
        </div>

        {/* HISTORY SECTION */}
        <div className="col-md-7">
          <div className="card shadow-lg border-0 rounded-4 p-4">

            <h5 className="mb-3">📜 Payment History</h5>

            <div style={{ maxHeight: "500px", overflowY: "auto" }}>

              {payments.length === 0 ? (
                <p className="text-muted">No payments found.</p>
              ) : (
                payments.map((payment) => (
                  <div
                    key={payment.id}
                    className="border rounded-3 p-3 mb-3 bg-light"
                  >
                    <div className="d-flex justify-content-between">
                      <strong>Student ID: {payment.student}</strong>
                      <span className="badge bg-success">
                        ৳{payment.amount}
                      </span>
                    </div>

                    <small className="text-muted">
                      {payment.month} / {payment.year}
                    </small>

                    <div className="text-end text-muted small">
                      {payment.payment_date}
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Payments;