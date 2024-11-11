// 함수 선언
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
add(20, 30);

function func1() {
  console.log("함수1");
}
function func2() {
  console.log("함수2");
}

// func1이 먼저 정의되었더라도, func2가 먼저 호출되었으므로, 콘솔에 우선 찍힌다.
func2();
func1();
