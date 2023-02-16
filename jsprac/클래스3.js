class Square {
  constructor(length) {
    if(length <= 0){
        throw '길이는 0보다 커야 한대요'
    }
    this.length = length;
  }
  getPerimeter() {
    return 4 * this.length;
  }

  getArea() {
    return this.length * this.length;
  }
}

const square = new Square(10)
square.length = -10 //에러가 나와야 하지만 이렇게 속성을 변경할 수 있음
console.log(`정사각형의 둘레는 ${square.getPerimeter()}`)
console.log(`정사각형의 둘레는 ${square.getArea()}`)
