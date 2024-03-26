// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("button was clicked");
// };
let btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    //     console.log("you entered");
    // };

    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dbclick", function() {
        console.log("you double clicked me");
    });


}
function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("milky");
}

// btn.onclick = sayHello;

