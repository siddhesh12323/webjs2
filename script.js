/*
INTRO
let num1 = 5;
let num2 = 5/2;

document.getElementById("p1").innerHTML = num2;
document.getElementById("p2").innerHTML = num1 / 2;

console.log(num2)
*/

/*
WINDOW PROMPT
let username;
username = window.prompt("What's your name?");
console.log(username)
*/

/*
FUNCTIONS
let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value
    document.getElementById("myP").innerHTML = "Hello "+ username;
}
*/

/*
CIRCUMFERENCE
let circumference;
document.getElementById("myButton").onclick = function () {
    circumference = Math.round(2*Math.PI*document.getElementById("myNumber").value);
    document.getElementById("myP").innerHTML = "Circumference is "+ circumference + " units";
}
*/

/*
HYPOTENUSE
let hypotenuse;
document.getElementById("myButton").onclick = function () {
    hypotenuse = Math.round(Math.sqrt(Math.pow(document.getElementById("sideA").value, 2) + Math.pow(document.getElementById("sideB").value, 2)));
    document.getElementById("myP").innerHTML = "The hypotenuse is "+ hypotenuse + " units";
}
*/

/*
COUNTER
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
*/

/*
ROLL DICE, ADD ELEMENTS BY JS TO A DIV
let numberOfSides;
let numberOfDice;
let output;

document.getElementById("roll").onclick = function () {
    numberOfSides = document.getElementById("input1").value;
    numberOfDice = document.getElementById("input2").value;
    for (let index = 0; index < numberOfDice; index++) {
        output = Math.floor(Math.random()*numberOfSides) + 1;
        let paragraph = document.createElement("p");
        paragraph.textContent = "Output of dice #" + String((index + 1)) + ":- " + String(output);
        document.getElementById("myDiv").appendChild(paragraph);
        document.getElementById("myDiv").appendChild(document.createElement("br"));
    }
}
*/

/*
// CHECKED
let checked, upi, cod, emi;

document.getElementById("submit").onclick = function () {
    // Clear previous content in myDiv
    document.getElementById("myDiv").innerHTML = "";

    checked = document.getElementById("checkbox1");
    upi = document.getElementById("upi");
    cod = document.getElementById("cod");
    emi = document.getElementById("emi");

    if (checked.checked) {
        console.log("Checked!");
        addOutput("Checked!");
    } else {
        console.log("Not Checked :(");
        addOutput("Not Checked :(");
    }

    if (upi.checked) {
        console.log("UPI selected!");
        addOutput("UPI selected!");
    } else if (cod.checked) {
        console.log("COD");
        addOutput("COD selected!");
    } else if (emi.checked) {
        console.log("EMI");
        addOutput("EMI selected!");
    } else {
        console.log("No payment selected :(");
        addOutput("No payment selected :(");
    }
};

function addOutput(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.getElementById("myDiv").appendChild(paragraph);
    document.getElementById("myDiv").appendChild(document.createElement("br"));
}
*/

// Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = '026b3c07337543e29a2190611231611';

        const apiUrl = 'http://api.weatherapi.com/v1/current.json';

        // Make a GET request to the API with the API key in the headers
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'key': apiKey,
                'q': "Paris",
            }
        })
        .then(response => {
            // Check if the request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the data from the API
            console.log('API Response:', data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });