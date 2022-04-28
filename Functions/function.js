function changeName(){
    let value01 = "New Message";
    document.getElementById("cont01").textContent = value01;
    document.getElementById("btn01").textContent = "Change back";
    
    console.log(value01);
}

//**IIFE functions */
let app = (function(){
    let carId = 123;
    console.log("in function");
    return {};
})();

console.log(app);
console.log(app.carId);

//**closures */

let app1 = (function(){
    let carId01 = 123;
    let getId = function(){
        return carId01;
    };
    return {
        getId: getId
    };
})();
console.log(app1.getId());



let funcArr = [
    function() {
        //alert('I am function 1!');
        document.getElementById("btn02").textContent = "changeBack"
    },
    
    function() {
        //alert('I am function 2!');
        document.getElementById("btn02").textContent = "Click me"
    },
    
   
];

let i=0;
function changeName02(){
    console.log("text")
    let btn = document.getElementsByTagName('button')[0];
    //let btn02 = document.getElementById("btn02")[0];
    funcArr[i++ % funcArr.length]();
}


