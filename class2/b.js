const promt=require("prompt-sync")();
let num=promt("enter the number");
if(num<=200){
    console.log("free");
}
else if(num>200 && num<=250){
    let sum=0;
    sum=250*5;
    console.log(sum);
}
else if(num>250 && num<=300){
    let sum=0;
    sum=250*5 +(300-250)*10;
    console.log(sum);
}
else if(num>300 ){
    let sum=0;
    sum=250*5 + 50*10 +(num-300)*15;
    console.log(sum);
}