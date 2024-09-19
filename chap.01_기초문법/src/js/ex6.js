const card = {suit:"하트", rank:"A", value:14};
console.log(card);

delete card.rank;
console.log(card);

console.log("suit" in card);
console.log("color" in card);

var person = {
    name : "KIM", 
    age : 20,
    gender : "M",
    getLoginInfo : function() {
        console.log(this);
    }
    };

person.getLoginInfo();
console.log(person.getLoginInfo());

var a = card;
a.suit = "스페이드";
console.log(card);

a.rank = 'A';
console.log(card);