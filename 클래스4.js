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
  //square.#length = -10 //SyntaxError: Private field '#length' must be declared in an enclosing class
  console.log(`정사각형의 둘레는 ${square.getPerimeter()}`)
  console.log(`정사각형의 둘레는 ${square.getArea()}`)
  