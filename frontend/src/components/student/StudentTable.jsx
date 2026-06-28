export default function StudentTable({

    students,

    onEdit,

    onDelete,

}) {

    return (

        <div className="table-responsive">

            <table className="table table-hover">

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Phone</th>

                        <th>Class</th>

                        <th>Subject</th>

                        <th>Fee</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>
    {students.map((student) => (
        <tr key={student.id}>

            <td>{student.name}</td>

            <td>{student.phone}</td>

            <td>{student.class_name}</td>

            <td>{student.subject}</td>

            <td>৳ {student.monthly_fee}</td>

            <td>

                <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit(student)}
                >
                    Edit
                </button>

                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(student)}
                >
                    Delete
                </button>

            </td>

        </tr>
    ))}
</tbody>
            </table>

        </div>

    );

}