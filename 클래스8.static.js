

class Square {
    #length
    static #counter = 0
    static get counter() {
        return Square.#counter
    }
    
    constructor (length) {
      this.length = length
      Square.#counter +=1
    }

    static perimeterOf(length){
        return length * 4
    }

    둘레(){
        return this.length * 4
    }

    넓이(){
        return this.length * this.length
    }

    static areaOf (length){
        return length * length
    }
  
    set length(length) {
      if(length <= 0){
          throw '길이는 0보다 커야 한대요'
      }
      this.#length = length;
    }
 
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
const squareB = new Square(20)
const squareC = new Square(30)
console.log(`지금까지 생성된 네모는 ${Square.counter}개 입니다.`) // static 속성

//static은 객체 생성 없이도 클래스 안의 속성과 함수를 사용할 수 있게 해줌.
console.log(`한 변의 길이가 20인 정사각형의 둘레는 ${Square.perimeterOf(20)}`)//static 메소드
console.log(`한 변의 길이가 30인 정사각형의 넓이는 ${Square.areaOf(30)}`)
console.log(`한 변의 길이가 10인 정사각형의 둘레는 ${squareA.둘레()}`) // 일반 메서드
console.log(`한 변의 길이가 10인 정사각형의 둘레는 ${squareA.perimeter}`) // getter
console.log(`한 변의 길이가 30인 정사각형의 넓이는 ${squareC.넓이()}`) // 일반 메서드
console.log(`한 변의 길이가 30인 정사각형의 넓이는 ${squareC.area}`) // getter