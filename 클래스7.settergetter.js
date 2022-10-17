//setter가 작동하는 경우

class Square {
    #length
    
    //length 에 값을 넣으면 자동으로 set length 호출.
    constructor (length) {
      //this.#length = length
      this.length = length
    }
    
    //내부에서 예외처리 가능.   
    set length(length) {
      if(length <= 0){
          throw '길이는 0보다 커야 한대요'
      }
      this.#length = length;
    }

    //이 경우는 getter 안에 매개변수 value 같은 것 안써도 됨  
    get length(){
      return this.#length
    }

    get perimeter() {
      return 4 * this.#length;
    }
  
    get area() {
      return this.#length * this.#length;
    }
  }
  
  const squareA = new Square(10)
  console.log(`정사각형의 둘레는 ${squareA.perimeter}`) //정사각형의 둘레는 40
  console.log(`정사각형의 둘레는 ${squareA.area}`) // 정사각형의 둘레는 100
  console.log(`정사각형 한 변의 길이는 ${squareA.length}`) // 정사각형 한 변의 길이는 10

const squareB = new Square(-10)
console.log(`정사각형의 둘레는 ${squareB.perimeter}`) //정사각형의 둘레는 -40
console.log(`정사각형의 둘레는 ${squareB.area}`) // 정사각형의 둘레는 100
console.log(`정사각형 한 변의 길이는 ${squareB.length}`) // 정사각형 한 변의 길이는 -10