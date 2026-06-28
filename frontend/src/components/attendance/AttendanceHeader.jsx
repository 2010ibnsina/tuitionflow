export default function AttendanceHeader() {

    return (

        <div className="d-flex justify-content-between align-items-center mb-4">

            <div>

                <h2 className="fw-bold">

                    Attendance Management

                </h2>

                <p className="text-muted mb-0">

                    Mark and monitor daily attendance

                </p>

            </div>

            <div>

                <span className="badge bg-primary fs-6">

                    {new Date().toLocaleDateString()}

                </span>

            </div>

        </div>

    );

}
