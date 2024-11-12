const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));

function add2(a, b) {
  return a + b;
}

console.log(add2(20, 20));

// 콜백 함수
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  console.log("결과 : " + result);
};

const doubleResult = (result) => {
  console.log("결과에 2를 곱한 값 : " + result * 2);
};

const tripleResult = function (result) {
  console.log("결과에 3을 곱한 값 : " + result * 3);
};

calculate(10, 20, printResult);
calculate(10, 20, doubleResult);
calculate(10, 20, tripleResult);

// 더 간단한 콜백함수 활용
calculate(10, 20, (result) => {
  console.log("결과에 4을 곱한 값 : " + result * 4);
});
