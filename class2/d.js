const promt=require("prompt-sync")();
let result=0
let num
while(1){
    num=parseInt(promt("enter the number"));
    if(num<0){
        break;
    }
    else{
        result=num+result
        console.log(result)
    }
}