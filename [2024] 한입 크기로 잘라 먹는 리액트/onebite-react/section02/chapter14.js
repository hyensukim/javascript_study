// async
// 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스 객체를 반환하도록 변환해주는 예약어
// 이 때, 반환되는 프로미스 객체는 fulfilled & 반환값을 결과에 담아서 반환.
async function getData() {
  return {
    name: "김현수",
    id: "kim",
  };
}

// 만약, async 함수 내 Promise를 정의해주면, 그냥 promise를 반환해주는 함수처럼 사용이 가능하다.

async function getNewData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "김현수",
        id: "kim",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  //   getNewData().then((result) => {
  //     console.log(result);
  //   });
  const data = await getNewData(); // 비동기 함수가 처리될 때까지 기다림.
  console.log(data);
}
printData();
