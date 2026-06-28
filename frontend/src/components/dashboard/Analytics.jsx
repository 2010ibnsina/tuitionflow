import IncomeChart from "./IncomeChart";
import AttendanceChart from "./AttendanceChart";
import SubjectChart from "./SubjectChart";
import ClassChart from "./ClassChart";
import MonthlyCollectionChart from "./MonthlyCollectionChart";

function Analytics({

students,

payments,

expectedIncome,

collectedIncome,

presentCount,

absentCount,

lateCount

}){

return(

<>

<div className="row mt-4">

<div className="col-lg-8 mb-4">

<IncomeChart

expectedIncome={expectedIncome}

collectedIncome={collectedIncome}

/>

</div>

<div className="col-lg-4 mb-4">

<AttendanceChart

present={presentCount}

absent={absentCount}

late={lateCount}

/>

</div>

</div>

<div className="row">

<div className="col-lg-6 mb-4">

<SubjectChart

students={students}

/>

</div>

<div className="col-lg-6 mb-4">

<ClassChart

students={students}

/>

</div>

</div>

<div className="row">

<div className="col-lg-12">

<MonthlyCollectionChart

payments={payments}

/>

</div>

</div>

</>

);

}

export default Analytics;