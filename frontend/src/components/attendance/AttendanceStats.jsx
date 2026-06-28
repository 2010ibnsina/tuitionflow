export default function AttendanceStats({

    attendance,

    students,

}) {

    const today = new Date()

        .toISOString()

        .split("T")[0];

    const todayAttendance = attendance.filter(

        item => item.date === today

    );

    const present = todayAttendance.filter(

        item => item.status === "Present"

    ).length;

    const absent = todayAttendance.filter(

        item => item.status === "Absent"

    ).length;

    const late = todayAttendance.filter(

        item => item.status === "Late"

    ).length;

    return (

        <div className="row mb-4">

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm">

                    <div className="card-body">

                        <h6>Total Students</h6>

                        <h2>

                            {students.length}

                        </h2>

                    </div>

                </div>

            </div>

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm border-success">

                    <div className="card-body">

                        <h6>Present</h6>

                        <h2 className="text-success">

                            {present}

                        </h2>

                    </div>

                </div>

            </div>

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm border-danger">

                    <div className="card-body">

                        <h6>Absent</h6>

                        <h2 className="text-danger">

                            {absent}

                        </h2>

                    </div>

                </div>

            </div>

            <div className="col-md-3 mb-3">

                <div className="card shadow-sm border-warning">

                    <div className="card-body">

                        <h6>Late</h6>

                        <h2 className="text-warning">

                            {late}

                        </h2>

                    </div>

                </div>

            </div>

        </div>

    );

}
