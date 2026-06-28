import {

FaBell

}
from "react-icons/fa";

function ActivityCard({

students,

payments,

attendance

}){

return(

<div className="activity-card">

<h4>

<FaBell className="me-2"/>

Today's Summary

</h4>

<div className="activity-item">

👨‍🎓

Students

<span>

{students.length}

</span>

</div>

<div className="activity-item">

💰

Payments

<span>

{payments.length}

</span>

</div>

<div className="activity-item">

✅

Attendance

<span>

{attendance.length}

</span>

</div>

</div>

);

}

export default ActivityCard;