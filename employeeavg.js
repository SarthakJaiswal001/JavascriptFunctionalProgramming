const employee=[{
    name:"e1",
    jobtitle:"developer",
    salary:200000,
},{
    name:"e2",
    jobtitle:"nondeveloper",
    salary:1900000,
},{
    name:"e3",
    jobtitle:"nondeveloper",
    salary:300000,
},{
    name:"e5",
    jobtitle:"developer",
    salary:700000,
},{
    name:"e6",
    jobtitle:"nondeveloper",
    salary:900000,
},{
    name:"e7",
    jobtitle:"developer",
    salary:600000,
},{
    name:"e8",
    jobtitle:"nondeveloper",
    salary:500000,
},{
    name:"e9",
    jobtitle:"nondeveloper",
    salary:300000,
}]
const developers=employee.filter(employees=>employees.jobtitle==="developer");
console.log(developers);
const developersalarys=developers.map(salarys=>salarys.salary);
console.log(developersalarys)
const totalDevelopersSalary= developersalarys.reduce((acc,q)=>acc+q , 0);
console.log(totalDevelopersSalary);
const avgDeveloperSalary= totalDevelopersSalary / developersalarys.length ;
console.log(avgDeveloperSalary);

const nonDeveloper= employee.filter(employeee=> employeee.jobtitle!="developer");
const SalarynonDeveloper= nonDeveloper.map(nonDevelopersalary=> nonDevelopersalary.salary);
console.log(SalarynonDeveloper);
const totalnonDeveloperSalary= SalarynonDeveloper.reduce((acc,w)=>acc+w,0);
const avgnonDeveloperSalary=totalnonDeveloperSalary/SalarynonDeveloper.length;
console.log(avgnonDeveloperSalary);