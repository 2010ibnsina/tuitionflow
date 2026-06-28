import {

Bar

}

from "react-chartjs-2";

function ClassChart({

students

}){

const classes={};

students.forEach(student=>{

classes[student.class_name]=

(classes[student.class_name]||0)+1;

});

const data={

labels:Object.keys(classes),

datasets:[

{

label:"Students",

data:Object.values(classes),

backgroundColor:"#8b5cf6"

}

]

};

return(

<div className="chart-card">

<h4>

Students by Class

</h4>

<Bar

data={data}

/>

</div>

);

}

export default ClassChart;