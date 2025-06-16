const promt=require("prompt-sync")();
let state=promt("member");

if(state=="yes"){
    console.log("get the 15% discount");
}
else if(state=="no"){
    console.log("get 5% discount");
}