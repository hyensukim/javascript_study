const str = "1 Little, 2 Little, 3 Little Indians.";
const result = str.replace("Little","Big");
console.log(result); // 1 Big, 2 Little, 3 Little Indians.

const result2 = str.replaceAll("Little","Big");
console.log(result2); // 1 Big, 2 Big, 3 Big Indians.

const result3 = str.replace(/Little/g, "Big");
console.log(result3); // 1 Big, 2 Big, 3 Big Indians.

// 인덱스 기반으로 탐색, 단어가 확인된 위치의 첫 인덱스를 반환.
console.log(str.search("Little")); // 2

// 인덱스 기반이므로, 없을 경우 -1을 반환.
console.log(str.search("Big")); // -1

const fruits = "apple,mango,banana,grape,melon";
const result4 = fruits.split(",");
const result5 = fruits.split(",",3);
console.log(result4); // ['apple', 'mango', 'banana', 'grape', 'melon']
console.log(result5); // ['apple', 'mango', 'banana']

const str2 = "I love javascript programming and java, too.";
const result6 = str2.slice(2); // 2 ~ 끝
const result7 = str2.slice(2,8); // 2,3,4,5,6,7
const result8 = str2.substring(2); // 2 ~ 끝
const result9 = str2.substring(2,8) // 2,3,4,5,6,7
console.log(result6); // love javascript programming and java, too.
console.log(result7); // love j
console.log(result8); // love javascript programming and java, too.
console.log(result9); // love j

const str3 = "  abc  ";
console.log(str3.trimEnd()); //'  abc'
console.log(str3.trimStart());//'abc  '
console.log(str3.trim());//'abc'