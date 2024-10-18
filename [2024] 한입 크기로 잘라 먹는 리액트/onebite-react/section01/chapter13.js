// 1. 콜백함수 : 뒷전에 실행되는 함수.
// 내가 아닌 다른 함수의 인자로 전달되는 함수
// main 함수에서는 콜백함수를 원하는 시점에 호출하도록 제어할 수 있다.
function main(value) {
  value();
}

function sub() {
  console.log("i am sub1");
}

main(sub);

main(function () {
  console.log("i am sub2");
});

main(() => {
  console.log("i am sub3");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});
