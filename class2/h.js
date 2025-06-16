function emp(id,name,sal){
    this.id=id
    this.name=name
    this.sal=sal
    let bou=10000
    function boun(){
        console.log(bou)
    }
    this.getsal=function() {
        console.log(this.id,this.name,this.sal)
        boun()
    }
}
let e=new emp(1,'san',10000)
e.getsal()