function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Cynthia Wolf";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    let length = myString.length;
    document.getElementById("length").innerHTML = myString.length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escape1 = "He's a real \"genius\" if you know what I mean.";
    document.getElementById("escape1").innerHTML = escape1; 

    let escape2 = "It\'s only the third week of the semester, and I'm already tired.";
    document.getElementById("escape2").innerHTML = escape2; 

    let escape3 = "This character is called a backslash:  \\.  This character is called a forward slash:  /.";
    document.getElementById("escape3").innerHTML = escape3; 

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph

    let name = "Cynthia Marie Wolf";
    let first = name.slice(0,7);
    document.getElementById("first").innerHTML = first; 
    
    // Use the Javascript substring Method to display your middle name to the middle paragraph

    let middle = name.slice(8,13);
    document.getElementById("middle").innerHTML = middle; 

    // Use the JavaScript subst Method to display your last name to the last paragraph

    let last = name.slice(14);
    document.getElementById("last").innerHTML = last; 

    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College."
    let newMajor = major.replace("Physical Therapy", "English");
    document.getElementById("newMajor").innerHTML = newMajor; 


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let myText2 = myText.toUpperCase();
    document.getElementById("upper").innerHTML = myText2; 


    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                ";
    let trimText2 = trimText.trim();
    document.getElementById("trim").innerHTML = trimText2; 

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let index = months.indexOf("May");
    document.getElementById("index").innerHTML = index; 



    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)

    let firstName = "Cynthia";
    let lastName = "Wolf";
    
    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph

    let greeting = `Howdy, ${firstName} ${lastName}!`;
    document.getElementById("greeting").innerHTML = greeting; 
}