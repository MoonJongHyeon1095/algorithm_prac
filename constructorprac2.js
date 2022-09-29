function Item(title, price){
    //this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원 입니다.`);
    }

    //return this;
}

const item1 = new Item('인형', 3000)
const item2 = Item('가방', 3000) // new를 지워보자 //undefined 출력 
const item3 = new Item('지갑', 3000) 
// new가 없으면 걍 함수를 실행하는 건데, return해주는게 없으니 undefined를 반환하고
// 그 undefined가 item2에 들어가게 된다.

console.log(item1, item2, item3);
//Item { title: '인형', price: 3000, showPrice: [Function (anonymous)] } 
//Item { title: '가방', price: 3000, showPrice: [Function (anonymous)] } 
//Item { title: '지갑', price: 3000, showPrice: [Function (anonymous)] }

item3.showPrice(); // 가격은 3000원 입니다.
