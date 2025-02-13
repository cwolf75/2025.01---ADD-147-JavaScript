function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Cynthia Wolf"
      
    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */

       let a = 1; 
       let b = "one";
       let c = a + b;
       document.getElementById("add").innerHTML = c;

    // Demonstrate the use of toString() and print to the to-string paragraph

    let d = 5;
    document.getElementById("to-string").innerHTML = 
    d.toString() + "<br>" +
    (2 + 3).toString() + "<br>" +
    (1 + 4).toString();


    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let e = 3.14159;
    document.getElementById("exponent").innerHTML =
    e.toExponential(2) + "<br>" +
    e.toExponential(3) + "<br>" +
    e.toExponential(4);
    

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    let f = 3.14159;
    document.getElementById("fixed").innerHTML =
    e.toFixed(2) + "<br>" +
    e.toFixed(3) + "<br>" +
    e.toFixed(4);

    // Demonstrate the use of toPrecision() and print to the precision paragraph

    let g = 3.14159;
    document.getElementById("precision").innerHTML =
    e.toPrecision(2) + "<br>" +
    e.toPrecision(3) + "<br>" +
    e.toPrecision(4);

    // Demonstrate the use of parseFloat() and print to the float paragraph

    document.getElementById("float").innerHTML =
    parseFloat("5") + "<br>" +
    parseFloat("5.51") + "<br>" +
    parseFloat("5 25 50") + "<br>" +
    parseFloat("5 years") + "<br>" +
    parseFloat("years 5");

    // Demonstrate the use of parseInt() and print to the int paragraph

    document.getElementById("int").innerHTML =
    parseInt("5") + "<br>" +
    parseInt("5.51") + "<br>" +
    parseInt("5 25 50") + "<br>" +
    parseInt("5 years") + "<br>" +
    parseInt("years 5");

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    document.getElementById("equals").innerHTML = "The difference between == and === is easy:  === means that the numbers must be expressed " + "<br>" + 
    "absolutely identically.  That is, the number 1 must be written as the numeral 1 for this to be true. On the other hand, " + "<br>" +
    "using == means that just their values need to be the same.  That is, the number 1 and the word \'one' would be true using ==.";
    
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById("logic").innerHTML = "The logic here is such that Boolean /'and' operators are processed " + "<br>" + 
    "before Boolean /'or' operators by default.  To change this order, you'd have to use parenthesis because the operations" + "<br>" +
    "inside the parenthesis get processed ahead of other operations.";


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah

    function chooseSeason(season) {
        switch (season) {
            case "spring":
                season = "Spring is a time for new beginnings.";
                break;
            case "summer":
                season = "Summer is hot and full of bugs -- yuck!";
                break;
            case "autumn":
                season = "With brisk, clear days and chilly nights, autumn is clearly the best season.";
                break;
            case "winter":
                season = "Winter is a lovely season to cozy up inside and read books.";
                break;
                }
    
        document.getElementById("switch").innerHTML = season;
    }
    chooseSeason("autumn");
        
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    
    function oddsEvens(num) {
        let answer = (num % 2 === 0) ? "The number you entered is even." : "The number you entered is odd.";
        document.getElementById("ternary").innerHTML = answer;
    }
    oddsEvens(15);
    

}