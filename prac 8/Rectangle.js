class Rectangle{
    constructor(length, width){
    this.length = length
    this.width = width
    }
    getArea(){
        return this.length*this.width
    }
    getPerimeter(){
        return 2*this.length + 2*this.width
    }
}

module.exports = Rectangle