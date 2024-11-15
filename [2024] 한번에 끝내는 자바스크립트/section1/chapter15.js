// concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log("\n");

// join
const str = arr3.join("💡");
console.log(str);
console.log("\n");

// sort
const arr4 = [3, 2, 10, 5, 7];
const compare = (a, b) => b - a;
arr4.sort(compare);
console.log(arr4);
console.log("\n");

// reduce
const array = [10, 20, 30, 40, 50];
const sum = array.reduce((acc, cur, idx) => (acc += cur));
console.log(sum);
console.log("\n");

// isArray
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({}));
console.log(Array.isArray(" "));
console.log(Array.isArray(undefined));
