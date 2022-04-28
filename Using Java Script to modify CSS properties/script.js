
let text01 = "Hi";
let text02 = "Hello";
//let name = (prompt("what is your Name?", " "));
let name = "hello3";


function showMessage(){
    document.getElementById("message").textContent = text01;
    document.getElementById("message2").textContent = text02;
    document.getElementById("name").textContent = name;

};

showMessage();

let button = document.getElementById("review");

button.addEventListener("click", function(){
    button.style.fontWeight = "800";
    button.style.color = "red";
});



