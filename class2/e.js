function callDB(a){
     setTimeout(()=>{
          console.log("hii")
     },2000)
}
function display(data){
     console.log(data)
}
callDB(display)