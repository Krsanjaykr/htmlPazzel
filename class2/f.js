class circle{
    constructor(radius){
        console.log(2*3.14*this.radius)
    }
}
class rect {
    constructor(width,height){
        console.log(this.width*this.height)
    }
}
class square extends rect{
    
    constructor(){
        super(width)
        console.log(this.width*this.width)
    }
}
c=new circle(10)
d=new rect(10,10)
s=new square()