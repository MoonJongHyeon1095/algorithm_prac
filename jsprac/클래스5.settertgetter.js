class Square {
    #length
    
    constructor (length) {
      this.setLength(length) 
    }

    //생성자 내부가 아니라 함수 내부에서 예외처리.
    setLength(v) {
      if(v <= 0){
          throw '길이는 0보다 커야 한대요'
      }
      this.#length = v;
    }

    //이 경우는 getter 안에 매개변수 value 같은 것 안써도 됨  
    getLength(){
      return this.#length
    }

    getPerimeter() {
      return 4 * this.#length;
    }
  
    getArea() {
      return this.#length * this.#length;
    }
  }
  
  const square = new Square(10)
  console.log(`정사각형의 둘레는 ${square.getPerimeter()}`) //정사각형의 둘레는 40
  console.log(`정사각형의 둘레는 ${square.getArea()}`) // 정사각형의 둘레는 100
  console.log(`정사각형 한 변의 길이는 ${square.getLength()}`) // 정사각형 한 변의 길이는 10

  square.setLength(20)
  console.log(`정사각형의 둘레는 ${square.getPerimeter()}`) // 정사각형의 둘레는 80
  console.log(`정사각형의 둘레는 ${square.getArea()}`) // 정사각형의 둘레는 400
  console.log(`정사각형 한 변의 길이는 ${square.getLength()}`) // 정사각형 한 변의 길이는 20

  //예외 발생
  //square.setLength(-10) // 길이는 0보다 커야 한대요 

  const squareB = new Square(-10) // 이렇게 넣어도 setter 작동
  console.log(`정사각형의 둘레는 ${squareB.getPerimeter()}`) // 길이는 0보다 커야 한대요