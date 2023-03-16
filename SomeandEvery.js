const employer=[{
    name:"sarthak",
    companyRevenue:"billions",
},
{
    name:"himanshu",
    companyRevenue:"billions",
},
{
    name:"gautam",
    companyRevenue:"billions"
}]
const revenue=income=>income.companyRevenue==="billions";
const isBillions=employer.every(revenue);
console.log(isBillions)
const isbIllionaire=employer.some(revenue);
console.log(isbIllionaire);
const anotherarr=[1,2,3,4,5,6,7,8];
console.log(anotherarr.slice(3,6));//slice function creates the copy of original array and does not mutate original array