let x = "outer x";
{
    let x = "inner x";
    let y = "inner y";
    console.log(x); // inner x
    console.log(y); // inner y
}
console.log(x); // outer x
console.log(y); // Uncaught ReferenceError: y is not defined at ex2.js:9:13