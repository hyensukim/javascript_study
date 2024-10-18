console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("a")); // false
console.log(isNaN("a")); // true

console.log('\n');

console.log(Number.parseInt("3.5")); // 3
console.log(Number.parseInt(3.5)); // 3
console.log(parseInt("3.5")); // 3
console.log(parseFloat("3.5")); // 3.5
console.log(parseInt("abc")); // NaN

console.log('\n');

const num = 12.1234567;
const strNum = num.toFixed(3);
const strNum2 = num.toPrecision(5);
console.log(strNum); // 12.123
console.log(strNum2); // 12.123

console.log('\n');

const num2 = 100000000000000;
const strNum3 =num2.toLocaleString();
console.log(strNum3);