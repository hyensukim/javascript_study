// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity;
let nInf = -Infinity;

let nan = NaN; // 일반적으로, 연산 실패 시 결과값

console.log(1 * "hello");

// 2. String Type
let myName = "김현수";
let myLocation = "시흥";
let introduce = myName + myLocation;
console.log(introduce);

let introduceText = `${myName}는 ${myLocation}에 거주합니다.`; // 백틱 : 변수 값을 동적으로 문자열에 담아줄 수 있다.
console.log(introduceText);

// 이를 "템플릿 리터럴 문법"이라고 한다. - 필히 학습할 것!

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다.) - 개발자가 값이 없다 라고 표현할 때, 직접 넣어주는 값.
let empty = null;

// 5. Undefined Type - 변수를 초기화 하지 않았거나, 의도치 않게 빈 결과를 가져왔을 때, 자동을 할당되는 값.
let none;
console.log(none);
