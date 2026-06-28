function DueStudents({ dueStudents }) {
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
          🔴 Due Students
        </h4>

        <div className="table-responsive">

          <table className="table table-dark table-hover align-middle">

            <thead>

              <tr>

                <th>Name</th>

                <th>Fee</th>

                <th>Paid</th>

                <th>Due</th>

              </tr>

            </thead>

            <tbody>

              {dueStudents.length > 0 ? (

                dueStudents.map((student) => (

                  <tr key={student.id}>

                    <td>

                      <strong>
                        {student.name}
                      </strong>

                    </td>

                    <td>

                      <span className="badge bg-primary">

                        ৳{student.monthly_fee}

                      </span>

                    </td>

                    <td>

                      <span className="badge bg-success">

                        ৳{student.totalPaid}

                      </span>

                    </td>

                    <td>

                      <span className="badge bg-danger">

                        ৳{student.dueAmount}

                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center text-secondary"
                  >

                    🎉 No Due Students

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

export default DueStudents;