const sum= (x,y,z)=> x+y+z;
const curry= p=>q=>r=>sum(p,q,r);//this is called currying passing of arguments one at a time
const firstArg= curry(3);
const secondArg = firstArg(5);
const thirdArg= secondArg(7);
console.log(thirdArg);
const addition=curry(1)(5)(9);//we can also pass arguments like this
console.log(addition);

const partialApplication=(e,f)=>g=>sum(e,f,g);//this is partial application example
const pehlaArg=partialApplication(3,4);
const finalArg=pehlaArg(1);
console.log(finalArg);