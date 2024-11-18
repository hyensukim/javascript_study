// getElementById

const $color = document.getElementById("color");
console.log($color);

// querySelector
let $animalInfo = document.querySelector("div.animal-info");
let ageElement = document.querySelector("div#age");
console.log($animalInfo, ageElement);

// querySelectorAll
let $infoItem = document.querySelectorAll("div.info-item");
console.log($infoItem);

// getElementsByClassName
let $infoItem2 = document.getElementsByClassName("info-item"); // 클래스명만 작성
console.log($infoItem2);

// getElementsByTagName
let $infoItem3 = document.getElementsByTagName("div"); // HTML 요소들의 태그를 의미
console.log($infoItem3);

// 요소의 클래스명 변경하기
let $name = document.getElementById("name");
$name.className = "dog-name";
console.log($name);
console.log($name.className);

// 요소의 아이디명 변경하기
let $animalInfo2 = document.querySelector("div.animal-info");
$animalInfo2.id = "animal";

console.log($animalInfo2);
console.log($animalInfo2.id);

// classList
let $color2 = document.getElementById("color");
$color2.classList.add("dog-color");
$color2.classList.remove("info-item");
console.log($color2);

// 텍스트 노드 변경
let $age = document.getElementById("age");
$age.textContent = "5살";
console.log($age);

// 노드 CSS 변경
let $color3 = document.getElementById("color");
$color3.style.color = "blue";
$color.style.fontSize = "30px";
