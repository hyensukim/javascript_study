const $fruitSelect = document.getElementById("fruitSelect");
$fruitSelect.addEventListener("change", (event) => {
  console.log(event.target.value);
});

$fruitSelect.remove(1); // select 문 내 옵션 제거 with index

const $userName = document.getElementById("userName");
const $passwrod = document.getElementById("password");
const $loginBtn = document.querySelector("button");

$loginBtn.addEventListener("click", () => {
  console.log($userName.value);
  console.log($passwrod.value);
});

$userName.addEventListener("input", (event) => {
  console.log(event.target.value);
});
