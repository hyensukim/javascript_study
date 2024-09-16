const x = "outer x";
{
    const x = "inner x";
    const y = "inner y";
    console.log(x);
    console.log(y);
}
x = "other x";
console.log(x);
console.log(y);