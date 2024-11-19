// let $type = document.createElement("div");
// $type.className = "info-item";
// $type.id = "type";
// let $typeText = document.createTextNode("말티즈");
// console.log($typeText);

// // appendChild : 요소를 원하는 노드 안에 자식 노드로 추가 가능
// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.appendChild($type);
// $type.appendChild($typeText);

// let $button = document.createElement("button");
// $button.classList.add("btn");
// $button.id = "new-btn";
// $button.textContent = "버튼";
// $button.addEventListener("click", () => {
//   window.confirm("클릭");
// });

// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.appendChild($button);

// DOM API 속성 중 하나 innerHTML :
let $animalInfo = document.querySelector("div.animal-info");
// 새로운 요소를 추가 시, 기존의 HTML은 전부 삭제되고 새로운 HTML 이 들어가게 된다.
$animalInfo.innerHTML = '<div id="name">고양이</div>';
console.log($animalInfo.innerHTML);
