const workA = () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000);
};

const workB = () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000);
};

const workC = () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000);
};

const workD = () => {
  console.log("workD");
};

workA();
workB();
workC();
workD();
