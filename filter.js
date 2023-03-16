const setOfNumbers=[2,4,3,5,6,8];
const evenorNot=x=>x%2===0;
const evenOnly=setOfNumbers.filter(evenorNot);
console.log(evenOnly);
const words=['hello','australia','singapore','millionaire'];
const createLengthTest=minLength=>word=>word.length>minLength;
const longWords=words.filter(createLengthTest(5))
console.log(longWords);
//const longerThan5=y=>y.length>5;
//const bigWords=words.filter(longerThan5);
//console.log(bigWords);

//Using Higher order function