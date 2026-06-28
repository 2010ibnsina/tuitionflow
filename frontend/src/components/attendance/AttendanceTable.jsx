export default function AttendanceTable({

    students,

    attendance,

    search,

    onMark,

    today,

}) {

    const filteredStudents = students.filter((student) =>

        student.name.toLowerCase().includes(

            search.toLowerCase()

        )

    );

    const getStatus = (studentId) => {

        const record = attendance.find(

            (item) =>

                item.student === studentId &&

                item.date === today

        );

        return record ? record.status : "";

    };

    return (

        <div className="card shadow-sm">

            <div className="card-body p-0">

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-dark">

                            <tr>

                                <th>Name</th>

                                <th>Class</th>

                                <th>Subject</th>

                                <th>Status</th>

                                <th width="320">

                                    Mark Attendance

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredStudents.map((student) => {

                                const status = getStatus(student.id);

                                return (

                                    <tr key={student.id}>

                                        <td>

                                            {student.name}

                                        </td>

                                        <td>

                                            {student.class_name}

                                        </td>

                                        <td>

                                            {student.subject}

                                        </td>

                                        <td>

                                            {status === "Present" && (

                                                <span className="badge bg-success">

                                                    Present

                                                </span>

                                            )}

                                            {status === "Absent" && (

                                                <span className="badge bg-danger">

                                                    Absent

                                                </span>

                                            )}

                                            {status === "Late" && (

                                                <span className="badge bg-warning text-dark">

                                                    Late

                                                </span>

                                            )}

                                            {status === "" && (

                                                <span className="badge bg-secondary">

                                                    Not Marked

                                                </span>

                                            )}

                                        </td>

                                        <td>

                                            <div className="d-flex flex-wrap gap-2">

                                                <button

                                                    className={`btn btn-sm ${
                                                        status === "Present"
                                                            ? "btn-success"
                                                            : "btn-outline-success"
                                                    }`}

                                                    onClick={() =>

                                                        onMark(

                                                            student.id,

                                                            "Present"

                                                        )

                                                    }

                                                >

                                                    Present

                                                </button>

                                                <button

                                                    className={`btn btn-sm ${
                                                        status === "Absent"
                                                            ? "btn-danger"
                                                            : "btn-outline-danger"
                                                    }`}

                                                    onClick={() =>

                                                        onMark(

                                                            student.id,

                                                            "Absent"

                                                        )

                                                    }

                                                >

                                                    Absent

                                                </button>

                                                <button

                                                    className={`btn btn-sm ${
                                                        status === "Late"
                                                            ? "btn-warning"
                                                            : "btn-outline-warning"
                                                    }`}

                                                    onClick={() =>

                                                        onMark(

                                                            student.id,

                                                            "Late"

                                                        )

                                                    }

                                                >

                                                    Late

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                );

                            })}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}
