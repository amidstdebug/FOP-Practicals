class Circle{
    constructor(radius) {
        this.radius = radius
    }
    getArea(){
        return Math.PI*(this.radius**2)
    }
    enlargeCircle(){
        return Math.PI*((this.radius*3)**2)
    }
    shrinkCircle(){
        return Math.PI*((this.radius*1/2)**2)
    }
}
var circle1 = new Circle(2)
var circle2 = new Circle(2)
var circle3 = new Circle(2)
console.log("Area is: " + circle1.getArea().toFixed(2) + "\nNew area is: " + circle2.enlargeCircle().toFixed(2) + "\nNew area is: " + circle3.shrinkCircle().toFixed(2))