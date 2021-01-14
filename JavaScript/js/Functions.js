// 'use scrict'

// function subtraction(num1, num2) {
//     return num1-num2;
// }

// console.log(subtraction(9,5));

// const welcome = function(name, age, gender) {
//     return `My name is ${name}, I am ${age} years old and of the gender ${gender}`;
// }

// console.log(welcome("Nathan", 22, "male"));

// powerUp = (n1, n2) => Math.pow(n1,n2);

// console.log(powerUp(5,2));
// console.log(powerUp(5,3));
// console.log(powerUp(5,4));
// console.log(powerUp(3,4));

// class Cat {
//     constructor(name, age, favTreat)
//     {
//         this.name = name;
//         this.age = age;
//         this.favTreat = favTreat;
//     }

//     favouriteTreat()
//     {
//         return this.favTreat;
//     }

//     getName()
//     {
//         return this.name;
//     }

//     getAge()
//     {
//         return this.age;
//     }
// }

// let cat = new Cat("Garfield", 19, "Lasange");
// let cat1 = new Cat("John", 32, "Chocco");
// let cat2 = new Cat("Mary", 2, "Fish");
// let cat3 = new Cat("Loco", 26, "Ice Cream");
// let cat4 = new Cat("Snake", 5, "Mice");
// console.log(cat.favouriteTreat());

// let arrayOfCats = [cat, cat1,cat2, cat3, cat4];
// for(let i = 0; i<arrayOfCats.length;i++)
// {
//     console.log(`This is ${arrayOfCats[i].getName()} they are ${arrayOfCats[i].getAge()} years old`);
// }

// function runPromise(){
//     let aPromise = new Promise((resolve, reject) => {
//         let delayedFinc = setTimeout(() =>{
//             let randomNumber = Math.random();
//             console.log(randomNumber);
//             (randomNumber < 0.5)? resolve(randomNumber):reject(randomNumber);
//         },Math.random()*5000);
//     }).then(()=> {
//         console.log("Random number was less than 0.5");
//     }).catch(()=> {
//         throw new Error("Invalid random number");
//     }).catch((message)=> {
//         console.log(message);
//         console.log("Random number was greater than 0.5");
//     });
// }
// console.log(runPromise());


let quote = ["I", "am", "your", "father"];
console.log(quote.indexOf("your"));
console.log(quote);
quote.pop();
console.log(quote);
quote.push("father");
console.log(quote);
quote.unshift("Luke");
console.log(quote);
let erroneousWord = "quote";
let lukeIsHere = quote.find(checkWord());
function checkWord(word) {
    return word == erroneousWord;
}

console.log(lukeIsHere);
let lukeIsAt;
// console.log(quote);
// console.log(quote);
// console.log(quote);
// console.log(quote);
// console.log(quote);
// console.log(quote);