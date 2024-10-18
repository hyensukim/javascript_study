const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`${year}.${month}.${day} ${hours}:${minutes}:${seconds}`);
console.log(date);

console.log('\n');

const date2 = new Date(2024, 8, 19);
console.log(date2);
console.log(date - date2); // millisecond 단위로 출력

// Date.parse() :  1970 년 1 월 1 일 00:00:00 UTC 이후의 밀리 초 수를 반환.
const milli = Date.parse("2024-09-20");
console.log(milli);

const utcDate1 = new Date(Date.UTC(2024, 8, 20, 15, 2, 60));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// "Fri, 02 Feb 1996 03:04:05 GMT"

console.log(utcDate2.toUTCString());
// "Sun, 31 Dec 1899 00:00:00 GMT"
//
// >> 이 코드의 결과가 "Sun, 31 Dec 1899 00:00:00 GMT"로 나오는 이유
//
// 1. Date.UTC():
// Date.UTC() 메서드는 주어진 매개변수를 기반으로 UTC 시간의 밀리초를 반환.
// 이 메서드는 1970년 1월 1일을 기준으로 한다.
//
// 2. 연도 매개변수 (0):
// Date.UTC()에서 0~99 사이의 연도 값은 1900년대로 해석. 따라서 0은 1900년을 의미.
//
// 3. 월 매개변수 (0):
// JavaScript 에서 월은 0부터 시작. 0은 1월을 의미.
//
// 4. 일 매개변수 (0):
// 일자에 0을 넣으면 이전 달의 마지막 날을 의미. 1월 0일은 12월 31일을 의미.
//
// 5. 시간, 분, 초 매개변수 (0, 0, 0):
// 모두 0으로 설정되어 자정(00:00:00)을 나타냄.
//
// 6. 결과 해석:
//     - 연도: 1900년
// - 월: 1월 (0)
// - 일: 이전 달의 마지막 날 (12월 31일)
// - 시간: 00:00:00

console.log('\n');
console.log(date.toUTCString());
// 현재 시간 - 9Hrs

console.log('\n');
console.log(date.toLocaleTimeString('en-US'));
// 뉴욕 시간 기준

console.log(date.toJSON());