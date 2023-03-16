const map=(arr,func)=>{
    let newarr=[];
    for(let i=0;i<arr.length;i++){
const result = func(arr[i]);
newarr.push(result);
    }
    return newarr;
}
console.log(map([1,2,34,5],x=>x*2));
//doing using reduce
const map2=(arr2,func2)=>
    arr2.reduce((acc,m)=>[
        ...acc,func2(m)
    ],[])

console.log(map2([1,2,34,5],x=>x*2));
