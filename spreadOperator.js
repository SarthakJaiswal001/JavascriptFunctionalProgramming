const person={
    name:"Sarthak",
    age:23,
    income:"billions"
}
const personData={
    address:"south korea",
    love:true
}
const updated={
    ...person,
    ...personData
}
console.log(updated);
const arr=[1,2,3,4,5];
const arr2=[6,7,8,9,0];
const newArr=[...arr,...arr2];
console.log(newArr)