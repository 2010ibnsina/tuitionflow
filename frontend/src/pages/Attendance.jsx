import { useEffect, useState } from "react";
import api from "../api/axios";

import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaPlaneDeparture,
  FaSearch,
  FaCalendarAlt
} from "react-icons/fa";

function Attendance() {

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const today =
    new Date().toISOString().split("T")[0];

  useEffect(() => {

    loadStudents();

  }, []);

  const loadStudents = async () => {

    try {

      const response =
        await api.get("students/");

      setStudents(response.data);

    }

    catch(error){

      console.log(error);

    }

  };

  const markAttendance = async (

    student,

    status

  ) => {

    try{

      await api.post(

        "attendance/",

        {

          student: student.id,

          date: today,

          status: status

        }

      );

      alert(

        `${student.name} marked ${status}`

      );

    }

    catch(error){

      alert("Already marked today!");

    }

  };

  const filteredStudents =
    students.filter(student=>

      student.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )

    );

  return (

<div
className="container-fluid py-4"
style={{
background:"#eef4ff",
minHeight:"100vh"
}}
>

<div
className="card shadow-lg border-0 p-4 mb-4"
style={{
borderRadius:"20px"
}}
>

<h2
className="fw-bold"
>

📚 Attendance Management

</h2>

<p className="text-muted">

Take today's attendance quickly.

</p>

<div
className="d-flex flex-wrap justify-content-between align-items-center mt-3"
>

<div
className="input-group"
style={{
maxWidth:"350px"
}}
>

<span className="input-group-text">

<FaSearch/>

</span>

<input

className="form-control"

placeholder="Search Student..."

onChange={(e)=>

setSearch(

e.target.value

)

}

/>

</div>

<div
className="badge bg-primary fs-6 p-3"
>

<FaCalendarAlt/>

{" "}

{today}

</div>

</div>

</div>

<div className="row">

{

filteredStudents.map(student=>(

<div

className="col-lg-4 col-md-6 mb-4"

key={student.id}

>

<div

className="card border-0 shadow h-100"

style={{

borderRadius:"20px",

transition:".3s"

}}

onMouseEnter={(e)=>

e.currentTarget.style.transform="translateY(-8px)"

}

onMouseLeave={(e)=>

e.currentTarget.style.transform="translateY(0px)"

}

>

<div className="card-body">

<div className="text-center">

<div

style={{

width:"70px",

height:"70px",

borderRadius:"50%",

background:"linear-gradient(135deg,#2563eb,#4f46e5)",

display:"flex",

justifyContent:"center",

alignItems:"center",

color:"white",

fontSize:"28px",

margin:"auto",

fontWeight:"bold"

}}

>

{

student.name.charAt(0)

}

</div>

<h4 className="mt-3">

{

student.name

}

</h4>

<span className="badge bg-info">

{

student.subject

}

</span>

</div>

<hr/>

<div className="d-grid gap-2">

<button

className="btn btn-success"

onClick={()=>

markAttendance(

student,

"Present"

)

}

>

<FaCheckCircle/>

{" "}

Present

</button>

<button

className="btn btn-warning"

onClick={()=>

markAttendance(

student,

"Late"

)

}

>

<FaClock/>

{" "}

Late

</button>

<button

className="btn btn-danger"

onClick={()=>

markAttendance(

student,

"Absent"

)

}

>

<FaTimesCircle/>

{" "}

Absent

</button>

<button

className="btn btn-secondary"

onClick={()=>

markAttendance(

student,

"Leave"

)

}

>

<FaPlaneDeparture/>

{" "}

Leave

</button>

</div>

</div>

</div>

</div>

))

}

</div>

</div>

  );

}

export default Attendance;