import { useEffect, useState } from "react";
import api from "../api/axios";

import AttendanceHeader from "../components/attendance/AttendanceHeader";
import AttendanceStats from "../components/attendance/AttendanceStats";
import AttendanceFilters from "../components/attendance/AttendanceFilters";
import AttendanceTable from "../components/attendance/AttendanceTable";
import AttendanceCalendar from "../components/attendance/AttendanceCalendar";
import AttendanceAnalytics
from "../components/attendance/AttendanceAnalytics";



export default function Attendance() {

    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState([]);

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [selectedDate, setSelectedDate] = useState(
        new Date()
    );

const today = selectedDate

    .toISOString()

    .split("T")[0];

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        try {

            const [studentRes, attendanceRes] = await Promise.all([
    api.get("/students/"),
    api.get("/attendance/"),
]);

console.log("Students:", studentRes.data);
console.log("Attendance:", attendanceRes.data);

setStudents(studentRes.data.results || []);
setAttendance(attendanceRes.data);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    const markAttendance = async (studentId, status) => {

        try {

            const old = attendance.find(

                (a) =>

                    a.student === studentId &&

                    a.date === today

            );

            if (old) {

                await api.put(

                    `/attendance/${old.id}/`,

                    {

                        ...old,

                        status,

                    }

                );

            } else {

                await api.post(

                    "/attendance/",

                    {

                        student: studentId,

                        date: today,

                        status,

                        remarks: "",

                    }

                );

            }

            loadData();

        } catch (err) {

            console.error(err);

        }

    };

    if (loading)

        return <h3 className="text-center mt-5">Loading...</h3>;

    return (

        <div className="container-fluid py-4">

            <AttendanceHeader />

            <AttendanceStats

                attendance={attendance}

                students={students}

            />
<AttendanceAnalytics

    attendance={attendance}

    students={students}

/>


            <AttendanceFilters

                search={search}

                setSearch={setSearch}

            />

<AttendanceCalendar

    selectedDate={selectedDate}

    setSelectedDate={setSelectedDate}

/>



            <AttendanceTable

                students={students}

                attendance={attendance}

                search={search}

                onMark={markAttendance}

                today={today}

            />

        </div>

    );

}

