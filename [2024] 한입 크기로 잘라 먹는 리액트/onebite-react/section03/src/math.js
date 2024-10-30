export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// CJS
// module.exports = {
//   add, // add: add 와 동일
//   sub: sub,
// };

// ESM
// export { add, sub }; // 방식 1

// ESM - 기본값 설정
export default function multiply(a, b) {
  return a * b;
}
