const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor - 비동기 작업
  setTimeout(() => {
    const num = "10";

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// then 메서드
// Promise 결과를 처리하기 위한 메서드
// 만약, promisestate가 fulfilled인 경우에만 수행.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
// 위처럼 체이닝 형식의 프로미스 객체 처리하는 것을 Promise 체이닝이라고 한다.

// catch 메서드
// promisestate가 rejected인 경우 수행.
// promise.catch((error) => {
//   console.log(error);
// });

// 비동기 작업을 고정된 값이 아닌, 함수를 만들어서 함수 안에서 프로미스 객체를 생성하여 동적으로 값을 처리하도록 만들기
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아니다.");
      }
    }, 2000);
  });

  return promise;
}

// 이전 챕터12에서 배웠듯이, 비동기 콜백함수는 내부적으로 콜백함수를 다시 호출할 경우,
// 기능에 비례하여 인덴트가 깊어져 가독성이 많이 떨어졌다.
// 다음과 같이 정의하게 될 경우, 동일한 현상이 발생하게 되는데,
// Promise에서는 이를 해결해주는 강력한 기능을 제공한다.
// 그것은 바로, then 메서드 안에서 return newP를 반환해주면,
// 그때부터 새로운 프로미스객체를 반환해주게 된다. 이를 통해서,
// 새로운 프로미스 객체로 또다시 체이닝 형태로 처리를 해줄 수 있게 되므로
// 콜백지옥을 벗어날 수 있게 되는 것이다.
const p = add10(0);
p.then((value) => {
  console.log(value);
  return add10(value);
})
  .then((value) => {
    console.log(value);
    return add10(undefined);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
