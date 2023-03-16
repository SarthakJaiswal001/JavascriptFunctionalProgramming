const array=[1,2,3,4,5];
//the map function does not modify the original array data inside it
const doublee=x=>x*2;
const array2=array.map(doublee);
console.log(array2);
console.log(array.reverse());//reverse function impacts the original data stored in array