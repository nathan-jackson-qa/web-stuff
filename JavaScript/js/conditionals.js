'use strict';

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);
console.log(strictA != strictB);
console.log(strictA !== strictB);

let a = 50;
if(a>18 && a < 65) {
    console.log("Great age");
} else if(a<18)
{
    console.log("Underage");
}
else {
    console.log("Too old");
}

let b = ((a>=50) ? "Over 50" : "Under 50");
console.log(b)