//생성자 패턴 카테고리에 속한다
//보통 로그인, 환경설정 등의 리소스 관리에 사용
//한 인스턴스에서 전역적으로 관리

//1.컨스트럭터는 private, 인스턴스 만들지마
//2.안에서 함수 쓸거면 static 함수로 써.
//3.1+2로, 시스템 통틀어서 단 하나의 인스턴스만 있도록.
//일대 다수의 관계. 클라이언트가 추가 되어도 인스턴스는 하나.
class Singleton {
    constructor(){
        if(Singleton.instance){
            return console.warn('경고 : 싱클턴 클래스 인스턴스가 이미 있음.')
        }
    Singleton.instance = this;
    this.version = Date.now()    
    this.config = 'test'
    }

    //엑세스 포인트.
    static getInstance(){
        if(!this.instance){
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const s1 = new Singleton()
console.log(s1) // Singleton { version: 1666177640549, config: 'test' }
const s2 = new Singleton()
console.log(s2) // 경고 : 싱클턴 클래스 인스턴스가 이미 있음.

const s3 = Singleton.getInstance();
console.log(s3) // Singleton { version: 1666177857806, config: 'test' }
const s4 = Singleton.getInstance();
console.log(s4); // Singleton { version: 1666177857806, config: 'test' }
console.log(s3 === s4) //true