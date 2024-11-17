const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3초가 지났습니다.");
    }, ms);
  });
};

const start = async () => {
  // await 예약어 추가 시에는 결과를 반환하고, 없는 경우에는 pomise 객체가 반환된다.
  try {
    const res = await delay(3000);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

start();

const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wokA");
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wokB");
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("wokC");
    }, 10000);
  });
};

// 이전보다 상대적으로 시간이 더 소요된다. 즉, 전 요소가 18초 뒤에 처리가 발생한다.

const starts = async () => {
  try {
    // 동기화된 함수 처리들을 병렬적으로 처리하기 위해서는 Promise.all 함수를 사용해줘야 한다.
    let results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((res) => console.log(res));
  } catch (error) {
    console.log(error);
  }
};

starts();

// promiseAll
