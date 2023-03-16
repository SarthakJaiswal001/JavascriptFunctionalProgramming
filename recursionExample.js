const countDown=c=>{
    if(c<0){
        return ;
    }
    console.log(c);
    countDown(c-1);
}
countDown(10);