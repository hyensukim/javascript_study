// 1. 상수 객체 : 상수에 저장해 놓은 객체
const animal = {
  name: "나비",
  type: "고양이",
  color: "white",
};

// animal = { a: 1 }; 오류 발생.

// 하지만, 기존의 객체 내부 프로퍼티를 사용하는 것은 가능하다.
animal.age = 10;
console.log(animal);

animal.name = "고구마";
console.log(animal);

delete animal.age;
console.log(animal);

// 2. 메서드
// 객체 프로퍼티 중 함수형태의 프로퍼티를 말함.
const person = {
  name: "김현수",
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  },
};

// 메서드는 보통 객체의 동작을 정의할 때 사용함.
person.sayHi();
person["sayHi"]();
