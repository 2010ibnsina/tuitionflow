import { FaUserGraduate } from "react-icons/fa";

function RecentStudents({ students }) {
  return (
    <div
      className="card shadow-lg border-0 rounded-4 h-100"
      style={{
        background: "#131c31",
        color: "white",
      }}
    >
      <div className="card-body">

        <h4 className="mb-4">
          <FaUserGraduate className="me-2 text-info" />
          Recent Students
        </h4>

        <div className="table-responsive">

          <table className="table table-dark table-hover align-middle">

            <thead>

              <tr>

                <th>Name</th>

                <th>Class</th>

                <th>Monthly Fee</th>

              </tr>

            </thead>

            <tbody>

              {students.length > 0 ? (

                students.slice(0, 5).map((student) => (

                  <tr key={student.id}>

                    <td>

                      <strong>{student.name}</strong>

                    </td>

                    <td>

                      <span className="badge bg-primary">

                        {student.class_name}

                      </span>

                    </td>

                    <td>

                      <span className="badge bg-success">

                        ৳{student.monthly_fee}

                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="3"
                    className="text-center text-secondary"
                  >

                    No students found.

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default RecentStudents;