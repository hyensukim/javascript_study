// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1996.10.27/10:10:10");
console.log(date2);

let date3 = new Date(1996, 10, 27, 10, 10, 11);
console.log(date3);

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// UTC : 국제 협약 표준시
let ts1 = date1.getTime();
console.log(ts1);

// timestamp -> date
let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월의 경우, 원래 값보다 -1된 값이 출력된다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, minute, second);

//  4. 시간 수정하기
date1.setFullYear(2025);
date1.setMonth(0);
date1.setDate(10);
date1.setHours(23);
date1.setMinutes(23);
date1.setSeconds(10);

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); // 현지화된 형태로 문자열 출력
console.log(date1.toLocaleDateString());
