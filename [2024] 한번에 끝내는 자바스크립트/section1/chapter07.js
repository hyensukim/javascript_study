let globalNum = 100;

function testFunc() {
  let innerNum = 50;
  console.log(globalNum);
  console.log(innerNum);
}

testFunc();
console.log(globalNum);
// console.log(innerNum);

// 블록 스코프
function print() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // undefined : i는 for문 내에서만 사용 가능
}

print();

var num = 10;
var num = 100;

console.log(num);
