const toto=[2,3,1,4,53,64,34];
const sum=toto.reduce((acc,element)=>{
  console.log(`acc is ${acc}`);
  console.log(`element is ${element}`);
  return acc+element;
},0)
console.log(sum);