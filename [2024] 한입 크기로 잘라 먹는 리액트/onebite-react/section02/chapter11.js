// 동기로 동작
console.log(10);
console.log(11);

// setTimeout() : 비동기적으로 동작하는 특정 함수.
// 첫번째 매개변수로 콜백함수가 들어가며, 두번째 인자인 ms 시간이 지난 뒤 콜백함수가 실행된다.
console.log(1); // javascript engine 동작 1
// web APIs에 콜백함수와 타이머 시간(ms)를 전달.
setTimeout(() => {
  console.log(2);
}, 300);
// javscript engine 동작 2
// web APIs에 타이머가 완료되면, 콜백함수를 js 엔진으로 전달하여 실행함.
// 이게 비동기의 실체이다.
console.log(3);
