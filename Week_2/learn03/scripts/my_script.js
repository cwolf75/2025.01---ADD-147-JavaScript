// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  


// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    var name1 = "Cyn Marie";
    var firstName = "Cynthia",
        lastName = "Wolf";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Cyn";
    var name = "Ree";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    const taxRate = .07; // This is a constant
    var firstName = "Cynthia";
    var name = "Ree";
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    document.getElementById("new-tax").innerHTML = taxRate;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    // dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Lucy"
    document.getElementById("dog1-2").innerHTML = dog2;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}


function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 32 - 10
    document.getElementById("subtraction").innerHTML = "32 - 10 = " + subtraction;
    let multiplication = 4 * 8
    document.getElementById("multiplication").innerHTML = "4 * 8 = " + multiplication;
    let exponent = 2 ** 3
    document.getElementById("exponent").innerHTML = "2 ** 3 = " + exponent;
    let division = 32 / 4
    document.getElementById("division").innerHTML = "32 / 4 = " + division;
    let modulus = 12 % 5
    document.getElementById("modulus").innerHTML = "12 % 5 = " + modulus;
    let increment = 3;
    increment++;
    document.getElementById("increment").innerHTML = "3 increment = " + increment;
    let decrement = 3;
    decrement--;
    document.getElementById("decrement").innerHTML = "3 decrement = " + decrement;
    
}


function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10 " + "x = " + x;
    x += 1
    document.getElementById("plus_equals").innerHTML = "x += 1 " + "x = " + x;
    x -= 1
    document.getElementById("minus_equals").innerHTML = "x -= 1 " + "x = " + x;
    x *= 2
    document.getElementById("times_equals").innerHTML = "x *= 2 " + "x = " + x;
    x /= 2
    document.getElementById("divide_equals").innerHTML = "x /= 2 " + "x = " + x;
    x %= 3
    document.getElementById("modulus_equals").innerHTML = "x *= 3 " + "x = " + x;
}


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    let pens = [" Ballpoint ", " Rollerball", " Fineliner", " Fountain", " Marker"];
    document.getElementById("array").innerHTML = pens;

    let pen_type = {
        brandName: "Pilot",
        brandModel: "G2",
        cost: 3,
        color: "blue"
    };
    document.getElementById("object").innerHTML = `Object: ${pen_type.brandName} ${pen_type.brandModel}, Cost: ${pen_type.cost}, Color: ${pen_type.color}`;


}
