// 스코프
// 전역 (전체 영역) 스코프 / 지역(특정 영역) 스코프
// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1;

function funcA() {
  let b = 2;
  function funcB() {
    console.log(b);
  }
  console.log(a);
  funcB();
}

funcA();
// funcB();
// console.log(b); b is not defined 오류

// 조건문도 동일하게 지역 스코프가 생성된다.(블록이 기준)
if (true) {
  let c = 1;
}

// console.log(c); c is not defined 오류

// * 특이하게 함수는 함수 내 중복함수인 경우에만 지역 스코프를 가지고,
// 이외의 블록에서는 전역 스코프를 갖는다.
// 하지만, 위와 같은 경우는 거의 없으므로, 함수는 지역 스코프를 갖는다라고 알고 있으면 된다.
for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {}
}
funcB();
