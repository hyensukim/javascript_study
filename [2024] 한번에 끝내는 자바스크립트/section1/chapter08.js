//함수 호이스팅

connectStrings("study", "hoisting");

function connectStrings(str1, str2) {
  console.log(str1 + str2);
}

// 변수 호이스팅
// console.log(num1);
// let num1 = 123; //error -> 이유 : let/const는 초기화 되기 전까지 TDZ에 호이스팅 되기 때문이다.

console.log(num2);
var num2 = 123; // undefined
