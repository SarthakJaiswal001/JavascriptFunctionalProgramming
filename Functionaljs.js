const sayHello = () => {
    console.log("hello world")
}
const sum = (num1, num2) => {
    return num1 + num2;
}
const double = (num) => num * 2;
const obj = () => ({
    name: "sarthak",
    income: "billionaire",
    looks: "perfect"
})//returning a object 
const isTrue = true
    ? () => console.log("yes it is true") //ternary operator
    : () => console.log("its false");
const Development = true;
const fetchDataReal = () => {
    //time intensive task
}
const fetchDataFake = () => ({
    name: "sarthak"
})
const fetchData = Development
    ? fetchDataFake
    : fetchDataReal;

const yoyo = (x) => {
    return x + 3;
}
const gogo = (x) => {
    return x * x;
}
const toto = (x) => {
    return x * 7;
}
const arrayofFunctions = [yoyo, gogo, toto];
var number = 45;
arrayofFunctions.forEach(func => number = func(number));
console.log(number);

const add = (i1, i2) => i1 + i2;
const subtract = (i1, i2) => i1 - i2;

const add2and3 = (func) => func(2, 3);

const val1 = add2and3(add);
const val2 = add2and3(subtract);
console.log(val1);
console.log(val2);
//passing functions as an argument
console.log(add2and3(Math.max));
//returning a function
const multiplier = x => y => x * y;
const mult = function (x) { //expaned form of the line 53 or function in line 53
    return function (y) {
        return x * y;
    }
}
const doubl = multiplier(2);
const triple = multiplier(3);
const quad = multiplier(4);
doubl(2);//output 4
triple(3);//output 9
quad(4);//output 16
const closure = () => {
    const yt = 100;
    return () => console.log(`printing value of yt ${yt}`);
}
const print = closure();
print();//this will print line 67 and this is example of closure