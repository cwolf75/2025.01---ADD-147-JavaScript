function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
   
    document.getElementById("round").innerHTML = Math.round(7.2);

    document.getElementById("ceil").innerHTML = Math.ceil(7.2);

    document.getElementById("floor").innerHTML = Math.floor(7.8);

    document.getElementById("trunc").innerHTML = Math.trunc(7.8);

    document.getElementById("sign").innerHTML = Math.sign(-5);

    document.getElementById("pow").innerHTML = Math.pow(5, 5);

    document.getElementById("min").innerHTML = Math.min(12, 7, 5, 1975, -25);

    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference:  done!

    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

// The difference between == and === is in how they read values.  The == means that the values being compared are equal or have an equivalent
// value.  The === means that the values are equal and are of the same type (i.e., they are both numbers, strings, etc.)  
// So, the number 7 == "7" is true because they have the same value, but 7 === "7" is false because, while they have the 
// same value, they are not the same type since one is a number while the other is a string. 

    let num = 15;
    document.getElementById("comparisons").innerHTML = (num === "15");
    
    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page:  done!
}