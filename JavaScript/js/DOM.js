let google = document.querySelector("#googz");
console.dir(google);
google.title = "Bigg Googgz";
google.alt = "The Google Logo";
google.setAttribute("width","250px");


let testP = document.querySelector(".testP");
testP.style.backgroundColor = "#FF0000";

let testDiv = document.querySelectorAll(".TestDiv > p");
for(let i = 0 ; i < testDiv.length;i++)
{
    testDiv[i].style.backgroundColor = "#434242";
}
let newHeading = document.createElement("h1");
let theText = document.createTextNode("Heading has arrived");
newHeading.appendChild(theText);

const div = document.querySelector("#addToMe");
div.appendChild(newHeading);