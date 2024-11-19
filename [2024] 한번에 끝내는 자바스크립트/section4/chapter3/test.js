function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 2000);
}

const counter = new Counter();

// 콜백 함수는 일반 함수 vs 콜백 함수 일 떄 this가 다르다
// 일반 함수 -> window 객체(원래)
// 화살표 함수 -> 함수가 정의되는 시점에 상위 함수를 참조.
// 이는 자바스크립트의 렉시컬 스코프와 비슷하다.
// 렉시컬 스코프 : 함수의 호출이 아니라, 함수가 선언된 위치에 따라 스코프가 결정되는 방법

const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: function () {
    console.log(this);
  },
};

cafe.print();
