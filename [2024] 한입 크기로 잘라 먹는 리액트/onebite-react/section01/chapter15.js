// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(더 많이 사용)

// 2. 객체 프로퍼티(객체 속성)
// key : value
// 프로퍼티는 갯수 제한 및 타입 제한이 없다.
// 키는 일반적으로 따옴표가 필요 없지만, 띄어쓰기를 사용 시 필요함.

let person = {
  name: "김현수",
  age: "29",
  hobby: "러닝",
  job: "FULL_STACK_DEVELOPER",
  etc: {},
  10: 20,
  "like cat": "cat",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);
// 정의되지 않은 프로퍼티에 접근 시 undefined 가 반환.
let name2 = person.name2;
console.log(name2);

// 대괄호 안에 키 값을 무조건 문자열로 접근해줘야 함.
let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.favorite = "GugBab";
person["like"] = "Nike";
console.log(person);

// 3.3 프로퍼티 수정하는 방법
person.favorite = "Video";
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.favorite;
delete person["like"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
// 해당 프로퍼티가 포함되어 있는지 여부를 boolean으로 반환
let res = "name" in person;
console.log(res);
let res2 = "like" in person;
console.log(res2);
