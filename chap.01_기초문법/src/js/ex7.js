function F(a,b) {
    this.a = a;
    this.b = b;
}

F.prototype.print = function() {
    console.log(`a : ${this.a}, b : ${this.b}`);
}

const f1 = new F(1,2);
const f2 = new F(3,4);
const f3 = new F(5,6);

f1.print();
f2.print();
f3.print();
console.log(f1.print === f2.print && f2.print === f3.print);