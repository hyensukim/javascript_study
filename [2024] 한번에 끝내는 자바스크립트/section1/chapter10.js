// 객체 생성 : 생성자 함수, 리터럴
let obj = new Object();
console.log(obj);

let obj2 = {};
console.log(obj2);

// 프로퍼티 : 객체 내 k - v 형태로 들어 있는 데이터.
// key 값은 고유한 값을 넣어줘야 한다.
// value는 어떤 형태의 값도 들어갈 수 있다.
let book = {
  title: "자바스크립트 첫걸음",
  author: "김효빈",
  category: "자바스크립트",
  year: undefined,
  color: function () {
    console.log("ornage");
  },
};

// 객체 프로퍼티 사용법
let car = {
  name: "붕붕",
  model: "morning",
  color: "black",
};

console.log(car.name);
console.log(car["model"]);
console.log(car["color"]);

const getValue = (key) => {
  console.log(car[key]);
};

getValue("color");

const cat = {
  age: 2,
  name: "이름",
  color: "white",
};

cat.name = "양이";
cat.color = "black";

console.log(cat);

delete cat.color;
delete cat["name"];

console.log(cat);

const person = {
  name: "홍길동",
  age: 23,

  // 메서드
  // this를 사용하여 다른 프로퍼티에 접근 가능
  print: function () {
    //함수 선언식으로 사용하는 것이 좋다. 왜냐하면, 화살표 함수는 최상위 객체인 window에 저장되므로,
    // this를 통해 해당 객체의 프로퍼티에 접근이 불가능하기 때문이다.
    console.log(`제 이름은 ${this.name} 입니다.`);
  },
};

person.print();
person["print"]();
