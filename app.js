// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));
let para1 = document.createElement("p");
para1.innerText = "hey i am red";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "hey i am blue";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div= document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");
h1.innerText = "hey i am a h1";
para2.innerText = "hey i am a second para";
div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);


