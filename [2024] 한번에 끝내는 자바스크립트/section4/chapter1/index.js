// console.log(this); // 전역 this => window : 웹 브라우저의 전역 객체

// 일반함수 호출
// this -> window
function func() {
  console.log(this);
}

func();

// 메서드 -> 객체 프로퍼티 내 함수
// 메서드 함수 호출
// this -> 메서드가 포함된 함수
const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  newCafe: {
    brand: "이디야",
    menu: "라떼",
    print: function () {
      console.log(this);
    },
  },
};

cafe.newCafe.print(); // 메서드로 호출 -> 메서드를 포함한 객체

const newCafe = cafe.newCafe.print;
newCafe(); // 일반 호출 -> 호출하는 곳은 윈도우 객체가 this로 설정

console.log("==============================================================");

// 생성자 함수
// 생성자 함수 호출
// this -> 생성자 함수가 생성할 인스턴스
function Cafe(menu) {
  console.log(this);
  this.menu = menu;
}

// let myCafe = new Cafe("latte"); // 생성자 함수 -> 인스턴스
// console.log(myCafe);

let myCafe = Cafe("latte"); // 일반 함수로 사용 시, window 의미
console.log(myCafe);

console.log("==============================================================");

// 콜백함수
// this -> window 객체
const cafe24 = {
  brand: "이디야",
  menu: "",
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callBack) {
  callBack(menu);
}

getMenu("핫초코", cafe24.setMenu);
console.log(cafe24);
