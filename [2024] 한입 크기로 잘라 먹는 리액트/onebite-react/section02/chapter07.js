// 6가지의 요소 조작 메서드

// 1.push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환하는 메서드
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log(poppedItem);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환하는 메서드
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4, newLength2);

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5.slice(2, 5); // include ~ exclude
console.log(arr6);
let arr7 = arr5.slice(2);
console.log(arr7);
let arr8 = arr5.slice(-3);
console.log(arr8);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr9 = [1, 2];
let arr10 = [3, 4];
let concatedArr = arr9.concat(arr10);
console.log(concatedArr);
