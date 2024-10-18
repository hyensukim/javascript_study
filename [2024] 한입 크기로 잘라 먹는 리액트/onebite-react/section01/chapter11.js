// 함수선언
function greeting() {
  console.log("안녕하세요!");
}

// 함수 호출 : 소괄호와 함께 호출하기
console.log("호출 전");
greeting();
console.log("호출 후");

function getArea(width, height) {
  // 매개변수 : 함수에 전달된 변수.
  let area = width * height;
  function anohter() {
    // 중첩함수
    console.log("another");
  }
  anohter();
  return area; // 반환값 : 함수 호출의 결과
  // 함수는 return 시, 해당 함수를 종료하므로, return 하위에 코드를 사용하더라도 무시된다.
  // 자바 스크립트는 함수 내부에 함수선언이 가능하다. - 중첩함수라고 한다.
}

let area1 = getArea(10, 30); // 인수 : 함수에 전달된 값.
console.log(area1);

let area2 = getArea(120, 200);
console.log(area2);

// 자바스크립트는 함수 호출 후 함수 선언문이 있더라도 정상적으로 함수가 호출된다.
// 이는 자바스크립트에서 제공하는 함수의 호이스팅 메커니즘 때문이다.
// 호이스팅 : 끌어올리다. - 선언문을 최상단으로 끌어올린다.
// 이로 인해, 조금 더 유연하게 함수 사용이 가능하다.
