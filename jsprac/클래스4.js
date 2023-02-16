//#속성을 따로 구분하여 불러내지 않으면, 읽히지 않습니다. 그러니까 각 메서드에서 #을 뗴면 안된다는 뜻.
class Square {
    #length

    constructor(length) {
      if(length <= 0){
          throw '길이는 0보다 커야 한대요'
      }
      this.#length = length;
    }
    getPerimeter() {
      return 4 * this.#length;
    }
  
    getArea() {
      return this.#length * this.#length;
    }
  }
  
  const square = new Square(10)
  square.length = -10 //없는 속성. 무시됨.
 // square.#length = -10 //SyntaxError: Private field '#length' must be declared in an enclosing class
  console.log(`정사각형의 둘레는 ${square.getPerimeter()}`)//정사각형의 둘레는 40
  console.log(`정사각형의 둘레는 ${square.getArea()}`)//정사각형의 둘레는 100
  