// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

// 자바스크립트 에서는 함수도 하나의 값으로 다루기 때문에 변수에 담길 수 있다.
varA();

// 주의할 점, 아래와 같은 방식은 실제 funcB 라는 함수를 선언한 것은 아니다.
// 단지, varB 라는 변수를 초기화 하기 위해 사용된 임시 함수이다.
// 따라서, 아래와 같이 정의한 뒤 funcB() 함수를 별도로 호출하게 되면, 오류가 발생한다.
// 결국 이러한 함수는 변수 이름으로 호출해줘야 하므로, 이러한 함수를 "익명함수"라고 한다.
// 추가로, 익명함수로 정의된 함수는 변수에 종속되기 때문에, 호이스팅도 되지 않는다.
// varB(); - 오류
let varB = function () {
  console.log("funcB");
};
varB();

// console.log(varC(1)); - 오류
// 2. 화살표 함수
let varC = (v) => {
  console.log(v);
  return v + 1;
};

console.log(varC(1));
