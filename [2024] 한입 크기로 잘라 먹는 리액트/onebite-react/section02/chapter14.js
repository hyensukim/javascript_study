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
// printData();

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "ihCbPOLuHP5b0sqP4RKaG"; // 내 상점에서 고객을 구분하기 위해 발급한 고객의 고유 ID
// ------  결제위젯 초기화 ------
const paymentWidget = {
  renderPaymentMethods(message, money, key) {
    console.log(message, money, key);
  },
  renderAgreement(str) {
    console.log(str);
  },
  requestPayment(...rest) {
    return Promise.resolve(rest);
  },
}; // 회원 결제

// ------  결제위젯 렌더링 ------
const paymentMethodWidget = paymentWidget.renderPaymentMethods(
  "#payment-method",
  { value: 15000 },
  { variantKey: "DEFAULT" } // 렌더링하고 싶은 결제 UI의 variantKey
);
// ------  이용약관 렌더링 ------
paymentWidget.renderAgreement("#agreement");

// ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
async function handleSubmit() {
  try {
    const paymentData = await paymentWidget.requestPayment({
      orderId: "KOISABLdLiIzeM-VGU_8Z", // 주문 ID(직접 만들어주세요)
      orderName: "토스 티셔츠 외 2건", // 주문명
    });
    console.log(paymentData);
    return paymentData;
  } catch (error) {
    console.log(error.message);
  }
}

handleSubmit();
