import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AttendanceCalendar({

    selectedDate,

    setSelectedDate,

}) {

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-body">

                <h5 className="mb-3">

                    Attendance Calendar

                </h5>

                <Calendar

                    value={selectedDate}

                    onChange={setSelectedDate}

                />

            </div>

        </div>

    );

}
