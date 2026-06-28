import {
FaCalendarCheck
}
from "react-icons/fa";

function AttendanceTable({

attendance

}){

const recent=[

...attendance

]

.sort(

(a,b)=>

new Date(b.date)-new Date(a.date)

)

.slice(0,5);

return(

<div className="table-card">

<h4>

<FaCalendarCheck className="me-2"/>

Today's Attendance

</h4>

<div className="table-responsive">

<table className="table">

<thead>

<tr>

<th>Student</th>

<th>Status</th>

<th>Date</th>

</tr>

</thead>

<tbody>

{

recent.map(item=>(

<tr key={item.id}>

<td>{item.student_name}</td>

<td>

{

item.status==="Present"

?

<span className="badge bg-success">

Present

</span>

:

item.status==="Late"

?

<span className="badge bg-warning text-dark">

Late

</span>

:

<span className="badge bg-danger">

Absent

</span>

}

</td>

<td>{item.date}</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

);

}

export default AttendanceTable;