const promt=require("prompt-sync")();
let num=parseInt(promt("enter the number"));
let sum=0
for(let i=0;i<num;i++){
  sum=sum+i;
}
console.log(sum)

let num1=parseInt(promt("enter the number"));
let num2=parseInt(promt("enter the number"));
let sum1=0;
for(let i=num1;i<=num2;i++){
  sum1=sum1+i;
}
console.log(sum1)

let num3=parseInt(promt("enter the number"));
let num4=parseInt(promt("enter the number"));
if(num3>num4){
  console.log("greater nu"+num3)
}
else 
   console.log("grater num"+num4)





let num5=parseInt(promt("enter the number"));
let num6=parseInt(promt("enter the number"));
let num7=parseInt(promt("enter the number"));
if(num5>num6 && num5>num7){
  console.log("greater nu"+num5)
}
else if(num6>num7 && num6>num5){
  console.log("greater nu"+num6)
}  
else{
  console.log("greater nu"+num7)
}


let nums=parseInt(promt("enter the number"));
if(num%4==0){
  console.log("leap")
}

