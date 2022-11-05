class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    //사각형 둘레 메소드
    getPerimeter(){
        return 2 * (this.width + this.height)
    }

    //사각형 넓이 메소드
    getArea(){
        return this.width * this.height
    }
}

/**
 * 

class Square{
    constructor(length){
        this.length = length
    }

    getPerimeter(){
        return 4*this.length
    }

    getArea(){
        return this.length * this.length
    }
}
*/

class Square extends Rectangle {
    constructor(length){
        super(length, length) // 매개변수 이름 상위 클래스와 달라도 상관 없음.
    }
}

const rectangle = new Rectangle(10,20)
const square = new Square(10)
console.log(`사각형의 둘레는 ${rectangle.getPerimeter()}`)
console.log(`사각형의 둘레는 ${rectangle.getArea()}`)
console.log(`정사각형의 둘레는 ${square.getPerimeter()}`)
console.log(`정사각형의 둘레는 ${square.getArea()}`)