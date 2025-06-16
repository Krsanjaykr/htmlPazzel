f=fetch("https://jsonplaceholder.typicode.com/users").then((value1)=>{
    return value1.json()
}).then((value2)=>{console.log(value2)})