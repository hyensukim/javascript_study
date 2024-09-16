var sym1 = Symbol();
var sym2 = Symbol();

console.log(sym1 == sym2);

var HEART = Symbol("하트");
console.log(HEART.toString());

var none = Symbol.for("none");
var noneKey = Symbol.for("none");
console.log(none == noneKey);

console.log(Symbol.keyFor(none));
console.log(Symbol.keyFor(noneKey));

var t = `Main errors\nwhere?`;
console.log(t);

var a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`);
var now = new Date();
console.log(`오늘은 ${now.getMonth() + 1}월 ${now.getDate()}일 입니다.`);