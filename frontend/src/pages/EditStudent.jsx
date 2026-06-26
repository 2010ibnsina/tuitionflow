import {
  useState,
  useEffect,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import api from "../api/axios";

function EditStudent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] =
    useState({
      name: "",
      phone: "",
      class_name: "",
      subject: "",
      monthly_fee: "",
      address: "",
    });

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    const response =
      await api.get(`students/${id}/`);

    setStudent(response.data);
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.put(
      `students/${id}/`,
      student
    );

    alert("Updated");

    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="phone"
          value={student.phone}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="class_name"
          value={student.class_name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="subject"
          value={student.subject}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="monthly_fee"
          value={student.monthly_fee}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="address"
          value={student.address}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditStudent;