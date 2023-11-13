/*
let num1 = 5;
let num2 = 5/2;

document.getElementById("p1").innerHTML = num2;
document.getElementById("p2").innerHTML = num1 / 2;

console.log(num2)
*/

/*
let username;
username = window.prompt("What's your name?");
console.log(username)
*/

/*
let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value
    document.getElementById("myP").innerHTML = "Hello "+ username;
}
*/

/*
let circumference;
document.getElementById("myButton").onclick = function () {
    circumference = Math.round(2*Math.PI*document.getElementById("myNumber").value);
    document.getElementById("myP").innerHTML = "Circumference is "+ circumference + " units";
}
*/

/*
let hypotenuse;
document.getElementById("myButton").onclick = function () {
    hypotenuse = Math.round(Math.sqrt(Math.pow(document.getElementById("sideA").value, 2) + Math.pow(document.getElementById("sideB").value, 2)));
    document.getElementById("myP").innerHTML = "The hypotenuse is "+ hypotenuse + " units";
}
*/

let count = 0;
document.getElementById("increment").onclick = function () {
    count++;
    document.getElementById("myP").innerHTML = count;
}
document.getElementById("decrement").onclick = function () {
    count--;
    document.getElementById("myP").innerHTML = count;
}
document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("myP").innerHTML = count;
}