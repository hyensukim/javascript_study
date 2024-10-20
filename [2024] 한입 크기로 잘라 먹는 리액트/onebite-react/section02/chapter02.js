function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

// 활용 사례
// 개선 전
function printNameVer1(person) {
  if (!person) {
    console.log("person 값이 없음.");
    return;
  }
  console.log(person.name);
}

// 개선 1
function printNameVer2(person) {
  console.log(person && person.name);
}

printNameVer1(undefined);
printNameVer1({ name: "김현수" });
printNameVer2(undefined);
printNameVer2({ name: "김현수" });

// 개선 2
function printNameVer3(person) {
  let name = person && person.name;
  console.log(name || "peron 값이 없음.");
}

printNameVer3(undefined);
printNameVer3({ name: "김현수" });
