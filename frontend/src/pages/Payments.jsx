import { useEffect, useState } from "react";
import api from "../api/axios";
import { generateReceipt } from "../utils/receiptGenerator";
import { FaFilePdf } from "react-icons/fa";

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
const getStudents = async () => {
  try {
    const response = await api.get("students/");

    console.log("Students Response:", response.data);
    console.log("Is Array:", Array.isArray(response.data));

    setStudents(response.data);

  } catch (error) {
    console.log(error);
  }
};    getPayments();
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

    console.log("Payment Saved:", response.data);

    setFormData({
      student: "",
      amount: "",
      month: "",
      year: "",
      payment_date: "",
    });

    getPayments();

    alert("Payment Added Successfully!");

  } catch (error) {

    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);

    alert(JSON.stringify(error.response?.data));
  }
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
  className="border rounded-4 p-4 mb-3 bg-light shadow-sm"
>

  <div className="d-flex justify-content-between align-items-center">

    <div>

      <h6 className="fw-bold mb-1">
        👨 {payment.student_name || `Student ID: ${payment.student}`}
      </h6>

      <small className="text-muted">
        Month: {payment.month} / {payment.year}
      </small>

      <br />

      <small className="text-muted">
        Date: {payment.payment_date}
      </small>

    </div>

    <div className="text-end">

      <h5 className="text-success">
        ৳{payment.amount}
      </h5>

      <button
        className="btn btn-danger btn-sm mt-2"
        onClick={() => generateReceipt(payment)}
      >
        <FaFilePdf className="me-2" />
        Download Receipt
      </button>

    </div>

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