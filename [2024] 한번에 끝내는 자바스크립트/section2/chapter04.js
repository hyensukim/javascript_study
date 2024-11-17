// state 프로퍼티가 fulfilled인 Promise 객체를 반환
let response = fetch("https://jsonplaceholder.typicode.com/users");
// response
//   .then((res) => {
//     // Response 객체 : fetch를 통해 API 호출 시, 결과로 반환되는 객체
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(response);

const getData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json(); // json 데이터를 객체 형식으로 파싱
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData();
