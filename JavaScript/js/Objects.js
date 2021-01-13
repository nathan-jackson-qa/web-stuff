'use strict';

let darthVader = new Object();
darthVader.allegiance = "Empire";
darthVader["weapon"] = "lightsabre";
darthVader.sith = true

darthVader.jedi = false;
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choise is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a jedi? ${darthVader.jedi}`);

let array = ["hello", "everyone."];
console.log(array.length);
console.log(array);

array.push("Nice");
array.push("to");
array.push("see you");
console.log(array.length);
console.log(array);

array.shift();
console.log(array.length);
console.log(array);

for(let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}

for(let eachElement of array) {
    console.log(eachElement);
}

let string = {'list': [{'name': "Nathan", age: 22}, {name:"John", age:26}, {name:"Rob", age: 43}]};
console.log(string);

// console.log(json);