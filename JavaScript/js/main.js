console.log("Console logging");
console.info("Console info over here");
console.warn("WARNING");
console.error("ERROR");

let named = "Nathan";
let twenty =20;
let float = 2.4;
let bool = false;

console.log(typeof named);
console.log(typeof twenty);
console.log(typeof float);
console.log(typeof bool);

let result = `5 + 3 = ${5+3}`;
console.log(result);

console.log("This is the first level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.group("Watch out people, we in the third group now");
console.error("We've dug too deep get out of here");
console.groupEnd();
console.warn("RUUUUUN");
console.groupEnd();
console.log("Thank god, we out, we good");
console.groupEnd();
console.debug("Right back to the safe time");


let myTxt = "Heres my text";
console.log("This is now %c The end of the exercises."+myTxt,"color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px;");
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let text = `The total bill is ${totalMoney} the remaining amount of money to be paid is ${totalMoney - moneyPaidSoFar}`;
console.log(text);

let test = 'testing "strings"';
console.log(test);
let test2,test3 = "a";
console.log(`some text ${test2} ${test3}`);
let test4 = "c" 
let test5 = "d";
console.log(`some text ${test4} ${test5}`);
console.log(2==true);