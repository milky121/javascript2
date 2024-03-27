// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function(event)  {
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// });



let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    console.log("code = " , event.code); //arrowUp(U) ,arrowDown(D) , arrowLeft(L), arrowRight(R)
    if(event.code == "keyU"){
        console.log("character moves up");
    } else if (event.code == "keyD"){
        console.log("character moves down");
    } else if(event.code == "keyL"){
        console.log("character moves left");
    } else if(event.code == "keyR"){
        console.log("character moves right");
    }
});