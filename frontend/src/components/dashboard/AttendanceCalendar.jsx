import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function AttendanceCalendar({ attendance = [] }) {

  const tileClassName = ({ date } = {}) => {

    if (!date) return null;

    const attendanceRecord = attendance.find((item) => {

      if (!item.date) return false;

      return (
        new Date(item.date).toDateString() ===
        date.toDateString()
      );

    });

    if (!attendanceRecord) return null;

    switch (attendanceRecord.status) {

      case "Present":
        return "present-day";

      case "Absent":
        return "absent-day";

      case "Late":
        return "late-day";

      default:
        return null;

    }

  };

  return (
    <div
      className="card shadow-lg border-0 rounded-4 mb-4"
      style={{
        background: "#131c31",
        color: "white",
      }}
    >
      <div className="card-body">

        <h4 className="mb-4">
          📅 Attendance Calendar
        </h4>

        <Calendar
          tileClassName={tileClassName}
        />

      </div>
    </div>
  );
}

export default AttendanceCalendar;