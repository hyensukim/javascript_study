// 1. 변수
let age = 27;
console.log(age);

age = 30;
console.log(age);

// 2. 상수
const birth = "1996.10.27";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $,_ 제외한 기호는 사요할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let if; error!

// 4. 변수명 가이드
// 전
let a = 1;
let b = 1;
let c = a - b;

// 후
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
