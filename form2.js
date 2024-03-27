let form = document.querySelector("form");
form.addEventListener("submit" , function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log(user.value);
    console.log(pass.value);
    // let inp = document.querySelector("input");
    // console.dir(inp);
    // console.log(inp.value)

    alert(`hi ${user.value}, ypur password is set to ${pass.value}`);
});

// not giving action by clicking button we use "preventdefault()"

// To extract data of form

