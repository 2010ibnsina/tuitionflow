import {

    Chart as ChartJS,

    ArcElement,

    Tooltip,

    Legend,

    CategoryScale,

    LinearScale,

    PointElement,

    LineElement,

    BarElement,

} from "chart.js";

import {

    Pie,

    Line,

    Bar,

} from "react-chartjs-2";

ChartJS.register(

    ArcElement,

    Tooltip,

    Legend,

    CategoryScale,

    LinearScale,

    PointElement,

    LineElement,

    BarElement

);

export default function AttendanceAnalytics({

    attendance,

    students,

}) {

    const today = new Date()

        .toISOString()

        .split("T")[0];

    const todayAttendance = attendance.filter(

        a => a.date === today

    );

    const present = todayAttendance.filter(

        a => a.status === "Present"

    ).length;

    const absent = todayAttendance.filter(

        a => a.status === "Absent"

    ).length;

    const late = todayAttendance.filter(

        a => a.status === "Late"

    ).length;

    const attendanceRate =

        students.length === 0

            ? 0

            : Math.round(

                (present / students.length) * 100

            );

    const pieData = {

        labels: [

            "Present",

            "Absent",

            "Late",

        ],

        datasets: [

            {

                data: [

                    present,

                    absent,

                    late,

                ],

                backgroundColor: [

                    "#4CAF50",

                    "#F44336",

                    "#FFC107",

                ],

            },

        ],

    };

    return (

        <div className="row mb-4">

            <div className="col-lg-4 mb-4">

                <div className="card shadow-sm">

                    <div className="card-body text-center">

                        <h5>

                            Today's Attendance

                        </h5>

                        <h1 className="display-4">

                            {attendanceRate}%

                        </h1>

                        <small>

                            {present} of {students.length} students present

                        </small>

                    </div>

                </div>

            </div>

            <div className="col-lg-8">

                <div className="card shadow-sm">

                    <div className="card-body">

                        <Pie data={pieData}/>

                    </div>

                </div>

            </div>

        </div>

    );

}
