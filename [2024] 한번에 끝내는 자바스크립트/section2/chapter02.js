// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     resolve("성공"); // 성공 시 호출
//     reject("실패"); // 실패 시 호출
//   }, 3000);
// };

// const promise = new Promise(executor);

// 성공 또는 실패 시 전달된 value를 출력하는 코드
// promise
//   .then((result) => {
//     console.log(promise);
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise가 콜백지옥을 해결하는 예제
// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 5);
//   }, 3000);
// };

// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, 5000);
// };
// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10 );
//   }, 10000);
// };

// 비동기 처리 결과를 다른 함수 내에서 처리하기 위한 예시
// 이처럼 정의하게 되면, 비동기 간에도 동기적으로 처리할 수있고,
// 비동기 처리된 결과를 다음 로직에서 이어서 처리할 수 있다는 장점이 있다.
// 하지만, 이는 가독성이 떨어지고, 코드의 복잡도가 올라간다는 단점이 있다.
// 이처럼 depth가 깊어지는 로직을 콜백지옥 이라고 명명한다.
// workA(10, (resA) => {
//   console.log(`workA의 값은 ${resA}`);
//   workB(resA, (resB) => {
//     console.log(`workB의 값은 ${resB}`);
//     workC(resB, (resC) => {
//       console.log(`workC의 값은 ${resC}`);
//     });
//   });
// });

const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 3000);
  });
  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 5000);
  });
  return promise;
};
const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
};

// workA(10).then((resA) => {
//   console.log(`workA의 값은 ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB의 값은 ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC의 값은 ${resC}`);
//     });
//   });
// });
// 추가로 조금 더 가독성을 높인 프로미스 체이닝 방식
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`workB : ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC : ${resC}`);
  });
