import { useState, useEffect } from "react";
import api from "../api/axios";

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

import { Pie, Line, Bar } from "react-chartjs-2";

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

function Dashboard() {
  const [attendance, setAttendance] = useState([]);

  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
  try {

    const studentResponse =
      await api.get("students/");

    const paymentResponse =
      await api.get("payments/");

    const attendanceResponse =
      await api.get("attendance/");

    setStudents(studentResponse.data);

    setPayments(paymentResponse.data);

    setAttendance(attendanceResponse.data);

  } catch(error){
    console.log(error);
  }
};

  // ========================
  // Dashboard Calculations
  // ========================

  const totalStudents =
    students.length;

  const expectedIncome =
    students.reduce(
      (sum, student) =>
        sum +
        Number(student.monthly_fee),
      0
    );

  const collectedIncome =
    payments.reduce(
      (sum, payment) =>
        sum +
        Number(payment.amount),
      0
    );

  const dueAmount =
    expectedIncome -
    collectedIncome;
    // ========================
// Attendance Calculations
// ========================

const totalAttendance =
  attendance.length;

const presentCount =
  attendance.filter(
    item => item.status === "Present"
  ).length;

const absentCount =
  attendance.filter(
    item => item.status === "Absent"
  ).length;

const lateCount =
  attendance.filter(
    item => item.status === "Late"
  ).length;

  const attendanceChart = {

  labels: [
    "Present",
    "Absent",
    "Late"
  ],

  datasets: [
    {

      data: [
        presentCount,
        absentCount,
        lateCount
      ],

      backgroundColor: [

        "#198754",
        "#dc3545",
        "#ffc107"

      ]

    }
  ]
};



  // ========================
  // Pie Chart
  // ========================

  const pieData = {
    labels: [
      "Collected",
      "Due"
    ],

    datasets: [
      {
        data: [
          collectedIncome,
          dueAmount
        ],

        backgroundColor: [
          "#28a745",
          "#dc3545"
        ],
      },
    ],
  };

  // ========================
  // Income Line Chart
  // ========================

  const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],

    datasets: [
      {
        label:
          "Expected Income",

        data: [
          expectedIncome * 0.2,
          expectedIncome * 0.4,
          expectedIncome * 0.6,
          expectedIncome * 0.7,
          expectedIncome * 0.9,
          expectedIncome
        ],

        borderColor:
          "#0d6efd",

        tension: 0.4,
      },

      {
        label:
          "Collected Income",

        data: [
          collectedIncome * 0.2,
          collectedIncome * 0.4,
          collectedIncome * 0.6,
          collectedIncome * 0.7,
          collectedIncome * 0.9,
          collectedIncome
        ],

        borderColor:
          "#28a745",

        tension: 0.4,
      },
    ],
  };

  // ========================
  // Student Class Chart
  // ========================

  const classCount = {};

  students.forEach(student => {
    classCount[
      student.class_name
    ] =
      (classCount[
        student.class_name
      ] || 0) + 1;
  });

  const classChartData = {
    labels:
      Object.keys(classCount),

    datasets: [
      {
        label:
          "Students",

        data:
          Object.values(
            classCount
          ),

        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
        ],
      },
    ],
  };

  // Count students per subject

const subjectCount = {};

students.forEach(student => {

  subjectCount[
    student.subject
  ] =

  (
    subjectCount[
      student.subject
    ] || 0
  ) + 1;

});
const subjectData = {

  labels:
    Object.keys(
      subjectCount
    ),

  datasets: [

    {

      label:
        "Students",

      data:
        Object.values(
          subjectCount
        ),

      backgroundColor: [
        "#0d6efd",
        "#198754",
        "#ffc107",
        "#dc3545",
        "#6f42c1"
      ]

    }

  ]

};

<Bar data={subjectData} />
const monthlyCollection = [

0,0,0,0,0,0,
0,0,0,0,0,0

];

payments.forEach(payment => {

  const monthIndex =
    payment.month - 1;

  monthlyCollection[
    monthIndex
  ] += Number(
    payment.amount
  );

});
const monthlyData = {

  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],

  datasets: [

    {
      label:
        "Collection",

      data:
        monthlyCollection,

      backgroundColor:
        "#198754"
    }

  ]

};
<Bar data={monthlyData} />

const recentPayments =
[
  ...payments
]

.sort(
(a,b)=>

new Date(
  b.payment_date
)

-

new Date(
  a.payment_date
)

)

.slice(0,5);
<table className="table table-dark">

<thead>

<tr>

<th>Student</th>

<th>Amount</th>

<th>Date</th>

</tr>

</thead>

<tbody>

{
recentPayments.map(payment=>(

<tr key={payment.id}>

<td>
{payment.student_name}
</td>

<td>
৳{payment.amount}
</td>

<td>
{payment.payment_date}
</td>

</tr>

))
}

</tbody>

</table>

const dueStudents = students
  .map(student => {

    // Calculate total paid by this student

    const totalPaid = payments
      .filter(
        payment =>
          payment.student === student.id
      )
      .reduce(
        (sum, payment) =>
          sum + Number(payment.amount),
        0
      );

    // Remaining due

    const dueAmount =
      Number(student.monthly_fee) -
      totalPaid;

    return {
      ...student,
      totalPaid,
      dueAmount
    };
  })

  // Only students with due
  .filter(
    student =>
      student.dueAmount > 0
  );




<table className="table table-dark">

<thead>

<tr>

<th>Name</th>

<th>Subject</th>

<th>Fee</th>

</tr>

</thead>

<tbody>

{
dueStudents.map(student=>(

<tr key={student.id}>

<td>
{student.name}
</td>

<td>
{student.subject}
</td>

<td>
৳{student.monthly_fee}
</td>

</tr>

))
}

</tbody>

</table>
const paymentPercentage =

expectedIncome > 0

?

(
collectedIncome
/

expectedIncome

*

100

).toFixed(2)

:

0;

  return (
    <div
      className="container-fluid p-4"
      style={{
        background:
          "#0b1220",
        minHeight:
          "100vh",
        color: "white",
      }}
    >
      
       <button
        className="btn btn-danger"
        onClick={() => {

          localStorage.clear();

          window.location.href = "/login";

        }}
      >
      </button>

      {/* Top Cards */}

      <div className="row">
        <div className="row mb-4">

  <div className="col-md-12">

    <div className="card p-3">

      <h5>
        Collection Progress
      </h5>

      <div className="progress">

        <div
          className="progress-bar bg-success"
          style={{
            width: `${paymentPercentage}%`
          }}
        >
          {paymentPercentage}%
        </div>

      </div>

    </div>

  </div>

</div>

<div className="col-md-3 mb-3">

<div
className="card text-white"
style={{
background:"#20c997"
}}
>

<div className="card-body">

<h5>
Attendance
</h5>

<h2>
{presentCount}
</h2>

<p>
Present Today
</p>

</div>

</div>

</div>
<div
className="progress"
>

<div

className="
progress-bar
bg-success
"

style={{
width:
`${paymentPercentage}%`
}}

>

{paymentPercentage}%

</div>

</div>


        <div className="col-md-3 mb-3">
          <div
            className="card text-white"
            style={{
              background:
                "#0d6efd",
            }}
          >
            <div className="card-body">
              <h5>
                Total Students
              </h5>

              <h2>
                {
                  totalStudents
                }
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div
            className="card text-white"
            style={{
              background:
                "#198754",
            }}
          >
            <div className="card-body">
              <h5>
                Expected Income
              </h5>

              <h2>
                ৳
                {
                  expectedIncome
                }
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div
            className="card text-white"
            style={{
              background:
                "#6f42c1",
            }}
          >
            <div className="card-body">
              <h5>
                Collected Income
              </h5>

              <h2>
                ৳
                {
                  collectedIncome
                }
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div
            className="card text-white"
            style={{
              background:
                "#dc3545",
            }}
          >
            <div className="card-body">
              <h5>
                Due Amount
              </h5>

              <h2>
                ৳
                {
                  dueAmount
                }
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Charts */}

      <div className="row mt-4">

        <div className="col-md-8">
          <div
            className="card p-3 text-white"
            style={{
              background:
                "#131c31",
            }}
          >
            <h4>
              Income Trend
            </h4>

            <Line
              data={
                lineData
              }
            />
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card p-3 text-white"
            style={{
              background:
                "#131c31",
            }}
          >
            <h4>
              Payment Status
            </h4>

            <Pie
              data={
                pieData
              }
            />
          </div>
        </div>

      </div>
      <div className="col-md-4">

<div
className="card p-3 text-white"
style={{
background:"#131c31"
}}
>

<h4>
Attendance
</h4>

<Pie
data={attendanceChart}
/>

</div>

</div>


      {/* Bottom Charts */}

      <div className="row mt-4">

        <div className="col-md-6">
          <div
            className="card p-3 text-white"
            style={{
              background:
                "#131c31",
            }}
          >
            






            
            <div className="col-md-6">
  <div
    className="card p-3 text-white"
    style={{ background: "#131c31" }}
  >
    <h4>Top Subjects</h4>

    <Bar data={subjectData} />
  </div>
</div>
<div className="row mt-4">

  <div className="col-md-12">

    <div
      className="card p-3 text-white"
      style={{ background: "#131c31" }}
    >

      <h4>
        Monthly Collection Summary
      </h4>
      
      <Bar data={monthlyData} />

    </div>

  </div>

</div>
<div className="row mt-4">

  <div className="col-md-6">

    <div
      className="card p-3 text-white"
      style={{ background: "#131c31" }}
    >

      <h4>
        Recent Payments
      </h4>
        <div className="col-md-6">

    

  </div>

</div>
<div
className="card p-3 mt-4 text-white"
style={{
background:"#131c31"
}}
>

<h4>
Today's Attendance
</h4>

<table className="table table-dark">

<thead>

<tr>

<th>Student</th>

<th>Status</th>

<th>Date</th>

</tr>

</thead>

<tbody>

{attendance
.slice(0,5)
.map(item=>(

<tr key={item.id}>

<td>

{item.student_name}

</td>

<td>

{item.status}

</td>

<td>

{item.date}

</td>

</tr>

))}

</tbody>

</table>

</div>


      <table className="table table-dark">

        <thead>
          <tr>
            <th>Student</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {recentPayments.map(payment => (

            <tr key={payment.id}>
              <td>{payment.student_name}</td>
              <td>৳{payment.amount}</td>
              <td>{payment.payment_date}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

    <div
      className="card p-3 text-white"
      style={{ background: "#131c31" }}
    >

      <h4>
        Due Students
      </h4>

      <table className="table table-dark">

       <thead>
  <tr>
    <th>Name</th>
    <th>Fee</th>
    <th>Paid</th>
    <th>Due</th>
  </tr>
</thead>

<tbody>

  {dueStudents.map(student => (

    <tr key={student.id}>

      <td>
        {student.name}
      </td>

      <td>
        ৳{student.monthly_fee}
      </td>

      <td>
        ৳{student.totalPaid}
      </td>

      <td>
        ৳{student.dueAmount}
      </td>

    </tr>

  ))}

</tbody>

      </table>

    </div>











    

  </div>
<h4>
              Students by Class
              
            </h4>


            <Bar
              data={
                classChartData
              }
            />
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="card p-3 text-white"
            style={{
              background:
                "#131c31",
            }}
          >
            <h4>
              Recent Students
            </h4>

            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Fee</th>
                </tr>
              </thead>

              <tbody>
                {students
                  .slice(0, 5)
                  .map(
                    student => (
                      <tr
                        key={
                          student.id
                        }
                      >
                        <td>
                          {
                            student.name
                          }
                        </td>

                        <td>
                          {
                            student.class_name
                          }
                        </td>

                        <td>
                          ৳
                          {
                            student.monthly_fee
                          }
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;